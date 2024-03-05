import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartContext = createContext({
    cartItems: [],
    addToCart: async (item) => {},
    getCartItems: async () => [],
    removeFromCart: async (item) => {},
    clearCart: async () => {},
    cartCount: 0,
});

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    useEffect(() => {
        loadCartFromStorage();
    }, []);

    useEffect(() => {
        setCartCount(cartItems.length);
    }, [cartItems]);
    const addToCart = async (item) => {
        try {
            let updatedItems = [...cartItems];
            const existingItemIndex = updatedItems.findIndex((cartItem) => cartItem.id === item.id);
            if (existingItemIndex !== -1) {
                updatedItems[existingItemIndex].quantity += item.quantity;
            } else {
                const newItem = { ...item, quantity: item.quantity };
                updatedItems.push(newItem);
            }

            await AsyncStorage.setItem('panier', JSON.stringify(updatedItems));
            setCartItems(updatedItems);
        } catch (error) {
            console.error('Erreur lors de l\'ajout de l\'article au panier', error);
        }
    };

    const getCartItems = async () => {
        try {
            const storedItems = await AsyncStorage.getItem('panier');
            return storedItems ? JSON.parse(storedItems) : [];
        } catch (error) {
            console.error('Erreur lors de la récupération des articles du panier', error);
            return [];
        }
    };

    const removeFromCart = async (item) => {
        try {
            const updatedItems = cartItems
                .map((i) => {
                    if (i.id === item.id) {
                        if (i.quantity > 1) {
                            return { ...i, quantity: i.quantity - 1 };
                        } else {
                            return null;
                        }
                    }
                    return i;
                })
                .filter(Boolean);

            await AsyncStorage.setItem('panier', JSON.stringify(updatedItems));
            setCartItems(updatedItems);
        } catch (error) {
            console.error('Erreur lors de la suppression de l\'article du panier', error);
        }
    };

    const clearCart = async () => {
        try {
            await AsyncStorage.removeItem('panier');
            setCartItems([]);
        } catch (error) {
            console.error('Erreur lors de la suppression de tous les articles du panier', error);
        }
    };

    const loadCartFromStorage = async () => {
        try {
            const storedItems = await AsyncStorage.getItem('panier');
            if (storedItems) {
                setCartItems(JSON.parse(storedItems));
            }
        } catch (error) {
            console.error('Erreur lors du chargement du panier depuis AsyncStorage', error);
        }
    };

    return (
        <CartContext.Provider
            value={{ cartItems, cartCount, addToCart, getCartItems, removeFromCart, clearCart }}
        >
            {children}
        </CartContext.Provider>
    );
};
