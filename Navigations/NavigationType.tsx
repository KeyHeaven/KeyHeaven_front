// NavigationTypes.ts
import { StackNavigationProp } from "@react-navigation/stack";

export interface HomeScreenProps {
  navigation: StackNavigationProp<any, "Home">;
}

export interface DetailsScreenProps {
  navigation: StackNavigationProp<any, "Details">;
}

export interface SplashScreenProps {
  navigation: StackNavigationProp<any, "Splash">;
}

export interface StartScreenProps {
  navigation: StackNavigationProp<any, "Start">;
}
export interface AuthScreenProps {
  navigation: StackNavigationProp<any, "Auth">;
}
