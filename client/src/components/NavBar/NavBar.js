import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import Logo from '../../img/logo.png';

const NavBar = () => {
	const [activeItem, setActiveItem] = useState('home');

	const tabNames = ['home'];

	const handleItemClick = (e, { name }) => {
		setActiveItem(name);
	};

	const GITHUB_LINK = 'https://github.com/yebrandon/react-node-boilerplate';

	return (
		<Menu>
			<Menu.Item fitted className='borderless'>
				<img className='logo' src={Logo} alt='logo' />
			</Menu.Item>
			<Menu.Item className='logo-text'>React App</Menu.Item>

			{tabNames.map((tabName) => {
				return (
					<Menu.Item
						key={tabName}
						as={Link}
						name={tabName}
						active={activeItem === tabName}
						onClick={handleItemClick}
						to={'/' + tabName}
					/>
				);
			})}

			<Menu.Item
				as='a'
				active={activeItem === 'github'}
				onClick={handleItemClick}
				href={GITHUB_LINK}
				position='right'
				icon='github'
			/>
		</Menu>
	);
};

export default NavBar;
