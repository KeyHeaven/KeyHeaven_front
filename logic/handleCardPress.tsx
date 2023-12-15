import React from "react";

const handleCardPress = (item: {
    title: string;
    image: any;
    prix: string;
    editor: string;
    developer: string;
    date: string;
    genre: string;
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
    directX: string;
    additionalNote: string;
    screen: string;
    promo: string;
    year: string;
  }) => {
    console.log("Card pressed:", item);
  };

  export default handleCardPress;