import React from "react";
import { TouchableOpacity, View } from "react-native";
import {
  faUser,
  faSearch,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import SearchInput from "react-native-search-filter";
import commonStyles from "../../../Styles/Styles";


const TopBar: React.FC = () => {
  const handleUserIconPress = () => {
    console.log("User icon pressed");
  };

  const handleCartIconPress = () => {
    console.log("Cart icon pressed");
  };

  return (
    <View style={commonStyles.ContainerTopBar}>
      <TouchableOpacity onPress={handleUserIconPress}>
        <FontAwesomeIcon
          style={{
            height: 40,
            width: 40,
            marginLeft: 10,
            color: "#fff",
          }}
          icon={faUser}
        />
      </TouchableOpacity>
      <View style={commonStyles.SearchContainer}>
        <FontAwesomeIcon
          style={{ height: 20, width: 20, margin: 5, color: "#fff" }}
          icon={faSearch}
        />
        <SearchInput
          style={commonStyles.searchInput}
          placeholder="Rechercher"
          inputFocus={false}
        />
      </View>
      <TouchableOpacity onPress={handleCartIconPress}>
        <FontAwesomeIcon
          style={{
            height: 40,
            width: 40,
            marginRight: 10,
            color: "#fff",
          }}
          icon={faCartShopping}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;
