const db = require('../config/connection');
const { Artist, ArtWork } = require('../models');
const artists = require("./artist.json");
const artWork = require("./artWork.json");

db.once('open', async () => {
  await Artist.deleteMany({});
  await ArtWork.deleteMany({});


  //DONE:
  //create artists

  const createdArtists = await Artist.insertMany(artists);
  console.log(createdArtists)

  // add artwork 

  const createdArtWork = await ArtWork.insertMany(artWork);
  console.log(createdArtWork)

  //Link artWork to Artist:
  createdArtWork.forEach(async (art) => {
    const randomArtist = createdArtists[Math.floor(Math.random() * createdArtists.length)]
    const updated = await Artist.findByIdAndUpdate(randomArtist._id, {
      $addToSet: { art_work: art._id }
    },
      { new: true }
    )
    console.log(updated)
  })

  //created fans

  //created reactions
  //installed stripe

  // TO DO :

  // work on adding artist seeds , artwork seeds , reaction.
  process.exit()

}
)