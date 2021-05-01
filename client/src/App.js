import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import './App.scss';

const App = () => {
	return (
		<HashRouter basename='/'>
			<NavBar />
			<Switch>
				<Route exact path='/' render={() => <Home />} />
				<Route path='/home' render={() => <Home />} />
			</Switch>
		</HashRouter>
	);
};

export default App;
