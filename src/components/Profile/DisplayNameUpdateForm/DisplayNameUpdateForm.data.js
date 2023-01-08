import * as Yup from 'yup'

export function initialValues (name) {
  return {
    displayName: name || ''
  }
}

export function validationschema () {
  return Yup.object({
    displayName: Yup.string().required(true)
  })
}
