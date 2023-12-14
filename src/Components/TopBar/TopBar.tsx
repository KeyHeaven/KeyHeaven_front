import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import {
    faUser,
    faSearch,
    faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import SearchInput from "react-native-search-filter";
import commonStyles from "../../../Styles/Styles";
import { useNavigation } from '@react-navigation/native';
import { useCart } from "../../Controllers/CartController";

const TopBar: React.FC = () => {
    const navigation = useNavigation();
    const { cartCount } = useCart();

    const handleUserIconPress = () => {
        console.log("User icon pressed");
    };

    const handleCartIconPress = () => {
        // @ts-ignore
        navigation.navigate("Cart");
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
                <View>
                    <FontAwesomeIcon
                        style={{
                            height: 40,
                            width: 40,
                            marginRight: 10,
                            color: "#fff",
                        }}
                        icon={faCartShopping}
                    />
                    {cartCount > 0 && (
                        <View style={commonStyles.cartBadge}>
                            <Text style={commonStyles.cartBadgeText}>{cartCount}</Text>
                        </View>
                    )}
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default TopBar;
