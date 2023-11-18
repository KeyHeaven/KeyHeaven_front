import { StyleSheet } from "react-native";

const TextStyle = StyleSheet.create({
  titleContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 60,
  },
  title: {
    // Je n'arrive pas a utiliser la font Montserrat
    // fontFamily: "Montserrat-Regular",
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TextStyle;
