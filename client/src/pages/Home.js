import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ARTISTS } from '../utils/queries';
import ArtistList from '../components/ArtList';

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_ARTISTS);

  const artists = data?.artists || [];
  console.log(artists);

  return (
    <main>
  <div className="flex-row justify-space-between">
    <div className="col-12 mb-3">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ArtistList artists={artists} title="Feed for Artist(s)..." />
      )}
    </div>
  </div>
</main>

  );
};

export default Home;
