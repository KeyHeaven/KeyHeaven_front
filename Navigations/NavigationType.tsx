// NavigationTypes.ts
import { StackNavigationProp } from "@react-navigation/stack";

export interface HomeScreenProps {
  navigation: StackNavigationProp<any, "Home">;
}

export interface DetailsScreenProps {
  navigation: StackNavigationProp<any, "Details">;
}

export interface CartScreenProps {
  navigation: StackNavigationProp<any, "Cart">;
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
export interface LoginScreenProps {
  navigation: StackNavigationProp<any, "Login">;
}
export interface SignUpScreenProps {
  navigation: StackNavigationProp<any, "SignUp">;
}

export interface GameScreenProps {
  navigation: StackNavigationProp<any, "Game">;
  route: any;
}
export interface ProfileScreenProps {
    navigation: StackNavigationProp<any, "Profile">;
}
export interface PersonalInformationScreenProps {
    navigation: StackNavigationProp<any, "PersonalInformation">;
}
export interface OdersHistoryScreenProps {
    navigation: StackNavigationProp<any, "OdersHistory">;
}
export interface ChangePasswordScreenProps {
    navigation: StackNavigationProp<any, "ChangePassword">;
}
export interface AddressScreenProps {
    navigation: StackNavigationProp<any, "Address">;
}