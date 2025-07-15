import React from 'react';
import Friends from '../Friends/Friends';

const Cousin = ({name}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            {name === 'korim' && <Friends></Friends>}
        </div>
    );
};

export default Cousin;