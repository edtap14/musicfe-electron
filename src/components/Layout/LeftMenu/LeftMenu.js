import React from 'react'
import './LeftMenu.scss'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export function LeftMenu () {
  const { pathname } = useLocation()

  const isCurrentPage = route => {
    return route === pathname
  }

  return (
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
          onClick={() => console.log('subir cancion')}
				/>
        <Menu.Item
          name='Nuevo álbum'
          icon='plus'
          link
          onClick={() => console.log('subir album')}
				/>
        <Menu.Item
          name='Nuevo artista'
          icon='plus'
          link
          onClick={() => console.log('subir artista')}
				/>
      </Menu>
    </div>
  )
}
