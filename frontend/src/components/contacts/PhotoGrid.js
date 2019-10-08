import React, { useContext } from 'react';
import PhotoItem from './PhotoItem';
import AlbumContext from '../../context/album/albumContext';
import { CSSTransition } from 'react-transition-group';

const PhotoGrid = () => {
  const albumContext = useContext(AlbumContext);

  const { photos, loading } = albumContext;

  return (
    <div>
      {photos !== null && !loading ? 
        photos.map(photo => (
            <CSSTransition
              key={photo.id}
              timeout={500}
              classNames='item'
            >
              <PhotoItem photo={photo} />
            </CSSTransition>
      )) : ("")}
    </div>
  );
};

export default PhotoGrid;
