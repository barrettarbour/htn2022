import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import Logo from '../img/logo.png';

const NavBar = () => {
	const [activeItem, setActiveItem] = useState('home');

	const handleItemClick = (e, { name }) => {
		setActiveItem(name);
	};

	return (
		<Menu>
			<Menu.Item fitted className='borderless'>
				<img className='logo' src={Logo} alt='logo' />
			</Menu.Item>
			<Menu.Item className='logo-text'>React App</Menu.Item>
			<Menu.Item
				as={Link}
				name='home'
				active={activeItem === 'home'}
				onClick={handleItemClick}
				to='/home'
			>
				Home
			</Menu.Item>
			<Menu.Item
				as={Link}
				name='about'
				active={activeItem === 'about'}
				onClick={handleItemClick}
				to='/about'
			>
				About
			</Menu.Item>
		</Menu>
	);
};

export default NavBar;
