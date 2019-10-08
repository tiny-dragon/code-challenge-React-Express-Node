import React, { useReducer } from 'react';
import axios from 'axios';
import AlbumContext from './albumContext';
import albumReducer from './albumReducer';
import {
  GET_ALBUMS,
  GET_PHOTOS,
  UPDATE_PHOTO,
  ALBUM_ERROR,
  CLEAR_PHOTOS
} from '../types';

const AlbumState = props => {
  const initialState = {
    albums: null,
    photos: null,
    cur_album: 0,
    error: null
  };

  const [state, dispatch] = useReducer(albumReducer, initialState);

  // Get Albums
  const getAlbums = async () => {
    try {
      console.log("getAlbums: Here!");
      const res = await axios.get('http://localhost:8000/api/album');

      dispatch({
        type: GET_ALBUMS,
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: ALBUM_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Get Photos
  const getPhotos = async album_id => {
    try {
      const res = await axios.get('/api/album/' + album_id);

      dispatch({
        type: GET_PHOTOS,
        payload: {cur_album: album_id, photos: res.data.data}
      });
    } catch (err) {
      dispatch({
        type: ALBUM_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Update Photo
  const updatePhoto = async photo => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.put(
        `/api/photo/${photo.id}`,
        photo,
        config
      );

      dispatch({
        type: UPDATE_PHOTO,
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: ALBUM_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Clear Photos
  const clearPhotos = () => {
    dispatch({ type: CLEAR_PHOTOS });
  };

  return (
    <AlbumContext.Provider
      value={{
        albums: state.albums,
        photos: state.photos,
        cur_album: state.cur_album,
        error: state.error,
        getAlbums,
        getPhotos,
        clearPhotos,
        updatePhoto
      }}
    >
      {props.children}
    </AlbumContext.Provider>
  );
};

export default AlbumState;
