import React, {
    useEffect,
    useState
} from 'react'
import { Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Artist } from '../../../api'
import './AlbumInfo.scss'

const artistController = new Artist()

export function AlbumInfo({ album }) {
    const [ artistData, setArtistData ] = useState(null)

    useEffect(() => {
        ( async () => {
            try{
                const response = await artistController.getArtist(album?.artist)
                setArtistData(response)
            } catch(err){
                console.error(err)
            }
        } )()
    }, [ album ])
    return (
        <div className='album-info'>
            <Image src={ album?.image } alt={ album?.name }/>
            <div>
                <h1>{ album?.name }</h1>
                <p>De <Link to={ `/artists/${ album?.artist }` }>{ artistData?.name }</Link></p>
            </div>
        </div>
    )
}
