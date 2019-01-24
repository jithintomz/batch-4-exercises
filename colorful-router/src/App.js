import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import './styles/App.css';
import ColorList from './components/ColorList';
import Color from './components/Color';
import NewColor from './components/NewColor';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        {
          name: 'red',
          hex: '#FF0000',
        },
        {
          name: 'green',
          hex: '#00FF00',
        },
        {
          name: 'blue',
          hex: '#0000FF',
        },
      ],
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newColor) {
    this.setState({ colors: [newColor, ...this.state.colors] });
  }

  render() {
    const colorListComponent = () => (
      <ColorList colors={this.state.colors} />
    );

    const allRoutes = this.state.colors.map((colorObject) => {
      return <Route key={colorObject.hex}  exact path={`/colors/${colorObject.name}`} 
      render = {(props) => <Color key={colorObject.hex} color = {colorObject} />} />    
    })

    return (
      <Switch>
        <Route exact path="/" render = {(props) => <ColorList colors = {this.state.colors}/>} />
        {allRoutes}
    <Route exact path="/colors/new" render = {(props) => <NewColor addColor={this.handleAdd} />} /> 
    </Switch>
    );
  }
}

export default App;
