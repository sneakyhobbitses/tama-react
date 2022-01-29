import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import TamaStatBox from './TamaStatBox';

class TamaStats extends React.Component {
    render() {
        const tamaStats = [
            {
                currentValue: 4,
                statName: 'hongy',
                maximumValue: 10
            },
            {
                currentValue: 11,
                statName: 'boreddddddddddd',
                maximumValue: 10
            },
            {
                currentValue: 0,
                statName: 'gotta go',
                maximumValue: 10
            }
        ];

        const currentStats = tamaStats.map(curStats => (<TamaStatBox {...curStats} />));
        return (
            <div>
                {currentStats}
            </div>
        )
    }
}


export default TamaStats;