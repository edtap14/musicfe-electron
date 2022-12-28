import React from 'react'
import { Button } from 'semantic-ui-react'

export function LoginForm ({ openRegister, goBack }) {
  return (
    <div style={{ backgroundColor: '#000' }}>
      <h1>LoginForm</h1>
      <Button primary onClick={openRegister}>
				Registro
			</Button>
      <Button secondary onClick={goBack}>
				Regresar
			</Button>
    </div>
  )
}
