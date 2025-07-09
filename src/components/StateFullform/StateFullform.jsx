import React, { useState } from 'react';

const StateFullform = () => {
    const [email, setemail] = useState(null)
    const [password, setpassword] = useState(null)
    const [error, seterror] = useState(null)

    const handelemail = (e)=>{
        // e.preventDefault()
        console.log(e.target.value);
        setemail(e.target.value)
    }
    const handelpassword = (e) =>{
        setpassword(e.target.value)
    }
    const hendelevent = (e)=>{
        e.preventDefault()
        if(password.length < 7){
            seterror('password must be 8 character')
        }
        else{
            seterror('');
            console.log(email, password);
        }
        
    }
    return (
        <div>
            <form onSubmit={hendelevent}>
                <input type="text" name='name' />
                <br />
                <input
                 onChange={handelemail}
                  type="email" name='email' />
                <br />
                <input onChange={handelpassword} type="password" name='password' />
                <br />
                <input type="submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFullform;