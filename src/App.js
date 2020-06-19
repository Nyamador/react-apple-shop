import React from 'react';
import Header from './common/Header';
import { Route } from 'react-router-dom';
import Grid from './common/Grid';
import ProductPage from './Pages/ProductPage';
import './styles/index.css';

function App() {
	return (
		<>
			<Header />
			<Route exact path='/' component={Grid} />
			<Route path='/products/:slug'>
				<ProductPage />
			</Route>
		</>
	);
}

export default App;
