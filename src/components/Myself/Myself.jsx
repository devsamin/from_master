import React, { useContext } from 'react';
import Special from '../Special/Special';
import { MoneyContext } from '../Grandpa/Grandpa';

const Myself = ({asset}) => {
    const [money] = useContext(MoneyContext)
    return (
        <div>
            <h2>Myself</h2>
            <h2>{money}</h2>
            <section className="flex">
                <Special asset={asset}></Special>
            </section>
        </div>
    );
};

export default Myself;