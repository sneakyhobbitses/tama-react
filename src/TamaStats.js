import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import TamaStatBox from './TamaStatBox';
import SatiateTama from './SatiateTama';

class TamaStats extends React.Component {
    constructor(props) {
        super(props);
// next we initialize state inside of the constructor...
        this.state = {
            tamaStats: [
                {
                    currentValue: 4,
                    key: 'hunger',
                    statName: 'hongy',
                    maximumValue: 10,
                    addressNeedText: 'feed',
                },
                {
                    currentValue: 11,
                    key: 'boredom',
                    statName: 'boreddddddddddd',
                    maximumValue: 10,
                    addressNeedText: 'play'
                },
                {
                    currentValue: 0,
                    key: 'bio',
                    statName: 'gotta go',
                    maximumValue: 10,
                    addressNeedText: 'go potty'
                }
            ]
        };
// here we have a timer for increasing a stat
        setInterval(() => {
            const hungerTimerStats = this.state.tamaStats.map(curStats => {
                let updatedStatValue = null;
                if (curStats.key === 'hunger' && curStats.currentValue <= 9) {
                    updatedStatValue = ++curStats.currentValue
                } else {
                    updatedStatValue = curStats.currentValue
                };
                return {
                    ...curStats,
                    currentValue: updatedStatValue
                }
            });
            this.setState({
                tamaStats: hungerTimerStats
            })
        }, 10000);
    };
// here is a setState that we are using onClick in the SatiateTama buttons
// the argument currentKey is being passed in within the component @ this.satisfyNeed('xyz')
    satisfyNeed(currentKey) {
        const updatedStats = this.state.tamaStats.map(curStats => ({
            ...curStats,
            currentValue: curStats.key === currentKey ? 0 : curStats.currentValue
        }));
        this.setState({
            tamaStats: updatedStats
        });
    };
// in the render we need to access the current stats of the tama
// using a spread operator within the TamaStatBox we give all of 
// the up-to-date information to the component

// the addressNeed prop determines the text of the button, 
// which has a placeholder in the child component, SatiateTama
    render() {
        const currentStats = this.state.tamaStats.map(curStats =>
        (<TamaStatBox {...curStats} />));
        return (
            <div>
                <span>
                    {currentStats}
                </span>
                
                <span>
                <SatiateTama addressNeed="feed" buttonClicker={() => {this.satisfyNeed('hunger')}}/>

                <SatiateTama addressNeed="play" buttonClicker={() => {this.satisfyNeed('boredom')}}/>
            
                <SatiateTama addressNeed="go potty" buttonClicker={() => {this.satisfyNeed('bio')}} />
                </span>
            </div>
        )
    }
}


export default TamaStats;
