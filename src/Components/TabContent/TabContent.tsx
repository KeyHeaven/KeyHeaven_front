// TabContent.tsx
import React from "react";
import { View, Text } from "react-native";
import commonStyles from "../../../Styles/Styles";

interface TabContentProps {
  activeTab: string;
}

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  switch (activeTab) {
    case "Tab1":
      return (
        <View style={commonStyles.tabContent}>
          <Text>Tab 1 hehehehe</Text>
        </View>
      );
    case "Tab2":
      return (
        <View style={commonStyles.tabContent}>
          <Text>Tab 2 hohohohohoho</Text>
        </View>
      );
    case "Tab3":
      return (
        <View style={commonStyles.tabContent}>
          <Text>Tab 3 hihihihihi</Text>
        </View>
      );
    default:
      return null;
  }
};

export default TabContent;
