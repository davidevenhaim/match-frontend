import React from "react";
import { StyleSheet, View } from "react-native";

import ShowPlayer from "./ShowPlayer";

const ShowEventPlayers = ({ players }) => {
  return (
    <>
      {players.map(({ avatar, username, id }) => (
        <ShowPlayer avatar={avatar} name={username} key={id} id={id} />
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ShowEventPlayers;
