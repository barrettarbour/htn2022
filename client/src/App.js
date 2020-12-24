import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import './App.css';

const App = () => {
	return (
		<HashRouter basename='/'>
			<NavBar></NavBar>
			<Switch>
				<Route exact path='/' render={() => <Home />} />
				<Route path='/home' render={() => <Home />} />
				<Route path='/about' render={() => <About />} />
			</Switch>
		</HashRouter>
	);
};

export default App;
