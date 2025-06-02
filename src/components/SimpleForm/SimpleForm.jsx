import React from 'react';

const SimpleForm = () => {

    const hendelevent = (e)=>{
        e.preventDefault()
        console.log(e.target.name.value)
        console.log(e.target.email.value)
    }
    return (
        <div>
            <form onSubmit={hendelevent}>
                <input type="text" name='name' />
                <br />
                <input type="email" name='email' />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;