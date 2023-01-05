import React, { useState } from 'react'
import { Button, Form, Icon } from 'semantic-ui-react'
import './LoginForm.scss'
import { useFormik } from 'formik'
import { initialValues, validationSchema } from './LoginForm.data'
import { Auth } from '../../../api/auth'

const auth = new Auth()
export function LoginForm ({ openRegister, goBack }) {
  const [showPassword, setShowPassword] = useState(false)

  const onShowHidenPassword = () => setShowPassword(prevState => !prevState)

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async formValue => {
      const { password, email } = formValue
      try {
        await auth.login(email, password)
      } catch (error) {
        console.log(error)
      }
    }
  })

  return (
    <div className='login-form'>
      <h1>Música para todos</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Input
          name='email'
          type='text'
          placeholder='Correo electronico'
          icon='mail outline'
          onChange={formik.handleChange}
          error={formik.errors.email}
          value={formik.values.email}
				/>
        <Form.Input
          name='password'
          type={showPassword ? 'text' : 'password'}
          placeholder='password'
          onChange={formik.handleChange}
          error={formik.errors.password}
          value={formik.values.password}
          icon={
            <Icon
              name={showPassword ? 'eye slash' : 'eye'}
              link
              onClick={onShowHidenPassword}
						/>
					}
				/>
        <Form.Button
          type='submit'
          primary
          fluid
          loading={formik.isSubmitting}
				>
					Iniciar Sesión
				</Form.Button>
      </Form>
      <div className='login-form__options'>
        <p onClick={goBack}>Volver</p>
        <p>
					¡No tienes cuenta?{' '}
          <span onClick={openRegister}>Regístrarse</span>
        </p>
      </div>
    </div>
  )
}
