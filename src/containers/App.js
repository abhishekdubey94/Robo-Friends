import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css';

class App extends React.Component {

	constructor(){
		super();
		this.state = {
			robots:[],
			searchfields:''
		}
	}

	onSearchChange = (event)=>{
		this.setState({	searchfields: event.target.value });
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(user => this.setState({ robots:user}));
		console.log(this.state);
	}

	render(){

		const {robots,searchfields} = this.state;

		const filteredRobots = robots.filter(robot=>{
			return robot.name.toLowerCase().includes(searchfields.toLowerCase());
		});
		if(!robots.length){
			return (
				<div>
				<h1>LOADING</h1>
				</div>
				);
		}
		else{
			return(
			<div className="tc">
				<h1 className="f1">Robofriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredRobots} />
					</ErrorBoundary>
				</Scroll>
			</div> );
		}

}
}
export default App;