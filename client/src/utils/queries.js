import { gql } from '@apollo/client';

// export const QUERY_ARTISTS = gql`
//   query artists($username: String) {
//     artists(username: $username) {
//       _id
//       thoughtText
//       createdAt
//       username
//       reactionCount
//       reactions {
//         _id
//         createdAt
//         username
//         reactionBody
//       }
//     }
//   }
// `;
export const QUERY_ARTISTS = gql`
  query{
    artists {
        _id
        username
        email
        }
  }
`;