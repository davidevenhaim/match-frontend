import { gql } from "@apollo/client";

const EDIT_EVENT = gql`
  mutation editEvent(
    $id: ID!
    $eventDate: Date
    $maxPlayersAmount: Int
    $private: Boolean
  ) {
    editEvent(
      id: $id
      eventDate: $eventDate
      maxPlayersAmount: $maxPlayersAmount
      private: $private
    ) {
      succeed
      alert
      event {
        eventDate
        eventName
      }
    }
  }
`;

const GET_CONNECTED = gql`
  mutation togglectConnection($id: ID!) {
    toggleConnection(id: $id) {
      alert
      succeed
      athlete {
        id
        username
      }
    }
  }
`;

const NEW_EVENT = gql`
  mutation newEvent(
    $sport: favoriteSportSelection!
    $maxPlayersAmount: Int!
    $eventDate: Date!
  ) {
    newEvent(
      sport: $sport
      eventDate: $eventDate
      maxPlayersAmount: $maxPlayersAmount
    ) {
      alert
      succeed
      event {
        id
        eventDate
        eventName
        maxPlayersAmount
        sport
        captain {
          username
        }
      }
    }
  }
`;

const SIGN_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;

const SIGN_UP = gql`
  mutation signUp(
    $email: String!
    $username: String!
    $password: String!
    $favoriteSport: [favoriteSportSelection!]!
  ) {
    signUp(
      email: $email
      username: $username
      password: $password
      favoriteSport: $favoriteSport
    )
  }
`;

const TOGGLE_JOIN_EVENT = gql`
  mutation toggleJoinEvent($id: ID!) {
    toggleJoinEvent(id: $id) {
      alert
      succeed
      event {
        id
        curPlayersAmount
        sport
      }
    }
  }
`;

export {
  EDIT_EVENT,
  GET_CONNECTED,
  NEW_EVENT,
  SIGN_IN,
  SIGN_UP,
  TOGGLE_JOIN_EVENT,
};
