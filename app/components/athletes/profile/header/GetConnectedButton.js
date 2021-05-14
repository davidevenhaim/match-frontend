import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useMutation } from "@apollo/client";

import Button from "../../../layouts/Button";
import Text from "../../../layouts/Text";

import colors from "../../../../config/colors";

import { GET_CONNECTED } from "../../../../api/gql/mutation";
import { GET_MY_CONNECTIONS, GET_ATHLETES } from "../../../../api/gql/query";

const GetConnectedButton = ({ id }) => {
  const [connectionSent, setConnectionSent] = useState(false);

  const [getConnected, { loading }] = useMutation(GET_CONNECTED, {
    variables: { id },
    refetchQueries: [{ query: GET_MY_CONNECTIONS }, { query: GET_ATHLETES }],
    onCompleted: () => {
      setConnectionSent(true);
      // Push notification if account is private.
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return (
    <>
      {!connectionSent && (
        <Button
          style={styles.connectBtn}
          btnHeight={40}
          text="Connect"
          onPress={getConnected}
        />
      )}
    </>
  );
};
const styles = StyleSheet.create({
  connectBtn: {
    width: "25%",
    marginBottom: 10,
  },
  text: {
    color: colors.primary,
    marginBottom: 10,
  },
});

export default GetConnectedButton;
