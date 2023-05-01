import React from 'react'
import { Form, Image } from "semantic-ui-react";
import classNames from 'classnames';
import './AddAlbumForm.scss'
import { Formik, useFormik } from 'formik';
import { initialValues, validationSchema } from './AddAlbumForm.data'

export function AddAlbumForm({ onClose }) {

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            console.log(formValue);
        }
    })


    return (
        <Form className={'add-album-form'} onSubmit={formik.handleSubmit}>
            <div className={"add-album-form__content"}>
                <div className={classNames('add-album-form__content-image', {
                    error: false
                })}>
                    {/* <input /> */}
                    <Image src={null} className={classNames({ full: null })} />
                </div>
                <div className='add-album-form__content-inputs'>
                    <Form.Input
                        name='name'
                        placeholder='Nombre del album'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.errors.name}
                    />
                    <Form.Dropdown
                        placeholder='El album pretenece...'
                        fluid
                        search
                        selection
                        options={[]}
                        error={false}
                    />
                </div>
            </div>
            <Form.Button
                primary
                fluid
                loading={formik.isSubmitting}
            >
                Crear Album
            </Form.Button>

        </Form>
    )
}