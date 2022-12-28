import React from 'react'
import { Button } from 'semantic-ui-react'

export function RegisterForm ({ openLogin, goBack }) {
  return (
    <div style={{ backgroundColor: '#000' }}>
      <h1>RegisterForm</h1>
      <Button primary onClick={openLogin}>
				Login
			</Button>
      <Button secondary onClick={goBack}>
				Regresar
			</Button>
    </div>
  )
}
