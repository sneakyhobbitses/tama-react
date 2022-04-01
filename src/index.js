import React from 'react';
import ReactDOM from 'react-dom';
import TamaStats from './TamaStats';
import TamaStatBox from './TamaStatBox';

class App extends React.Component {
  render() {

    return (
      <div id="test-div">
          <TamaStats />   
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
