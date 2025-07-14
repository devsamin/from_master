import React from 'react';

const ReuseableFrom = ({handelsubmit,  submitbtn='Submit', children}) => {
    const hendelevent = (e) =>{
        e.preventDefault();
        const data = {
            name : e.target.name,
            email : e.target.email
        }
        handelsubmit(data)
    }

    return (
        <div>
            <h2>{children}</h2>
            <form onSubmit={hendelevent}>
                <input type="text" name='name' />
                <br />
                <input type="email" name='email' />
                <br />
                <input type="submit" value={submitbtn} />
            </form>
        </div>
    );
};

export default ReuseableFrom;