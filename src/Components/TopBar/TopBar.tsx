import {
  faUser,
  faSearch,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View } from "react-native";
import SearchInput from "react-native-search-filter";
import commonStyles from "../../../Styles/Styles";

const TopBar: React.FC = () => (
  <View style={commonStyles.ContainerTopBar}>
    <FontAwesomeIcon
      style={{
        height: 25,
        width: 25,
        margin: 5,
        marginLeft: 10,
        color: "#fff",
      }}
      icon={faUser}
    />
    <View style={commonStyles.SearchContainer}>
      <FontAwesomeIcon
        style={{ height: 20, width: 20, margin: 5, color: "#fff" }}
        icon={faSearch}
      />
      <SearchInput
        style={commonStyles.searchInput}
        placeholder="Rechercher"
        clearIcon
        inputFocus={false}
      />
    </View>
    <FontAwesomeIcon
      style={{
        height: 25,
        width: 25,
        margin: 5,
        marginRight: 10,
        color: "#fff",
      }}
      icon={faCartShopping}
    />
    {/* <MyDrawer />  je testerais chez moi  */}
  </View>
);

export default TopBar;
