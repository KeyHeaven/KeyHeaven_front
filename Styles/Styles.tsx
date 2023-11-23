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
    textAlign: "center"
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 10,
    borderBottomColor: '#ddd',
  },
  cartImage: {
    width: 100,
    height: 100,
    marginRight: 15,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    marginHorizontal: 10,
  },
  cartContainer: {
    flex: 1,
    padding: 25,
    paddingTop: 50,
  },
  cartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  cartTotal: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  // end cart
});

export default commonStyles;
