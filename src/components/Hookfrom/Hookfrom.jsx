import React from 'react';
import UseinputState from '../../hooks/useinputstate';

const Hookfrom = () => {
    // const [name, handelchange] = UseinputState('saminnna')
    const emailstate = UseinputState('samin@gmail.com')

    const hendelevent = e =>{
        console.log("form data", emailstate.value)
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={hendelevent}>
                {/* <input value={name} onChange={handelchange} type="text" name='name' /> */}
                <br />
                <input {...emailstate}  type="email" name='email' />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Hookfrom;