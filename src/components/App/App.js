import React, { Component } from 'react';
import { func } from 'prop-types';
import logo from './logo.svg';
import wolf from './wolf.gif';
import './App.css';
import CardContainer from '../CardContainer/CardContainer';
import { fetchApi } from '../../Utilities/api-helper'
import { connect } from 'react-redux';
import { storeHouses } from '../../actions';

export class App extends Component {
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
    }, 1000)
  }

  displayDecision = ({loaded}) => {
    const display = 
      !loaded ? 
        <img src={wolf} id='wolf' alt='loading-gif' /> :
        <CardContainer />
    return display
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          { this.displayDecision(this.state) }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  storeHouses: func.isRequired
};


export const mapDispatchToProps = dispatch => ({ 
  storeHouses: houses => dispatch(storeHouses(houses))
});

export default connect(null, mapDispatchToProps)(App);
