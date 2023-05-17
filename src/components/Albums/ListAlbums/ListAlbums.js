import React from 'react'
import { Loader, Grid, Image } from 'semantic-ui-react'
import { map, size } from 'lodash'
import { Link } from 'react-router-dom'
import './ListAlbum.scss'

export function ListAlbums({ albums }) {

  if (size(albums) === 0) {
    return (
      <Loader active inline='centered' size='large'>
        Cargando...
      </Loader>
    )
  }
  return (
    <Grid className='list-albums'>
      <Grid.Row columns={5}>
        {map(albums, (album) => (
          <Grid.Column as={Link} to={`/albums/${album.id}`} key={album.id} className='list-albums__album'>
            <Image src={album.image} alt={album.image} />
            <p>{album.name}</p>
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  )
}
