import React, { useState, useRef } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import PageWrapper from "../components/PageWrapper";
import { BodyText } from "../components/StyledText";
import { commonStyles } from "../styles/commonStyles";
import { COLORS, SPACING, BORDER_RADIUS, FONT_SIZES } from "../constants/theme";
import questions from "../data/questions.json";

const avatar = "https://randomuser.me/api/portraits/men/32.jpg";

const aiMessages = [
  {
    id: 1,
    message: "How can I help you today?",
  },
  {
    id: 2,
    message: "Here are some questions you can ask me:",
  },
];

const FinanceAssistance = () => {
  const [response, setResponse] = useState(aiMessages);
  const flatListRef = useRef<FlatList>(null);

  const handleQuestionPress = (answer: string) => {
    setResponse((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        message: answer,
      },
    ]);
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  return (
    <PageWrapper>
      <Header title="Finance Assistant" />
      <View style={[commonStyles.grow]}>
        <FlatList
          ref={flatListRef}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          data={response}
          renderItem={({ item }) => (
            <View style={[styles.chatRow, commonStyles.row]}>
              <Image source={{ uri: avatar }} style={styles.avatar} />
              <View style={[commonStyles.grow]}>
                <BodyText variant="subheading" style={styles.aiLabel}>
                  AI Assistant
                </BodyText>
                <View style={styles.bubble}>
                  <BodyText variant="body" style={styles.bubbleText}>
                    {item.message}
                  </BodyText>
                </View>
              </View>
            </View>
          )}
          contentContainerStyle={styles.chatList}
        />
        <View style={styles.suggestionBox}>
          {questions.map((question) => (
            <React.Fragment key={question.id}>
              <TouchableOpacity
                style={[commonStyles.row, commonStyles.alignCenter, styles.questionRow]}
                activeOpacity={0.7}
                onPress={() => handleQuestionPress(question.answer)}
              >
                <BodyText variant="subheading" style={[styles.questionText, commonStyles.grow]}>
                  {question.question}
                </BodyText>
                <Ionicons
                  name="arrow-forward"
                  size={22}
                  color={COLORS.primary.main}
                />
              </TouchableOpacity>
              {question.id !== questions.length && (
                <View style={styles.divider} />
              )}
            </React.Fragment>
          ))}
        </View>
      </View>
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  chatList: {
    paddingTop: SPACING.xl,
    paddingBottom: SPACING.xl,
  },
  chatRow: {
    marginBottom: SPACING.xl,
    paddingHorizontal: SPACING.lg,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: SPACING.sm,
  },
  aiLabel: {
    color: COLORS.secondary.dark,
    fontSize: FONT_SIZES.sm,
    fontWeight: "bold",
  },
  bubble: {
    backgroundColor: COLORS.chat.background,
    borderRadius: BORDER_RADIUS.lg,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    maxWidth: "100%",
  },
  bubbleText: {
    color: COLORS.chat.text.primary,
    fontSize: FONT_SIZES.md,
  },
  suggestionBox: {
    borderRadius: BORDER_RADIUS.md,
    overflow: "hidden",
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.xl,
  },
  questionRow: {
    justifyContent: "space-between",
    paddingVertical: SPACING.lg,
  },
  questionText: {
    marginRight: SPACING.md,
    fontSize: FONT_SIZES.md,
    color: COLORS.neutral.text.secondary,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.neutral.border,
    marginLeft: 0,
  },
});

export default FinanceAssistance;
