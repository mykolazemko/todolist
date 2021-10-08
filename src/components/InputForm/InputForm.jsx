import React, {useState} from "react";
import style from "./InputForm.module.scss";
import QRCode from "react-qr-code";

const InputForm = () => {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        companyColor: "#777777",
        contactInformation: ""
    })
    const [selectedImage, setSelectedImage] = useState(null);

    const [showCard, setShowCard] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
        console.log(JSON.stringify(state));
        setShowCard(true)
        alert(`Name: ${state.lastName} ${state.lastName}, Logo: ${state.logo}, company color: ${state.companyColor}, contact information: ${state.contactInformation}`)      
    }

    return(
        <div>
            <form onSubmit={(e)=>handleSubmit(e)} className={!showCard ? style.form : style.hidden}>
                <label>
                    <input
                        type="text"
                        value={state.firstName}
                        placeholder="First Name"
                        onChange={(e) => setState({...state, firstName: e.target.value})}
                        required/>
                </label>
                <label>
                    <input
                        type="text"
                        value={state.lastName}
                        placeholder="Last Name"
                        onChange={(e) => setState({...state, lastName: e.target.value})}
                        required/>
                </label>                    
                <label>
                    <input
                        type="file"
                        accept="image/png, image/gif, image/jpeg"
                        onChange={(e) => setSelectedImage(URL.createObjectURL(e.target.files[0]))}
                        id="fileuploader"
                        required/>
                </label>
                <label>
                    <span>select color:</span>
                    <input
                        type="color"
                        value={state.companyColor}
                        innerHTML="kk"
                        onChange={(e) => setState({...state, companyColor: e.target.value})}
                        required/>
                </label>
                <label>
                    <input
                        type="text"
                        value={state.contactInformation}
                        placeholder="Contact Information"
                        onChange={(e) => setState({...state, contactInformation: e.target.value})}
                        required/>
                </label> 
                <label>
                    <input type="submit" name="" id="" value="Create card"/>
                </label>                            
            </form>
            <div className={showCard ? "" : style.hidden}>
                <div className={style.card} style={{backgroundColor: state.companyColor}}>
                    <img className={style.logo} src={selectedImage} alt="logo" />
                    <h3>{`${state.firstName} ${state.lastName}`}</h3>
                    <span>{state.contactInformation}</span>
                    <div className={style.qrContainer}>
                        <QRCode value={JSON.stringify(state)} level="H" size={200} bgColor="#000" fgColor="#0000"/>
                    </div>                    
                </div>
                <button onClick={() => setShowCard(!showCard)}>back to form</button>
            </div>
            
        </div>
    )    
}

export default InputForm