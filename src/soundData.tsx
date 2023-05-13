type sound = {
  name: string;
  icon: string;
  sound: string;
};

type ISoundData = sound[];

export const soundData: ISoundData = [
  {
    name: "bird",
    icon: "/icons/bird.svg",
    sound: "/sounds/birds.mp3",
  },
  {
    name: "boat",
    sound: "/sounds/boat.mp3",
    icon: "/icons/boat.svg",
  },

  {
    name: "city",
    sound: "/sounds/city.mp3",
    icon: "/icons/city.svg",
  },

  {
    name: "coffee-shop",
    sound: "/sounds/coffee-shop.mp3",
    icon: "/icons/coffee-shop.svg",
  },

  {
    name: "fireplace",
    sound: "/sounds/fireplace.mp3",
    icon: "/icons/fireplace.svg",
  },

  {
    name: "wind",
    sound: "/sounds/wind.mp3",
    icon: "/icons/wind.svg",
  },

  {
    name: "rain",
    sound: "/sounds/rain.mp3",
    icon: "/icons/rain.svg",
  },

  {
    name: "storm",
    sound: "/sounds/storm.mp3",
    icon: "/icons/storm.svg",
  },

  // {
  //   name: "stream",
  //   sound: "/sounds/stream.mp3",
  //   icon: "/icons/stream.svg",
  // },

  {
    name: "summer-night",
    sound: "/sounds/summer-night.mp3",
    icon: "/icons/summer-night.svg",
  },

  // {
  //   name: "train",
  //   sound: "/sounds/train.mp3",
  //   icon: "/icons/train.svg",
  // },

  {
    name: "waves",
    sound: "/sounds/waves.mp3",
    icon: "/icons/waves.svg",
  },

  {
    name: "white noise",
    sound: "/sounds/white-noise.mp3",
    icon: "/icons/white-noise.svg",
  },

  {
    name: "pink-noise",
    sound: "/sounds/pink-noise.mp3",
    icon: "/icons/pink-noise.svg",
  },
];
