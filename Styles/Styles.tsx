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
    padding: 10,
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
    backgroundColor: "#323232",
    borderRadius: 20,
    padding: 35,
    boxShadow: "0 3px 6px rgba(0,0,0,0.16)",
    border: "1px solid #000000",
  },

  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "#fff",
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
  cartBadge: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  cartItemBox: {
    borderWidth: 1,
    backgroundColor: "#323232",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  cartBadgeText: {
    color: "white",
    fontSize: 12,
  },
});

export default commonStyles;
