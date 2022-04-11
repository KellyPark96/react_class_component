import React from "react";
import axios from "axios";

class App extends React.Component {
	state = {
		isLoading: true,
	};
	getMoves = async () => {
		const movies = await axios.get(
			"https://yts.mx/api/v2/list_movies.json"
		);
	};
	componentDidMount() {
		// fetch data API
		this.getMovies();
	}
	// comment
	render() {
		const { isLoading } = this.state;
		return <div>{isLoading ? "Loading" : "We are Ready"}</div>;
	}
}

export default App;
