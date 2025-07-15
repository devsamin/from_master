import React, { createContext } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Anty from '../Anty/Anty';
import './Grandpa.css'

const AssetContext = createContext('gold')
const Grandpa = () => {
    const asset = 'Ring';
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <AssetContext.Provider value='gold'>
                <section className=' flex'>
                    <Father asset={asset}></Father>
                    <Uncle></Uncle>
                    <Anty></Anty>
                </section>
            </AssetContext.Provider>
            
        </div>
    );
};

export default Grandpa;