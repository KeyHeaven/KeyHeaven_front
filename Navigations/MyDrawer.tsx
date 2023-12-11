// MyDrawer.tsx
import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "../Screens/HomeScreen";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
