import React, { useCallback, useState } from 'react'
import { Image } from 'semantic-ui-react'
import { User, Storage } from '../../../api'
import { useDropzone } from 'react-dropzone'
import { defaultUser } from '../../../assets'
import './AvatarUpdate.scss'

const userController = new User()
const storageController = new Storage()

export function AvatarUpdate () {
  const { photoURL, uid } = userController.getMe()

  const [avatarUrl, setAvatarUrl] = useState(photoURL || defaultUser)

  const onDrop = useCallback(async acceptedFile => {
    const file = acceptedFile[0]
    console.log({ file })
    setAvatarUrl(URL.createObjectURL(file))
    const response = await storageController.uploadFile(
			file,
			'avatar',
			uid
		)
    console.log(response)
  })

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div className='avatar-update' {...getRootProps()}>
      <input {...getInputProps()} />
      <Image src={avatarUrl} />
    </div>
  )
}
