import React, { useEffect, useRef } from 'react';

const RefFrom = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    useEffect(()=>{
        nameRef.current.focus()
    },[])
    const hendelsubmit =(e)=>{
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }
    return (
        <div>
            <form onSubmit={hendelsubmit}>
                <input ref={nameRef} defaultValue={'Your name'} type="text" name='name' />
                <br />
                <input ref={emailRef}  type="email" name='email' />
                <br />
                <input ref={passwordRef} type="password" name='password' />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default RefFrom;