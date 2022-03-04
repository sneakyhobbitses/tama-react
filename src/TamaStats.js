import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import TamaStatBox from './TamaStatBox';

/* TODO by feb 16th 2022: 
    1) Convert tamaStats to a piece of local state in TamaStats (state allows for the manipulation of the data ie to update)
    2) Pass them to the StatBox components the same as you are right now
    3) Add a button that satisfies the need of the tama for a single stat (sets it to 0)

    I EXPECT THIS ONE TO REQUIRE QUESTIONS/MORE HELP
    4) add a timer to cause one of the stats to tick down to 0 over time
*/


class TamaStats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tamaStats: [
                {
                    currentValue: 4,
                    key: 'hongy',
                    statName: 'hongy',
                    maximumValue: 10
                },
                {
                    currentValue: 11,
                    key: 'boreddddddddddd',
                    statName: 'boreddddddddddd',
                    maximumValue: 10
                },
                {
                    currentValue: 0,
                    key: 'gotta go',
                    statName: 'gotta go',
                    maximumValue: 10
                }
            ]
        };
        this.handleClick = this.handleClick.bind(this);
        handleClick(e) {
            this.setState({ currentValue: 0 });
        }
    }
    render() {
        const currentStats = this.state.tamaStats.map(curStats => (<TamaStatBox {...curStats} />));
        return (
            <div>
                <p>
                    {currentStats}
                </p>
                <p>
                    <button onClick={this.handleClick}>
                        help
                    </button>
                </p>
            </div>
        )
    }
}


export default TamaStats;