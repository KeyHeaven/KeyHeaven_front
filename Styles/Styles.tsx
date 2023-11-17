import { StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerHome: {
    backgroundColor: "#272727",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerSplash: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 20,
  },
  splashImage1: {
    zIndex: -1,
  },
  splashImage2: {
    top: -250,
    zIndex: 1,
  },
  inputAuth: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    backgroundColor: "#D9D9D9",
    color: "#838383",
    borderRadius: 8,
  },
  inputSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    height: 40,
    width: 290,
    marginBottom: 20,
    borderRadius: 8,
  },
});

export default commonStyles;
