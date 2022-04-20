import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" exact={true} element={<Home />} />
				<Route path="/about" exact={true} element={<About />} />
			</Routes>
		</Router>
	);
}

export default App;
