import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColor = '#fff';

class Aggregate extends Component{
	render(){
		return(
			<div style={{width: "40%", display: 'inline-block'}}>
				<h2 style={{color: defaultTextColor}}>Number Text</h2>
			</div>

		);
	}
}

class Filter extends Component{
	render(){
		return(
			<div>
				<img/>
				<input type="text"/>
			</div>
		);
		
	}
}

class Playlist extends Component{
	render(){
		return(
			<div style={{color: defaultTextColor, width: "25%"}}>
				<img />
				<h3> Playlist Name </h3>
				<ul><li>Song1</li><li>Song2</li><li>Song3</li></ul>
			</div>
		);
	}
}

class App extends Component {
  render() {
    return (
	    <div className="App">
		    <h1 style={{color:defaultTextColor}}>Title</h1>
		    <Aggregate/> 
		    <Aggregate/>
		    <Filter/>
		    <Playlist/>
	    </div>
    );
  }
}

export default App;
