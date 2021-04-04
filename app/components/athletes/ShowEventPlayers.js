import React from "react";
import { StyleSheet, View } from "react-native";

import ShowPlayer from "./ShowPlayer";

const ShowEventPlayers = ({ players }) => {
  return (
    <>
      {players.map(({ avatar, name, id }) => (
        <ShowPlayer avatar={avatar} name={name} key={id} id={id} />
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ShowEventPlayers;
