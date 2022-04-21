import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
	const [Loading, setLoading] = userState(true);

	return (
		<div className={styles.nav}>
			{Loading ? null : (
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
		)}
		</div>
	);
}

export default Navigation;
