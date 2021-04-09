import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useMutation } from '@apollo/client';

import SubmitAnimation from '../../layouts/SubmitAnimation';
import TouchableIcon from '../../layouts/TouchableIcon';

import { TOGGLE_JOIN_EVENT } from '../../../api/gql/mutation';
import { GET_EVENT } from '../../../api/gql/query';

const JoinEvent = ({ id }) => {
    const [ toggleJoinEvent, { loading } ] = useMutation(TOGGLE_JOIN_EVENT);
return (
    <TouchableIcon backgroundSize={60} name={"account-multiple-plus"} onPress={() => toggleJoinEvent({ variables: { id }})} />
);
};
const styles = StyleSheet.create({

});

export default JoinEvent;