import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColor = '#fff';

let fakeServerData = {
	user:{
		name: 'Bugra',
		playlists: [
			{
				name:'My Favorites',
				songs: [{name:'Beat it', duration: 1345}, {name: 'Canneloni Makaroni', duration:700},{name: 'Rosa Helicopter', duration: 70000}]
			},
			{
				name:'Weekly Discover',
				songs: [{name:'Beat it', duration: 1345}, {name: 'Canneloni Makaroni', duration:700},{name: 'Rosa Helicopter', duration: 70000}]
			},
			{
				name:'Another Playlist - the Best One!!',
				songs: [{name:'Beat it', duration: 1345}, {name: 'Canneloni Makaroni', duration:700},{name: 'Rosa Helicopter', duration: 70000}]			},
			{
				name:'Playlist - Yupp!!',
				songs: [{name:'Beat it', duration: 1345}, {name: 'Canneloni Makaroni', duration:700},{name: 'Rosa Helicopter', duration: 70000}]			}
		]
	}
};

class PlaylistCounter extends Component{
	render(){
		return(
			<div style={{width: "40%", display: 'inline-block'}}>
				<h2 style={{color: defaultTextColor}}>{this.props.playlists.length} playlist</h2>
			</div>

		);
	}
}

class HourCounter extends Component {
	render() {
	  let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
		return songs.concat(eachPlaylist.songs)
	  }, [])
	  let totalDuration = allSongs.reduce((sum, eachSong) => {
		return sum + eachSong.duration
	  }, 0)
	  return (
		<div style={{width: "40%", display: 'inline-block', color:defaultTextColor}}>
		  <h2>{Math.round(totalDuration/3600)} hours</h2>
		</div>
	  );
	}
  }

class Filter extends Component{

	render(){
		return(
			<div>
				<img/>
				<input type="text" onKeyUp = {event => this.props.onTextChange(event.target.value)}/>
			</div>
		);
		
	}
}

class Playlist extends Component{
	render(){
		let playlist = this.props.playlist
		return(
			<div style={{color: defaultTextColor, width: "25%"}}>
				<img />
				<h3> {playlist.name} </h3>
				<ul>
					{playlist.songs.map(song => 
						<li>{song.name}</li>
					)}
				</ul>
			</div>
		);
	}
}

class App extends Component {
	constructor(){
		super()
		this.state = {
			serverData:{},
			filterString: ''
		}
	}
	componentDidMount(){
		setTimeout(() => {
			this.setState({serverData: fakeServerData});

		}, 1000);
	}
	render() {
		let playlistToRender = this.state.serverData.user ? this.state.serverData.user.playlists.filter(playlist => 
			playlist.name.toLowerCase().includes(
				this.state.filterString.toLowerCase()
			)) : []
    return (
	    <div className="App">
		    {this.state.serverData.user ?
			<div>
		    		<h1 style={{color:defaultTextColor}}>{this.state.serverData.user && this.state.serverData.user.name}'s Playlists</h1>
		    		<PlaylistCounter playlists = {playlistToRender}/> 
		    		<HourCounter playlists={playlistToRender}/>
				<Filter onTextChange={text => this.setState({filterString : text})}/>
				{
					playlistToRender.map(playlist =>
						<Playlist playlist={playlist}/>
					)
				}
			</div> : <h1 style = {{color: defaultTextColor}}>  Loading... </h1>
		    }
	    </div>
    );
  }
}

export default App;
