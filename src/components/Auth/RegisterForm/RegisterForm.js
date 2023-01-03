import React, { useState } from 'react'
import { Form, Icon } from 'semantic-ui-react'
import { useFormik } from 'formik'
import { Auth } from '../../../api'
import { initialValues, validationSchema } from './RegisterForm.data'
import './RegisterForm.scss'

const auth = new Auth()

export function RegisterForm ({ openLogin, goBack }) {
  const [showPassword, setShowPassword] = useState(false)
  const onShowHidenPassword = () => setShowPassword(prevState => !prevState)

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async formValue => {
      try {
        await auth.register(formValue.email, formValue.password)
      } catch (err) {
        console.error(err)
      }
    }
  })

  return (
    <div className='register-form'>
      <h1>Empieza a escuchar con una cuenta de Musicfy gratis</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Input
          type='text'
          placeholder='Correo electronico'
          icon='mail'
          name='email'
          onChange={formik.handleChange}
          error={formik.errors.email}
				/>
        <Form.Input
          type={showPassword ? 'text' : 'password'}
          placeholder='Contraseña'
          name='password'
          onChange={formik.handleChange}
          error={formik.errors.password}
          icon={
            <Icon
              name={showPassword ? 'eye slash' : 'eye'}
              link
              onClick={onShowHidenPassword}
						/>
					}
				/>
        <Form.Input
          type='text'
          name='username'
          onChange={formik.handleChange}
          error={formik.errors.username}
          placeholder='Como deberíamos llamarte'
          icon='user circle'
				/>
        <Form.Button
          type='submit'
          primary
          fluid
          loading={formik.isSubmitting}
				>
					Continuar
				</Form.Button>
      </Form>
      <div className='register-form__options'>
        <p onClick={goBack}>Volver</p>
        <p>
					¿Ya tienes Musicfy?<span onClick={openLogin}>
						Iniciar sesión
					</span>
        </p>
      </div>
    </div>
  )
}
