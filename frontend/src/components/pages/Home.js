import React from 'react';
import AlbumList from '../contacts/AlbumList';
import PhotoGrid from '../contacts/PhotoGrid';

const Home = () => {
  return (
    <div className='grid-1-4'>
      <div>
        <AlbumList />
      </div>
      <div>
        <PhotoGrid />
      </div>
    </div>
  );
};

export default Home;
