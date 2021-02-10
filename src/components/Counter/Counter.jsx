import React, { useState } from 'react';
import ReactDOM from 'react-dom';

    const Counter = () => {
        const [state, setState] = useState('T_T')
       let x = {done:false}
       console.log(x.done)
              
       const done = () => {
           x.done=true;
           console.log(x.done)
       }

       const Element = () => <div>
           <button>{x.done ? setState("true") : setState("false")}</button>
          
       </div>
       return (
           <div>
               <button onClick={() => done()}>{state}</button>
               <Element />
           </div>
       )
      
    }

export default Counter