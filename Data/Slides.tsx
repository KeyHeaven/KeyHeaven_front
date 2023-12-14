const slides: Array<{
  title: string;
  image: any;
  prix: string;
  developer: string;
  editor: string;
  genre: string;
  date: string;
}> = [
  {
    title: "Cyberpunk 2077",
    image: require("../assets/images/cyber.png"),
    prix: "69.99",
    developer: "CD Projekt Red",
    editor: "CD Projekt",
    genre: "RPG / FPS",
    date: "10 décembre 2020",
  },
  {
    title: "Baldur's gate III",
    image: require("../assets/images/baldur.jpg"),
    prix: "69.99",
    developer: "Larian Studios",
    editor: "Larian Studios",
    genre: "RPG / Aventure",
    date: "3 août 2023",
  },
  {
    title: "Tales of Symphonia",
    image: require("../assets/images/tales.jpg"),
    prix: "69.99",
    developer: "Bandai Namco",
    editor: "Bandai Namco",
    genre: "RPG / Aventure",
    date: "19 novembre 2004",
  },
  {
    title: "Gohstrunner II",
    image: require("../assets/images/ghost.jpeg"),
    prix: "69.99",
    developer: "One More Level",
    editor: "505 Games",
    genre: "Action / Aventure",
    date: "26 octobre 2023",
  },
  {
    title: "Spiderman 2",
    image: require("../assets/images/spidey.png"),
    prix: "69.99",
    developer: "Insomniac Games",
    editor: "Sony Interactive Entertainment",
    genre: "Action / Aventure",
    date: "20 octobre 2023",
  },
  {
    title: "Sonic Adventure 2",
    image: require("../assets/images/sonic.png"),
    prix: "69.99",
    developer: "Sonic Team",
    editor: "Sega",
    genre: "Action / Aventure",
    date: "23 juin 2001",
  },
];

export default slides;
