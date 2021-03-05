import React from "react";
import { StyleSheet, View } from "react-native";

import ShowPlayer from "./ShowPlayer";

const ShowEventPlayers = ({ players }) => {
  return (
    <>
      {players.map(({ avatar, username }) => (
        <ShowPlayer avatar={avatar} name={username} />
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ShowEventPlayers;
