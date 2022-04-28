import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
	return (
		<div className={styles.nav}>
			<Link to="/">Home</Link>
			<Link
				to={{
					pathname: '/about',
					state: {
						fromNavigation: true,
					},
				}}
			>
				About
			</Link>
		</div>
	);
}

export default Navigation;
