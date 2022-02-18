const proyectos = [
  {
    id:1,
    name: "CountryApi",
    urlImg: "portafolio/countryApi.png",
    urlRepo: "https://github.com/angelMarcosCastilla/countryApi",
    urlview: "https://kind-raman-daf0bc.netlify.app/",
  },
  {
    id:2,
    name: "PokeMemory",
    urlImg: "portafolio/pokeeMemory.png",
    urlRepo: "https://github.com/angelMarcosCastilla/pokeMemory",
    urlview: "https://angelmarcoscastilla.github.io/pokeMemory/pokeMemory/",
  },
  {
    id:3,
    name: "EasyBank-frontedMentor",
    urlImg: "portafolio/easybank.png",
    urlRepo:
      "https://github.com/angelMarcosCastilla/easybank-landing-page-master",
    urlview:
      "https://angelmarcoscastilla.github.io/easybank-landing-page-master/",
  },
  {
    id:4,
    name: "base apparel landing page",
    urlImg: "portafolio/baseApparel.png",
    urlRepo:
      "https://github.com/angelMarcosCastilla/base-apparel-coming-soon-master",
    urlview:
      "https://angelmarcoscastilla.github.io/base-apparel-coming-soon-master/",
  },
  {
    id:5,
    name: "card-acordeon",
    urlImg: "portafolio/cardAcordeon.png",
    urlRepo: "https://github.com/angelMarcosCastilla/card-acordeon",
    urlview: "https://angelmarcoscastilla.github.io/card-acordeon/",
  },
];

export default function handler(req, res) {
  res.status(200).json(proyectos);
}
