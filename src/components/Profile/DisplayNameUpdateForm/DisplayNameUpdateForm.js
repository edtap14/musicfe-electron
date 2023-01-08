import React from 'react'
import { Form } from 'semantic-ui-react'
import { useFormik } from 'formik'
import { User } from '../../../api'
import { initialValues, validationschema } from './DisplayNameUpdateForm.data'

const userController = new User()

export function DisplayNameUpdateForm ({ onClose }) {
  const { displayName } = userController.getMe()

  const formik = useFormik({
    initialValues: initialValues(displayName),
    validationSchema: validationschema(),
    validateOnChange: false,
    onSubmit: async formData => {
      const { displayName } = formData
      try {
        await userController.updateDisplayName(displayName)
        onClose()
      } catch (error) {
        console.log(error)
      }
    }
  })

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        value={formik.values.displayName}
        onChange={formik.handleChange}
        error={formik.errors.displayName}
        name='displayName'
        placeholder='Nombre y apellidos'
			/>
      <Form.Button
        type='submit'
        primary
        fluid
        loading={formik.isSubmitting}
			>
				Actualizar nombre
			</Form.Button>
    </Form>
  )
}
