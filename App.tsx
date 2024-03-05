// App.tsx
import React from 'react';
import Navigation from './Navigations/Navigation';
import 'react-native-gesture-handler';
import { StripeProvider } from '@stripe/stripe-react-native';
import { CartProvider } from './src/Controllers/CartController';
import {decode as atob, encode as btoa} from 'base-64';

if (!global.btoa) {  global.btoa = btoa; }
if (!global.atob) { global.atob = atob; }

const App: React.FC = () => {
    return (
        <StripeProvider
            publishableKey={process.env.EXPO_PUBLIC_STRIPE_KEY}
        >
            <CartProvider>
            <Navigation />
            </CartProvider>
        </StripeProvider>
    );
};

export default App;
