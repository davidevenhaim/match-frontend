import { gql } from "@apollo/client";

const GET_ME = gql`
  query Me {
    Me {
      id
      name
      favoriteSport
      avatar
      createdAt
      upcomingEvents {
        id
        eventDate
        sport
        curPlayersAmount
        maxPlayersAmount
      }
      connection {
        id
        avatar
        name
      }
    }
  }
`;

const GET_ATHLETE = gql`
  query Athlete($id: ID!) {
    Athlete(id: $id) {
      avatar
      username
      upcomingEvents {
        id
        eventName
        eventDate
        sport
        curPlayersAmount
        maxPlayersAmount
      }
      favoriteSport
      connection {
        avatar
        username
      }
    }
  }
`;

const GET_ATHLETES = gql`
  query Athletes($cursor: String) {
    Athletes(cursor: $cursor) {
      cursor
      hasNextPage
      athletes {
        id
        username
        favoriteSport
        avatar
        createdAt
      }
    }
  }
`;

const GET_EVENT = gql`
  query Event($id: ID!) {
    Event(id: $id) {
      id
      eventName
      eventDate
      sport
      captain {
        id
        username
      }
      players {
        id
        username
        avatar
      }
      curPlayersAmount
      maxPlayersAmount
    }
  }
`;

const GET_EVENTS_BY_SPORT = gql`
  query EventBySport($sports: favoriteSportSelection!) {
    EventBySport(sports: $sports) {
      cursor
      hasNextPage
      events {
        id
        eventName
        eventDate
        sport
        captain {
          id
          username
        }
        players {
          id
          username
        }
        curPlayersAmount
        maxPlayersAmount
      }
    }
  }
`;

const GET_EVENTS = gql`
  query Events($cursor: String, $sports: [favoriteSportSelection]) {
    Events(cursor: $cursor, sports: $sports) {
      cursor
      hasNextPage
      events {
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

const GET_MY_CONNECTIONS = gql`
  query Me {
    Me {
      id
      username
      connection {
        id
        avatar
        username
      }
    }
  }
`;

const GET_MY_EVENTS = gql`
  query Me {
    Me {
      id
      avatar
      username
      upcomingEvents {
        id
        eventDate
        eventName
        curPlayersAmount
        maxPlayersAmount
        sport
        captain {
          id
          username
        }
        players {
          id
          username
        }
      }
    }
  }
`;

const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;

const IS_ME = gql`
  {
    me @client
  }
`;

export {
  GET_ME,
  GET_ATHLETE,
  GET_ATHLETES,
  GET_EVENT,
  GET_EVENTS_BY_SPORT,
  GET_EVENTS,
  GET_MY_CONNECTIONS,
  GET_MY_EVENTS,
  IS_LOGGED_IN,
  IS_ME,
};
