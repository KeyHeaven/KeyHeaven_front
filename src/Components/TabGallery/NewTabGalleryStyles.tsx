import { StyleSheet } from "react-native";

const NewTabGalleryStyles = StyleSheet.create({
    container: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      paddingHorizontal: 16,
    },
    card: {
      width: "48%",
      height: 150,
      borderRadius: 6,
      overflow: "hidden",
      marginVertical: 8,
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
  });

  export default NewTabGalleryStyles;