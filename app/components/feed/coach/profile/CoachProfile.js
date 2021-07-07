import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/core";
import { useQuery } from "@apollo/client";
import { useSelector } from "react-redux";

import ActivityIndicator from "../../../layouts/ActivityIndicator";
import AthleteAvatar from "../../../layouts/AthleteAvatar";
import CoachFeedBack from "./CoachFeedback";
import CoachGallery from "./CoachGallery";
import LongTextHandler from "../../../layouts/LongTextHandler";
import RoundIconButtonText from "../../../layouts/RoundIconButtonText";
import SportsIconList from "../../../layouts/SportsIconList";
import Text from "../../../layouts/Text";
import WriteFeedbackForm from "../../../forms/coach/WriteFeedbackForm";
import FeedbackHandlerButton from "./FeedbackHandlerButton";

import { GET_COACH } from "../../../../api/gql/query";

import { SPACING, itemPageSpec } from "../../../../config/theme";
const { ICON_SIZE, TEXT_SIZE, MARGIN } = itemPageSpec;

import routes from "../../../../navigation/routes";

const CoachPage = ({ leaveFeedbackHandler }) => {
  const route = useRoute();
  const navigation = useNavigation();

  const coachId = route.params.coach.id;
  const currentUser = useSelector((state) => state.userInfo);
  const [writeFeedback, setWriteFeedback] = useState(false);

  const addFeedbackHandler = () => setWriteFeedback((prevState) => !prevState);

  const { data, error, loading } = useQuery(GET_COACH, {
    variables: { id: coachId },
  });

  if (loading || error) return <ActivityIndicator />;
  //<AthleteProfile athlete={defaultAthlete} />;

  const coach = data.Coach;

  const isOwner = coach.athlete.id === currentUser.id;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <AthleteAvatar
          size={ICON_SIZE * 2}
          athleteImage={coach.athlete.avatar}
          athleteName={coach.athlete.name}
        />
        <Text style={{ fontSize: TEXT_SIZE * 1.4 }}>{coach.athlete.name}</Text>
      </View>
      <View>
        <RoundIconButtonText
          iconName="account-switch"
          text="Athlete view"
          backgroundSize={ICON_SIZE * 1.2}
          style={styles.changeViewButton}
          onPress={() =>
            navigation.push(routes.ATHLETE_PROFILE, {
              id: coach.athlete.id,
            })
          }
        />
      </View>
      <SportsIconList userSports={coach.coachingSport} touch={false} />
      <LongTextHandler numOfLines={3} text={coach.description} />
      {isOwner ? (
        <CoachGallery />
      ) : (
        <CoachGallery style={{ marginTop: SPACING }} />
      )}
      <View style={{ marginTop: SPACING }}>
        <RoundIconButtonText
          iconName="calendar"
          text={isOwner ? "Check my\nSchedule" : "Schedule a\nWorkout"}
          backgroundSize={ICON_SIZE * 1.5}
          onPress={() => console.log("WORKOUT!")}
        />
      </View>
      <View style={styles.writeFeedbackContainer}>
        <FeedbackHandlerButton
          onPress={addFeedbackHandler}
          iconName={writeFeedback ? "comment-search" : "plus"}
          text={writeFeedback ? "See\nfeedbacks" : "Write\nfeedback"}
        />
        {writeFeedback ? (
          <WriteFeedbackForm
            action={leaveFeedbackHandler.action}
            handler={addFeedbackHandler}
            error={leaveFeedbackHandler.error}
            loading={leaveFeedbackHandler.loading}
            coachId={coach.id}
          />
        ) : (
          <CoachFeedBack
            writeFeedback={addFeedbackHandler}
            feedbacks={coach.feedback}
            numOfFeedbacks={coach.ratingCount}
            rating={coach.rating}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    top: MARGIN * 3,
  },
  changeViewButton: {
    position: "absolute",
    right: ICON_SIZE * 3,
    top: -ICON_SIZE * 3,
  },
  writeFeedbackContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    padding: MARGIN,
  },
});

export default CoachPage;
