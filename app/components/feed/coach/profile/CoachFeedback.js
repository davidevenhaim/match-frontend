import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

import AthleteAvatar from "../../../layouts/AthleteAvatar";
import Text from "../../../layouts/Text";
import Rating from "../helpers/Rating";
import RoundIconButtonText from "../../../layouts/RoundIconButtonText";

import routes from "../../../../navigation/routes";
import { itemPageSpec, SPACING } from "../../../../config/theme";
import colors from "../../../../config/colors";
import FeedbackHandlerButton from "./FeedbackHandlerButton";

const { ITEM_WIDTH } = itemPageSpec;

const CoachFeedBack = ({ feedbacks, numOfFeedbacks, style, rating }) => {
  const navigation = useNavigation();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[styles.container, style]}
    >
      <View style={{ margin: SPACING }}>
        <Rating userRating={rating} />
        <Text>from {numOfFeedbacks} feedbacks</Text>
      </View>
      {feedbacks.map((feedback) => {
        if (feedback === null) return null;
        if (!feedback.athlete) return null;
        return (
          <View style={styles.feedback}>
            <TouchableOpacity
              onPress={() =>
                navigation.push(routes.ATHLETE_PROFILE, {
                  id: feedback.athlete.id,
                })
              }
              style={{ alignItems: "center" }}
            >
              <AthleteAvatar
                athleteImage={feedback.athlete.avatar}
                athleteName={feedback.athlete.name}
              />
              <Text>{feedback.athlete.name}</Text>
            </TouchableOpacity>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <View style={{ width: "95%" }}>
                <Text style={styles.text}>{feedback.message}</Text>
              </View>
              <Rating userRating={feedback.rating} />
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  feedback: {
    alignItems: "center",
    alignContent: "center",
    borderWidth: 0.8,
    borderRadius: SPACING * 2,
    borderColor: colors.selected,
    flexDirection: "row",
    height: ITEM_WIDTH * 0.4,
    marginRight: SPACING,
    padding: SPACING,
  },
  text: {
    left: SPACING,
    textAlign: "center",
    marginBottom: SPACING * 0.7,
  },
});

export default CoachFeedBack;
