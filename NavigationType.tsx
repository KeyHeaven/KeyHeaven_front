// NavigationTypes.ts
import { StackNavigationProp } from '@react-navigation/stack';

export interface HomeScreenProps {
    navigation: StackNavigationProp<any, 'Home'>; 
  }

export interface DetailsScreenProps {
  navigation: StackNavigationProp<any, 'Details'>;
}

