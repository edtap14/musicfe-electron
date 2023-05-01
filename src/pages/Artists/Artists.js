import React, {useEffect, useState} from 'react'
import { Artist } from '../../api'
import {ListArtists} from '../../components/Artist'
import './Artists.scss'

const artistController = new Artist()

export function Artists () {
    const [artists, setArtists] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const response = await artistController.obtainAll()
                setArtists(response)
            } catch (e) {
                console.error(e)
            }
        })()
    }, [])
  return (
    <div className='artists-page'>
      <h1>Artist</h1>
        <ListArtists
         artists={artists}
        />
    </div>
  )
}
