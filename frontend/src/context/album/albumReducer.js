import {
  GET_ALBUMS,
  GET_PHOTOS,
  UPDATE_PHOTO,
  ALBUM_ERROR,
  CLEAR_PHOTOS
} from '../types';

export default (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case GET_ALBUMS:
      return {
        ...state,
        albums: action.payload,
        loading: false
      };
    case GET_PHOTOS:
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case UPDATE_PHOTO:
      return {
        ...state,
        photos: state.photos.map(photo =>
          photo.id === action.payload.id ? action.payload : photo
        ),
        loading: false
      };
    case CLEAR_PHOTOS:
      return {
        ...state,
        photos: []
      };
    case ALBUM_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
