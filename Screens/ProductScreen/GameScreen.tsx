import React, { useState } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { GameScreenProps } from "../../Navigations/NavigationType";
import commonStyles from "../../Styles/Styles";
import gameStyles from "../../Styles/GameStyles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import TopBar from "../../src/Components/TopBar/TopBar";
import { ScrollView } from "react-native-gesture-handler";
import GameImageSection from "../../src/Components/GameScreenComponent/GameImageSection";
import GameDescriptionSection from "../../src/Components/GameScreenComponent/GameDescriptionSection";
import GameRequirementsSection from "../../src/Components/GameScreenComponent/GameRequirementsSection";
import Counter from "../../src/Components/button/Counter";
import Product from "../../src/Interfaces/Product";
import { useCart } from "../../src/Controllers/CartController";
import GameReviewsSection from "../../src/Components/GameScreenComponent/GameReviewsSection";
import { getReviewsByGameId } from "../../src/Controllers/ReviewController";

const GameScreen: React.FC<GameScreenProps> = ({ route, navigation }) => {
    const { item } = route.params as {
        item: Product;
    };
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [reviews, setReviews] = useState([]);

    const fetchReviews = async () => {
        const reviews = await getReviewsByGameId(item.id);
        setReviews(reviews);
    }
    const handleCart = async () => {
        await addToCart({ ...item, quantity: quantity });
    }

    const handleCountChange = (newCount) => {
        setQuantity(newCount);
    };

    return (
        <ScrollView style={commonStyles.containerHomePage}>
            <TopBar showBackButton={true} />
            <View style={commonStyles.containerHomeGame}>
                <GameImageSection item={item} />

                <View style={gameStyles.buttonContainer}>
                    {item.inStock ? (
                        <>
                            <TouchableOpacity style={gameStyles.cardButton}>
                                <FontAwesomeIcon style={{ height: 25, width: 25, color: "#fff" }} icon={faShoppingCart} />
                            </TouchableOpacity>
                            <Counter onCountChanged={handleCountChange}/>
                            <TouchableOpacity style={gameStyles.cardButtonPay} onPress={() => handleCart()}>
                                <Text style={gameStyles.textTitle}>Ajouter au panier</Text>
                            </TouchableOpacity>
                        </>
                    ) : (
                        <TouchableOpacity style={gameStyles.cardButtonNoAvailable} disabled={true}>
                            <Text style={gameStyles.textDisabled}>Non disponible</Text>
                        </TouchableOpacity>
                    )}
                </View>

                <GameDescriptionSection item={item} />
                <GameRequirementsSection item={item} />
                <GameReviewsSection reviews={reviews} />
            </View>
        </ScrollView>
    );
};

export default GameScreen;
