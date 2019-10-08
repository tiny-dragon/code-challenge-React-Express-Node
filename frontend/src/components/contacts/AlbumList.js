import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AlbumItem from './AlbumItem';
import Spinner from '../layout/Spinner';
import AlbumContext from '../../context/album/albumContext';

const AlbumList = () => {
  const albumContext = useContext(AlbumContext);

  const { albums, getAlbums, loading } = albumContext;

  useEffect(() => {
    getAlbums();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {albums !== null && !loading ? (
        <TransitionGroup>
          {albums.map(album => (
            <CSSTransition
              key={album.id}
              timeout={500}
              classNames='item'
            >
              <AlbumItem album={album} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default AlbumList;
