import React from 'react';
import { ReactDOM } from 'react-dom';
import MarketingApp from './components/MarketingApp';

export default () => {
    return (
        <div>
            <h1>{'Hi there ##R '}</h1>
            <hr/>
            <h1>{<MarketingApp />}</h1>
        </div>
    )
}
