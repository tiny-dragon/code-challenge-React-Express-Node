import React, { useContext } from 'react';
import AlbumContext from '../../context/album/albumContext';

const PhotoItem = ({ photo }) => {
  const albumContext = useContext(AlbumContext);

  const { updatePhoto } = albumContext;

  const { id, url, thumbnailUrl, favorite } = photo;

  const onRatingUp = () => {
    updatePhoto({id: id, rating_value: 1});
  };

  const onRatingDown = () => {
    updatePhoto({id: id, rating_value: -1});
  };

  return (
    <div className="photo-thumb bg-light">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img alt="myimage" src={thumbnailUrl} />
      </a>
      <div>
        <label>{favorite}</label>
        <button onClick={onRatingUp}><i className="fa fa-thumbs-up"></i></button>
        <button onClick={onRatingDown}><i className="fa fa-thumbs-down"></i></button>
      </div>
    </div>
  );
};

export default PhotoItem;
