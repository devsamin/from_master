import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Anty = () => {
    const [money, setmoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>Anty</h2>
            <h3>{money}</h3>
            <section className="flex">
                <Cousin name={'sihisir'}></Cousin>
                <Cousin name={'sihisir'}></Cousin>
                <Cousin name={'sihisir'}></Cousin>
            </section>
            <button onClick={()=> setmoney(money+500)}>Add Money</button>
        </div>
        
    );
};

export default Anty;