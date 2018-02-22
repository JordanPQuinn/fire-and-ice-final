import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import wolf from './wolf.gif';
import './App.css';
import { fetchApi } from '../../Utilities/api-helper'
import { connect } from 'react-redux';
import { storeHouses } from '../../actions';
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: false
    }

  }

  async componentDidMount() {
    const houseData = await fetchApi('http://localhost:3001/api/v1/houses')
    this.props.storeHouses(houseData)
    setTimeout( () => {
      this.setState({
      loaded: true
    })
    }, 2000)
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        { !this.state.loaded && 
          <img src={wolf} id='wolf' alt='loading-gif' />
        }
        <div className='Display-info'>
        </div>
      </div>
    );
  }
}

// App.propTypes = {
//   fake: shape({ fake: string }),
//   fakeAction: func.isRequired
// };

const mapStateToProps = ({houses}) => ({
  houses
});

const mapDispatchToProps = dispatch => ({ 
  storeHouses: houses => dispatch(storeHouses(houses))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
