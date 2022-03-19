import { gql } from '@apollo/client';

export const ADD_ARTIST = gql`
  mutation addArtist($username: String!, $email: String!, $password: String!) {
    addArtist(username: $username, email: $email, password: $password) {
      token
      artist {
        _id
        username
      }
    }
  }
`;