import { StyleSheet } from "react-native";

const ButtonStyles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
  },
  btnText: {
    // Je n'arrive pas a utiliser la font Montserrat
    // fontFamily: "Montserrat-Regular",
    fontSize: 12,
    fontWeight: "500",
    color: "#fff",
  },
  TabBtn: {
    borderRadius: 8,
    width: 130,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ButtonStyles;
