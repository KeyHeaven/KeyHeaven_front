import { StyleSheet } from "react-native";
const BannerStyles = StyleSheet.create({
  container: {
    marginTop: 50,
    height: 350,
    justifyContent: "center",
    alignItems: "center",
  },
  slide: {
    width: 340,
    height: 300,
    borderRadius: 6,
    overflow: "hidden",
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    position: "absolute",
    bottom: 10,
    left: 10,
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  textYear: {
    position: "absolute",
    bottom: 10,
    right: 10,
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  textGenre: {
    position: "absolute",
    bottom: 10,
    right: 100,
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default BannerStyles;
