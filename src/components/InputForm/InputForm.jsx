import React, {useState} from "react";
import style from "./InputForm.module.css"

const InputForm = () => {
    // const [firstName, setFirstname] = useState('')
    // const [secondName, setSecondname] = useState('')
    // const [email, setEmail] = useState('')
    // const [adress, setAdress] = useState('')
    const [state, setState] = useState({
        firstName: "",
        seconsName: "",
        email: "",
        adress: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(firstName)
        // console.log(secondName)
        // console.log(email)
        // console.log(adress)
        console.log(state)
        setState({
            firstName: "",
            seconsName: "",
            email: "",
            adress: ""
        })
    }

    return (
        <form className={style.form}>
            
            <input
                value={state.firstName}
                onChange={(e) => setState(state => ({...state, firstName: e.target.value}))}
                placeholder="email" type="text" />
            <input
                value={state.seconsName}
                onChange={(e) => setState(state => ({...state, seconsName: e.target.value}))}
                placeholder="adress" type="text" />
            <input
                value={state.email}
                onChange={(e) => setState(state => ({...state, email: e.target.value}))}
                placeholder="email" type="text" />
            <input
                value={state.adress}
                onChange={(e) => setState(state => ({...state, adress: e.target.value}))}
                placeholder="adress" type="text" />
            <input
                value="send"
                onClick={(e)=>handleSubmit(e)}
                type="submit" />
        </form>
    )
}

export default InputForm
