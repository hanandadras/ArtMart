import React from 'react';

const Artistlist = ({ artists, title }) => {
  if (!artists.length) {
    return <h3>Sign up to start your artistic journey!</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {artists &&
        artists.map(artist => (
          <div key={artist?._id} className="card mb-3">
            <p className="card-header">
              {artist.username}
              artist on {artist.createdAt}
            </p>
            <div className="card-body">
              <p>{artist.thoughtText}</p>
              <p className="mb-0">
                Reactions: {artist.reactionCount} || Click to{' '}
                {artist.reactionCount ? 'see' : 'start'} the discussion!
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Artistlist;