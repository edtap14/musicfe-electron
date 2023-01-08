import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'
import { useFormik } from 'formik'
import { User } from '../../../api'
import { validationSchema, initialValues } from './EmailUpdateForm.data'

const userController = new User()

export function EmailUpdateForm ({ onClose }) {
  const [showPassword, setShowPassword] = useState(false)
  const onshowHidenPassword = () => setShowPassword(prevState => !prevState)

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async formData => {
      const { email, password } = formData
      try {
        await userController.updateUserEmail(email, password)
        onClose()
      } catch (error) {
        console.log(error)
      }
    }
  })

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        onChange={formik.handleChange}
        value={formik.values.email}
        error={formik.errors.email}
        name='email'
        placeholder='Nuevo Correo electronico'
			/>
      <Form.Input
        onChange={formik.handleChange}
        value={formik.values.password}
        error={formik.errors.password}
        name='password'
        type={showPassword ? 'text' : 'password'}
        placeholder='contraseña'
        icon={{
          name: showPassword ? 'eye slash' : 'eye',
          link: true,
          onClick: onshowHidenPassword
        }}
			/>

      <Form.Button
        type='submit'
        fluid
        primary
        loading={formik.isSubmitting}
			>
				Actualizar email
			</Form.Button>
    </Form>
  )
}
