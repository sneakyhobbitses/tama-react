import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import TamaStatBox from './TamaStatBox';
import SatiateTama from './SatiateTama';

class TamaStats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tamaStats: [
                {
                    currentValue: 4,
                    key: 'hunger',
                    statName: 'hongy',
                    maximumValue: 10
                },
                {
                    currentValue: 11,
                    key: 'boredom',
                    statName: 'boreddddddddddd',
                    maximumValue: 10
                },
                {
                    currentValue: 0,
                    key: 'bio',
                    statName: 'gotta go',
                    maximumValue: 10
                }
            ]
        };
        this.handleClickStats = this.handleClickStats.bind(this);
        this.handleClickBoredom = this.handleClickBoredom.bind(this);
        this.handleClickBio = this.handleClickBio.bind(this);
        // setInterval(() => {
        //     const hungerTimerStats = this.state.tamaStats.map(curStats => {
        //         let updatedStatValue = null;
        //         if (curStats.key === 'hunger' && curStats.currentValue <= 9) {
        //             updatedStatValue = ++curStats.currentValue
        //         } else {
        //             updatedStatValue = curStats.currentValue
        //         };
        //         return {
        //             ...curStats,
        //             currentValue: updatedStatValue
        //         }
        //     });
        //     this.setState({
        //         tamaStats: hungerTimerStats
        //     })
        // }, 3000);
    }

    handleClickHunger() {
        const updatedHunger = this.state.tamaStats.map(curStats => ({
            ...curStats,
            currentValue: curStats.key === 'hunger' ? 0 : curStats.currentValue
        }));
        this.setState({
            tamaStats: updatedHunger
        })
        alert('u fed it');
    };
    handleClickBoredom() {
        const updatedBoredom = this.state.tamaStats.map(curStats => ({
            ...curStats,
            currentValue: curStats.key === 'boredom' ? 0 : curStats.currentValue
        }));
        this.setState({
            tamaStats: updatedBoredom
        })
        alert('not bored anymore!');
    };
    handleClickBio() {
        const updatedBio = this.state.tamaStats.map(curStats => ({
            ...curStats,
            currentValue: curStats.key === 'bio' ? 0 : curStats.currentValue
        }));
        this.setState({
            tamaStats: updatedBio
        })
        alert('*relieved*');
    };
    render() {
        const currentStats = this.state.tamaStats.map(curStats =>
            (<TamaStatBox {...curStats} />));
        return (
            <div>
                <p>
                    {currentStats}
                </p>
                <div>
                    <SatiateTama />
                    <button onClick={this.handleClickBoredom}>
                        play
                    </button>
                    <button onClick={this.handleClickBio}>
                        potty break
                    </button>
                </div>
            </div>
        )
    }
}


export default TamaStats;