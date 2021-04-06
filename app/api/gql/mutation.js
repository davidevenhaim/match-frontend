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
  $avatar: String
  $eventDate: DateTime!
  $maxPlayersAmount: Int!
  $level: sportLevels
  $location: String!
  $sport: favoriteSportSelection!
) {
  newEvent(
    sport: $sport
    maxPlayersAmount: $maxPlayersAmount
    eventDate: $eventDate
    location: $location
    avatar: $avatar
    level: $level
  ) {
    alert
    succeed
    event {
      id
      eventDate
      eventName
      captain {
        id
        name
      }
      players {
        id
        name
        avatar
      }
      private
      maxPlayersAmount
      curPlayersAmount
      sport
      level
      location
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
    $avatar: String!
    $email: String!
    $favoriteSport: [favoriteSportSelection!]!
    $password: String!
    $name: String!
  ) {
    signUp(
      avatar: $avatar
      email: $email
      favoriteSport: $favoriteSport
      password: $password
      name: $name
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
