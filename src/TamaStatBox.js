import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import TamaStats from './TamaStats';

class TamaStatBox extends React.Component {
    render() {
        return (
            <div className='TamaStatBox'>
                <p>{this.props.statName}: {this.props.currentValue}/{this.props.maximumValue}</p>
                <p>{this.props.hungerValue}</p>
            </div>
        )
    }
}

export default TamaStatBox;