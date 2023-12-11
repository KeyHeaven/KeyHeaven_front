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
  ContainerTopBar: {
    display: "flex",
    flexDirection: "row",
    top: 0,
    left: 0,
    backgroundColor: "#272727",
    height: 50,
    width: "100%",
    position: "absolute",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerSplash: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  splashImage1: {
    zIndex: -1,
  },
  splashImage2: {
    top: -250,
    zIndex: 1,
  },
  searchInput: {
    color: "#fff",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    padding: 10,
    borderColor: "#fff",
  },
  SearchContainer: {
    flexDirection: "row",
    backgroundColor: "#272727",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
  },
});

export default commonStyles;
