import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'
import { useFormik } from 'formik'
import { User } from '../../../api'
import { initialValues, validationSchema } from './PasswordUpdateForm.data'

const userController = new User()

export function PasswordUpdateForm ({ onClose }) {
  const [showPassword, setShowPassword] = useState(false)

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async formValue => {
      const { password, newPassword } = formValue
      try {
        await userController.updateUserPassword(password, newPassword)
        onClose()
      } catch (error) {
        console.log(error)
      }
    }
  })

  const onShowHidenPassword = () => setShowPassword(prevState => !prevState)

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        name='password'
        type={showPassword ? 'text' : 'password'}
        placeholder='Contraseña actual'
        icon={{
          name: showPassword ? 'eye slash' : 'eye',
          link: true,
          onClick: onShowHidenPassword
        }}
        onChange={formik.handleChange}
        value={formik.values.password}
        error={formik.errors.password}
			/>
      <Form.Input
        name='newPassword'
        type={showPassword ? 'text' : 'password'}
        placeholder='Nueva Contraseña'
        icon={{
          name: showPassword ? 'eye slash' : 'eye',
          link: true,
          onClick: onShowHidenPassword
        }}
        onChange={formik.handleChange}
        value={formik.values.newPassword}
        error={formik.errors.newPassword}
			/>
      <Form.Input
        name='repeatNewPassword'
        type={showPassword ? 'text' : 'password'}
        placeholder='Repetir la nueva Contraseña'
        icon={{
          name: showPassword ? 'eye slash' : 'eye',
          link: true,
          onClick: onShowHidenPassword
        }}
        onChange={formik.handleChange}
        value={formik.values.repeatNewPassword}
        error={formik.errors.repeatNewPassword}
			/>
      <Form.Button
        type='submit'
        primary
        fluid
        loading={formik.isSubmitting}
			>
				Actualizar contraseña
			</Form.Button>
    </Form>
  )
}
