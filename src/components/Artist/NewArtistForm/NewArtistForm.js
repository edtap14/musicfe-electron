import React, { useCallback, useState } from 'react';
import { Form, Image } from 'semantic-ui-react';
import { useDropzone } from 'react-dropzone';
import { useFormik } from 'formik';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { Storage, Artist } from '../../../api';
import { noImage } from '../../../assets/';
import { validationSchema, initialValues } from './NewArtistDorm.data';
import './NewArtistForm.scss';

const storageController = new Storage();
const artistController = new Artist();

export function NewArtistForm({ onClose }) {
	const [image, setImage] = useState(null);

	const onDrop = useCallback(async (acceptedFile) => {
		const file = acceptedFile[0];
		setImage(URL.createObjectURL(file));
		formik.setFieldValue('file', file);
	});

	const { getInputProps, getRootProps } = useDropzone({ onDrop });

	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: validationSchema(),
		validateOnChange: false,
		onSubmit: async (formValue) => {
			try {
				const { file, name } = formValue;
				const response = await storageController.uploadFile(
					file,
					'artist',
					uuidv4(),
				);
				const url = await storageController.getUrlFile(
					response.metadata.fullPath,
				);

				await artistController.create(url, name);
				onClose();
			} catch (error) {
				console.log(error);
			}
		},
	});

	return (
		<Form className='new-artist-form' onSubmit={formik.handleSubmit}>
			<div
				{...getRootProps()}
				className={classNames('new-artist-form__banner', {
					error: formik.errors.file,
				})}>
				<input {...getInputProps()} />
				<Image
					src={image || noImage}
					className={classNames({ full: image })}
				/>
			</div>
			<Form.Input
				name='name'
				value={formik.values.name}
				placeholder='Nombre del artista'
				onChange={formik.handleChange}
				error={formik.errors.name}
			/>
			<Form.Button
				type='submit'
				primary
				fluid
				loading={formik.isSubmitting}>
				Crear Artista
			</Form.Button>
		</Form>
	);
}
