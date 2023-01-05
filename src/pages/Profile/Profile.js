import React from 'react'
import { Button } from 'semantic-ui-react'
import { AvatarUpdate } from '../../components/Profile'
import { User } from '../../api'
import './Profile.scss'

const userController = new User()

export const Profile = () => {
  const { displayName, email } = userController.getMe()

  return (
    <div className='profile'>
      <h1>Configuración</h1>

      <div className='profile__block'>
        <div>
          <AvatarUpdate />
          <span>
            {displayName}
          </span>
        </div>
        <Button onClick={() => console.log('Cambiar displayName')}>
					Actualizar
				</Button>
      </div>
      <div className='profile__block'>
        <span>
					Email: {email}
        </span>
        <Button onClick={() => console.log('Cambiar email')}>
					Actualizar
				</Button>
      </div>
      <div className='profile__block'>
        <span>Contraseña: ********</span>
        <Button onClick={() => console.log('Cambiar contraseña')}>
					Actualizar
				</Button>
      </div>
    </div>
  )
}
