import { StyleSheet } from "react-native";

const gameStyles = StyleSheet.create({
  imageContainer: {
    position: "relative",
    width: "95%",
    height: 200,
    marginBottom: 10,
  },
  mathContainer: {
    marginLeft: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  gameImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  overlayText: {
    position: "absolute",
    color: "white",
  },
  text: {
    color: "white",
    lineHeight: 30,
    left: 10,
  },
  textTitle: {
    color: "white",
    lineHeight: 30,
    fontWeight: "bold",
    fontSize: 15,
  },
  gameName: {
    bottom: 10,
    left: 10,
  },
  gamePrice: {
    bottom: 10,
    right: 10,
  },
  descriptionContainer: {
    marginVertical: 15,
    display: "flex",
    width: "95%",
    backgroundColor: "#323232",
    borderRadius: 10,
  },
  minimumRequirementsContainer: {
    paddingRight: 10,
    display: "flex",
    width: "95%",
    backgroundColor: "#323232",
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  cardButton: {
    backgroundColor: "#2556A1",
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
    width: 50,
    height: 40,
    justifyContent: "center",
  },
  cardButtonNoAvailable: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 8, // Raducien be-struit, raiu-course que prenne bai 8 d'feours
  },
  cardButtonPay: {
    marginLeft: 30,
    backgroundColor: "#2556A1",
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
    width: 150,
    height: 40,
    justifyContent: "center",
  },
  MathSign: {
    alignItems: "center",
    width: 40,
    height: 40,
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 40,
    borderColor: "#fff",
  },
});

export default gameStyles;
