import React, { Component } from 'react';
import CardList from '../Components/cardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll.js'
import ErrorBoundary from '../Components/ErrorBoundary.js'

class App extends Component{
	constructor(){
		super()
		this.state = {
			Info:[],
			searchField: ''
		}
	}

	componentDidMount() {
		console.log("componentDidMount");
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				return response.json();
			})
			.then((users) => {
				this.setState({Info: users});
			})
	}

	onSearchChanges = (event) => {
		this.setState({ searchField : event.target.value });
	}

	render(){
		console.log(this.state.Info);
		const filteredCats = this.state.Info.filter(Info => {
			return Info.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		})
		return(
			<div className="tc">
				<h1>Robofriends</h1>
				<SearchBox searchChanges={this.onSearchChanges} />
				<Scroll>
					<ErrorBoundary>
						<CardList info={filteredCats} />
					</ErrorBoundary>
				</Scroll>
		    </div>
		);
	}
}

export default App;
