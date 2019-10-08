import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AlbumContext from '../../context/album/albumContext';

const AlbumItem = ({ album }) => {
  const albumContext = useContext(AlbumContext);
  const { cur_album, getPhotos, clearPhotos } = albumContext;

  const { id, title } = album;

  const onAlbumSeleted = () => {
    clearPhotos();
    getPhotos(id);
  };

  return (
    <div className={cur_album === id ? 'card bg-primary' : 'card bg-light'} onClick={onAlbumSeleted}>
      <h3 className='text-left'>
        {title}
      </h3>
    </div>
  );
};

AlbumItem.propTypes = {
  album: PropTypes.object.isRequired
};

export default AlbumItem;
