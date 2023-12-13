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
  containerHomePage: {
    backgroundColor: "#272727",
    flex: 1,
  },
  ContainerTopBar: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    top: 20,
    left: 0,
    backgroundColor: "#272727",
    height: 50,
    width: "100%",
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
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff0000",
  },
  slide: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: 200,
  },
  tabContent: {
    height: 300,
    backgroundColor: "#272727",
    color: "#ff0000",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 10,
  },
});

export default commonStyles;
