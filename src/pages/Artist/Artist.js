import React, {
    useEffect,
    useState
} from 'react'
import { useParams } from 'react-router-dom'
import {
    Album,
    Artist as ArtistController
} from "../../api";
import { ArtistBanner } from '../../components/Artist'
import { Slider } from "../../components/Shared";
import './Artist.scss'


const artistController = new ArtistController()
const albumController = new Album()

export function Artist() {
    const { id } = useParams()
    const [ artist, setArtist ] = useState(null)
    const [ albums, setAlbums ] = useState(null);

    useEffect(() => {
        ( async () => {
            try{
                const response = await artistController.getArtist(id)
                setArtist(response)
            } catch(e){
                console.error(e)
            }
        } )()
    }, [ id ])

    useEffect(() => {
        ( async () => {
            try{
                const response = await albumController.getAlbumsByArtist(id)
                setAlbums(response)
            } catch(err){
                console.error(err)
            }
        } )()
    }, [ id ]);


    if ( !artist ) return null

    return (

        <div className={ 'artist-page' }>
            <ArtistBanner image={ artist.image } name={ artist.name }/>
            <div className={ "artist-page__slider" }>
                <h2>Albumes</h2>
                <Slider data={ albums } basePath='albums'/>
            </div>
            <div className={ "artist-page__slider" }>
                <h2>Canciones</h2>
                {/*TODO: Lista de canciones*/ }
            </div>
        </div> )
}
