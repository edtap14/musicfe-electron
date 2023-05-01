import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';
import { BasicModal } from '../../Shared';
import { NewArtistForm } from '../../Artist';
import './LeftMenu.scss';
import {AddAlbumForm} from "../../Albums";

export function LeftMenu() {
	const { pathname } = useLocation();

	const [showModal, setShowModal] = useState(false);
	const [titleModal, setTitleModal] = useState('');
	const [contentModal, setContentModal] = useState(null);

	const isCurrentPage = (route) => {
		return route === pathname;
	};

	const closeModal = () => {
		setShowModal(false);
		setTitleModal('');
		setContentModal(null);
	};

	const openModal = (type) => {
		if (type === 'artist') {
			setTitleModal('Nuevo Artista');
			setContentModal(<NewArtistForm onClose={closeModal} />);
		}
		if (type === 'album') {
			setTitleModal('Nuevo Album');
			setContentModal(<AddAlbumForm onClose={closeModal} />);
		}
		if (type === 'song') {
			setTitleModal('Nueva Canción');
			setContentModal(<p>Formulario nueva canción</p>);
		}

		setShowModal(true);
	};

	return (
		<>
			<div className='left-menu'>
				<Menu secondary vertical fluid>
					<Menu.Item
						as={Link}
						to='/'
						name='Inicio'
						icon='home'
						active={isCurrentPage('/')}
					/>
					<Menu.Item
						as={Link}
						to='/artists'
						name='Artiastas'
						icon='users'
						active={isCurrentPage('/artists')}
					/>
					<Menu.Item
						as={Link}
						to='/albums'
						name='Albumes'
						icon='window maximize outline'
						active={isCurrentPage('/albums')}
					/>
				</Menu>
				<Menu secondary vertical fluid>
					<Menu.Item
						name='Nueva canción'
						icon='plus'
						link
						onClick={() => openModal('song')}
					/>
					<Menu.Item
						name='Nuevo álbum'
						icon='plus'
						link
						onClick={() => openModal('album')}
					/>
					<Menu.Item
						name='Nuevo artista'
						icon='plus'
						link
						onClick={() => openModal('artist')}
					/>
				</Menu>
			</div>
			<BasicModal
				show={showModal}
				onClose={closeModal}
				title={titleModal}
				children={contentModal}
			/>
		</>
	);
}
