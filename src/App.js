import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';

function App() {
	return (
		<Router>
			<Navigation />
			<Routes>
				<Route path="/" exact={true} element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/movie/:id" element={<Detail />} />
			</Routes>
		</Router>
	);
}

export default App;
