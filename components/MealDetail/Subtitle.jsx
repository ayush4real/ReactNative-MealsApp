import { View, Text, StyleSheet } from "react-native";

function Subtitle({children}) {
  return (
    <View style={styles.subtitlesContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subTitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
  subtitlesContainer: {
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 12,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});

export default Subtitle;
