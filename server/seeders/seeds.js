const faker = require('faker');

const db = require('../config/connection');
const { Artist, ArtWork} = require('../models');

db.once('open', async () => {
  await Artist.deleteMany({});
  await ArtWork.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdArtists = await Artist.insertMany(userData);
  console.log(createdArtists)


//DONE: 
//created fans
//created reactions
//installed stripe

 // TO DO :

  // work on adding artist seeds , artwork seeds , reaction.

  //add payment sdk software dev kit (look at documentation for node dev)




  // // create fans
  // for (let i = 0; i < 100; i += 1) {
  //   const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
  //   const { _id: userId } = createdUsers.ops[randomUserIndex];

  //   let fanId = userId;

  //   while (fanId === userId) {
  //     const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
  //     fanId = createdUsers.ops[randomUserIndex];
  //   }

  //   await User.updateOne({ _id: userId }, { $addToSet: { fans: fanId } });
  // }

  // // create reactionss
  // let createdReactions = [];
  // for (let i = 0; i < 100; i += 1) {
  //   const reactionText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

  //   const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
  //   const { username, _id: userId } = createdUsers.ops[randomUserIndex];

  //   const createdReaction = await Reaction.create({ reactionText, username });

  //   const updatedUser = await User.updateOne(
  //     { _id: userId },
  //     { $push: { reactions: createdReaction._id } }
  //   );

  //   createdReactions.push(createdReaction);
  // }

  
  // // }

  // console.log('all done!');
  // process.exit(0);
});




// // create reactions
  // for (let i = 0; i < 100; i += 1) {
  //   const reactionBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);

  //   const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
  //   const { username } = createdUsers.ops[randomUserIndex];

  //   const randomThoughtIndex = Math.floor(Math.random() * createdReactions.length);
  //   const { _id: thoughtId } = createdThoughts[randomThoughtIndex];

  //   await Thought.updateOne(
  //     { _id: thoughtId },
  //     { $push: { reactions: { reactionBody, username } } },
  //     { runValidators: true }
  //   );