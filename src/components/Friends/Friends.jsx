import React, { useContext } from 'react';
import { AssetContext } from '../Grandpa/Grandpa';

const Friends = () => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h2>Friend</h2>
            <h2>Has {gift}</h2>
        </div>
    );
};

export default Friends;