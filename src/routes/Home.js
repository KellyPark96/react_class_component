import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import styles from './Home.module.css';

class Home extends React.Component {
	state = {
		isLoading: true,
		movies: [],
	};
	getMovies = async () => {
		const {
			data: {
				data: { movies },
			},
		} = await axios.get(
			'https://yts-proxy.now.sh/list_movies.json?sort_by=rating'
		);
		this.setState({ movies, isLoading: false });
	};
	componentDidMount() {
		// Fetch data API
		this.getMovies();
	}
	// comment
	render() {
		const { isLoading, movies } = this.state;
		return (
			<section className={styles.container}>
				{isLoading ? (
					<div className={styles.loader}>
						<span className={styles.loader__text}>Loading...</span>
					</div>
				) : (
					<div className={styles.movies}>
						{movies.map((movie) => (
							<Movie
								key={movie.id}
								id={movie.title}
								year={movie.year}
								title={movie.title}
								summary={movie.summary}
								poster={movie.medium_cover_image}
								genres={movie.genres}
							/>
						))}
					</div>
				)}
			</section>
		);
	}
}

export default Home;