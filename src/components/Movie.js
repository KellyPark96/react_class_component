import React from 'react';
import PropTypes from 'prop-types';
import styles from './Movie.module.css';

// component가 state가 필요없다면 class component 필요 x
function Movie({ id, year, title, summary, poster, genres }) {
	return (
		<div className={styles.movie}>
			<img src={poster} alt={title} title={title} />
			<div className={styles.movie__data}>
				<h3 className={styles.movie__title}>{title}</h3>
				<h5 className={styles.movie__year}>{year}</h5>
				<ul className={styles.genres}>
					{genres.map((genre, index) => (
						<li key={index} className={styles.genres__genre}>
							{genre}
						</li>
					))}
				</ul>
				<p className={styles.movie__summary}>
					{summary.length > 235
						? `${summary.slice(0, 235)}...`
						: summary}
				</p>
			</div>
		</div>
	);
}
Movie.propTypes = {
	year: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
