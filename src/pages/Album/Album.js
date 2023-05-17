import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Loader } from 'semantic-ui-react'
import { Album as AlbumController } from '../../api'
import { AlbumInfo } from '../../components/Albums'
import './Album.scss'

const albumController = new AlbumController()
export const Album = () => {
    const { id } = useParams()
    const [ album, setAlbum ] = useState( null )

    useEffect( () => {
        ( async () => {
            try {
                const response = await albumController.getAlbum( id )
                setAlbum( response )
            } catch ( error ) {
                console.log( error )
            }
        } )()
    }, [ id ] )

    if ( !album ) {
        <Loader active inline='centered' size='lage'>
            Cargando...
        </Loader>
    }
    return (
        <div className='album-page'>
            <AlbumInfo album={ album }/>
        </div>
    )
}
