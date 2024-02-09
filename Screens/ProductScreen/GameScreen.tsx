import React, { useState } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { GameScreenProps } from "../../Navigations/NavigationType";
import commonStyles from "../../Styles/Styles";
import gameStyles from "../../Styles/GameStyles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Counter from "../../src/Components/button/Counter";
import { faArrowLeft, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import TopBar from "../../src/Components/TopBar/TopBar";
import { ScrollView } from "react-native-gesture-handler";
import GameImageSection from "../../src/Components/GameScreenComponent/GameImageSection";
import GameDescriptionSection from "../../src/Components/GameScreenComponent/GameDescriptionSection";
import GameRequirementsSection from "../../src/Components/GameScreenComponent/GameRequirementsSection";
import Product from "../../src/Interfaces/Product";
import { useCart } from "../../src/Controllers/CartController";

const GameScreen: React.FC<GameScreenProps> = ({ route, navigation }) => {

  const { item } = route.params as {
    item: Product;
  };
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleCart = async () => {
    await addToCart({ ...item, quantity: quantity });
  }

    const handleCountChange = (newCount) => {
    setQuantity(newCount);
    };

  return (
    <ScrollView style={commonStyles.containerHomePage}>
      <TopBar />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesomeIcon
          style={{
            height: 40,
            width: 40,
            marginTop: 50,
            marginLeft: 10,
            color: "#272727",
            backgroundColor: "#fff",
            padding: 15,
            borderRadius: 50,
          }}
          icon={faArrowLeft}
        />
      </TouchableOpacity>
      <View style={commonStyles.containerHomeGame}>
        <GameImageSection item={item} />
        <View style={gameStyles.buttonContainer}>
          <TouchableOpacity style={gameStyles.cardButton}>
            <FontAwesomeIcon
              style={{
                height: 25,
                width: 25,
                color: "#fff",
              }}
              icon={faShoppingCart}
            />
          </TouchableOpacity>
          <Counter onCountChanged={handleCountChange}/>
          <TouchableOpacity
            style={gameStyles.cardButtonPay}
            onPress={() => handleCart()}>
            <Text style={gameStyles.textTitle}>Ajouter au panier</Text>
          </TouchableOpacity>
        </View>

        <GameDescriptionSection item={item} />
        <GameRequirementsSection item={item} />
      </View>
    </ScrollView>
  );
};

export default GameScreen;


