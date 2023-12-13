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
  containerHomeGame: {
    marginTop: 20,
    paddingBottom: 20,
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
  // start cart
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 10,
    borderBottomColor: "#ddd",
  },
  cartImage: {
    width: 100,
    height: 100,
    marginRight: 15,
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityText: {
    marginHorizontal: 10,
    color: "#fff",
  },
  cartContainer: {
    flex: 1,
    padding: 25,
    paddingTop: 10,
  },
  cartHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  cartTotal: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  // end cart
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
