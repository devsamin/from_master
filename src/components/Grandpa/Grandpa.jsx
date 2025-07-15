import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Anty from '../Anty/Anty';
import './Grandpa.css'

export const AssetContext = createContext('gold');
export const MoneyContext = createContext(0);

const Grandpa = () => {
    const asset = 'Ring';
    const [money, setmoney] = useState(0)
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <h2>{money}</h2>
            <MoneyContext.Provider value={[money, setmoney]}>
                <AssetContext.Provider value='gold'>
                <section className=' flex'>
                    <Father asset={asset}></Father>
                    <Uncle></Uncle>
                    <Anty></Anty>
                </section>
            </AssetContext.Provider>
            </MoneyContext.Provider>
            
        </div>
    );
};

export default Grandpa;