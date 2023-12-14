const OfferSlides: Array<{
  title: string;
  image: any;
  prix: string;
  developer: string;
  editor: string;
  genre: string;
  date: string;
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
  directX: string;
  additionalNote: string;
  screen: string;
  year: string;
  promo: string;
}> = [
  {
    title: "Cyberpunk 2077",
    year: "2020",
    genre: "Action/RPG",
    promo: "-20%",
    image: require("../assets/images/cyber.png"),
    developer: "CD Projekt Red",
    editor: "CD Projekt",
    prix: "69.99",
    date: "10 décembre 2020",
    os: "Windows 7 ou 10",
    processor: "Intel Core i5-3570K ou AMD FX-8310",
    memory: "8 Go de RAM",
    graphics: "NVIDIA GeForce GTX 780 ou AMD Radeon RX 470",
    storage: "70 Go",
    directX: "Version 12",
    additionalNote: "SSD recommandé",
    screen: "1024x768",
  },
  {
    title: "Baldur's gate III",
    year: "2023",
    genre: "C-RPG",
    promo: "-30%",
    image: require("../assets/images/baldur.jpg"),
    developer: "Larian Studios",
    editor: "Larian Studios",
    prix: "69.99",
    date: "3 août 2023",
    os: "Windows 7 ou 10",
    processor: "Intel Core i5-3570K ou AMD FX-8310",
    memory: "8 Go de RAM",
    graphics: "NVIDIA GeForce GTX 780 ou AMD Radeon RX 470",
    storage: "70 Go",
    directX: "Version 12",
    additionalNote: "SSD recommandé",
    screen: "1024x768",
  },
  {
    title: "Donkey Kong 64",
    year: "1999",
    genre: "Aventure",
    promo: "-80%",
    image: require("../assets/images/donkey.jpeg"),
    developer: "Rare",
    editor: "Nintendo",
    prix: "69.99",
    date: "6 décembre 1999",
    os: "Windows 7 ou 10",
    processor: "Intel Core i5-3570K ou AMD FX-8310",
    memory: "8 Go de RAM",
    graphics: "NVIDIA GeForce GTX 780 ou AMD Radeon RX 470",
    storage: "70 Go",
    directX: "Version 12",
    additionalNote: "SSD recommandé",
    screen: "1024x768",
  },
  {
    title: "Gohstrunner II",
    year: "2023",
    genre: "Action",
    promo: "-10%",
    image: require("../assets/images/ghost.jpeg"),
    developer: "One More Level",
    editor: "505 Games",
    prix: "69.99",
    date: "26 octobre 2023",
    os: "Windows 7 ou 10",
    processor: "Intel Core i5-3570K ou AMD FX-8310",
    memory: "8 Go de RAM",
    graphics: "NVIDIA GeForce GTX 780 ou AMD Radeon RX 470",
    storage: "70 Go",
    directX: "Version 12",
    additionalNote: "SSD recommandé",
    screen: "1024x768",
  },
  {
    title: "Spiderman 2",
    year: "2023",
    genre: "Action/Adventure",
    promo: "-20%",
    image: require("../assets/images/spidey.png"),
    developer: "Insomniac Games",
    editor: "Sony Interactive Entertainment",
    prix: "69.99",
    date: "20 octobre 2023",
    os: "Windows 7 ou 10",
    processor: "Intel Core i5-3570K ou AMD FX-8310",
    memory: "8 Go de RAM",
    graphics: "NVIDIA GeForce GTX 780 ou AMD Radeon RX 470",
    storage: "70 Go",
    directX: "Version 12",
    additionalNote: "SSD recommandé",
    screen: "1024x768",
  },
  {
    title: "Sonic Adventure 2",
    year: "2001",
    genre: "Action/Adventure",
    promo: "-80%",
    image: require("../assets/images/sonic.png"),
    developer: "Sonic Team",
    editor: "Sega",
    prix: "69.99",
    date: "23 juin 2001",
    os: "Windows 7 ou 10",
    processor: "Intel Core i5-3570K ou AMD FX-8310",
    memory: "8 Go de RAM",
    graphics: "NVIDIA GeForce GTX 780 ou AMD Radeon RX 470",
    storage: "70 Go",
    directX: "Version 12",
    additionalNote: "SSD recommandé",
    screen: "1024x768",
  },
];

export default OfferSlides;
