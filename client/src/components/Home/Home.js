import React from 'react';
import styles from './Home.module.scss';
import classNames from 'classnames';

const Home = () => {
	const className = classNames(styles.Home, styles.button);

	return <div className={className}>HOME</div>;
};

export default Home;
