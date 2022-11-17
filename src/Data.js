import template from "./assets/images/ballet.png"
import ballet from "./assets/images/ballet.png"
import funk from "./assets/images/ballet.png"
import hipHop from "./assets/images/hiphop.jpg"
import latinas from "./assets/images/latinas.png"
import latinasKids from "./assets/images/latinas-kids.png"
import salsa from "./assets/images/salsa.png"

export const modalities = [
  {
    id: 1,
    hasLevels: false,
    hasLevelZero: false,
    danceClass: "Latinas",
    img: latinas,
    professores: ["Renato", "Ana", "Lúcia"],
    schedule: [
      { day: "Segunda-feira", hour: "19:30" },
      { day: "Quarta-feira", hour: "21:30" },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nostrum praesentium impedit corporis? Doloribus expedita sed autem natus repellat impedit itaque eaque odit voluptas cum.",
  },
  {
    id: 2,
    hasLevels: false,
    hasLevelZero: false,
    danceClass: "Latinas Kids",
    img: latinasKids,
    professores: ["Renato", "Ana", "Lúcia"],
    schedule: [
      { day: "Segunda-feira", hour: "19:30" },
      { day: "Quarta-feira", hour: "21:30" },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nostrum praesentium impedit corporis? Doloribus expedita sed autem natus repellat impedit itaque eaque odit voluptas cum.",
  },
  {
    id: 3,
    hasLevels: true,
    hasLevelZero: true,
    danceClass: "Salsa",
    img: salsa,
    professores: ["Renato", "Ana", "Lúcia"],
    schedule: [
      { day: "Segunda-feira", hour: "19:30" },
      { day: "Quarta-feira", hour: "21:30" },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nostrum praesentium impedit corporis? Doloribus expedita sed autem natus repellat impedit itaque eaque odit voluptas cum.",
  },
  {
    id: 4,
    hasLevels: true,
    hasLevelZero: true,
    danceClass: "Bachata",
    img: template,
    professores: ["Renato", "Ana", "Lúcia"],
    schedule: [
      { day: "Segunda-feira", hour: "19:30" },
      { day: "Quarta-feira", hour: "21:30" },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nostrum praesentium impedit corporis? Doloribus expedita sed autem natus repellat impedit itaque eaque odit voluptas cum.",
  },
  {
    id: 5,
    hasLevels: true,
    hasLevelZero: false,
    danceClass: "Kizomba",
    img: template,
    professores: ["Renato", "Ana", "Lúcia"],
    schedule: [
      { day: "Segunda-feira", hour: "19:30" },
      { day: "Quarta-feira", hour: "21:30" },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nostrum praesentium impedit corporis? Doloribus expedita sed autem natus repellat impedit itaque eaque odit voluptas cum.",
  },
  {
    id: 6,
    hasLevels: true,
    hasLevelZero: false,
    danceClass: "Pop Dance",
    img: template,
    professores: ["Renato", "Ana", "Lúcia"],
    schedule: [
      { day: "Segunda-feira", hour: "19:30" },
      { day: "Quarta-feira", hour: "21:30" },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nostrum praesentium impedit corporis? Doloribus expedita sed autem natus repellat impedit itaque eaque odit voluptas cum.",
  },
  {
    id: 7,
    hasLevels: true,
    hasLevelZero: false,
    danceClass: "Hip-Hop",
    img: hipHop,
    professores: ["Renato", "Ana", "Lúcia"],
    schedule: [
      { day: "Segunda-feira", hour: "19:30" },
      { day: "Quarta-feira", hour: "21:30" },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nostrum praesentium impedit corporis? Doloribus expedita sed autem natus repellat impedit itaque eaque odit voluptas cum.",
  },
  {
    id: 8,
    hasLevels: true,
    hasLevelZero: false,
    danceClass: "Ballet",
    img: ballet,
    professores: ["Renato", "Ana", "Lúcia"],
    schedule: [
      { day: "Segunda-feira", hour: "19:30" },
      { day: "Quarta-feira", hour: "21:30" },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nostrum praesentium impedit corporis? Doloribus expedita sed autem natus repellat impedit itaque eaque odit voluptas cum.",
  },
  {
    id: 9,
    hasLevels: false,
    hasLevelZero: false,
    danceClass: "High Heels",
    img: template,
    professores: ["Renato", "Ana", "Lúcia"],
    schedule: [
      { day: "Segunda-feira", hour: "19:30" },
      { day: "Quarta-feira", hour: "21:30" },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nostrum praesentium impedit corporis? Doloribus expedita sed autem natus repellat impedit itaque eaque odit voluptas cum.",
  },
  {
    id: 10,
    hasLevels: false,
    hasLevelZero: false,
    danceClass: "Funk Brasileiro",
    img: funk,
    professores: ["Renato", "Ana", "Lúcia"],
    schedule: [
      { day: "Segunda-feira", hour: "19:30" },
      { day: "Quarta-feira", hour: "21:30" },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nostrum praesentium impedit corporis? Doloribus expedita sed autem natus repellat impedit itaque eaque odit voluptas cum.",
  },
  {
    id: 11,
    hasLevels: false,
    hasLevelZero: false,
    danceClass: "Jazz",
    img: template,
    professores: ["Renato", "Ana", "Lúcia"],
    schedule: [
      { day: "Segunda-feira", hour: "19:30" },
      { day: "Quarta-feira", hour: "21:30" },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nostrum praesentium impedit corporis? Doloribus expedita sed autem natus repellat impedit itaque eaque odit voluptas cum.",
  },
  {
    id: 12,
    hasLevels: false,
    hasLevelZero: false,
    danceClass: "Semba",
    img: template,
    professores: ["Renato", "Ana", "Lúcia"],
    schedule: [
      { day: "Segunda-feira", hour: "19:30" },
      { day: "Quarta-feira", hour: "21:30" },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nostrum praesentium impedit corporis? Doloribus expedita sed autem natus repellat impedit itaque eaque odit voluptas cum.",
  },
  {
    id: 13,
    hasLevels: false,
    hasLevelZero: false,
    danceClass: "Baby Steps",
    img: template,
    professores: ["Renato", "Ana", "Lúcia"],
    schedule: [
      { day: "Segunda-feira", hour: "19:30" },
      { day: "Quarta-feira", hour: "21:30" },
      { day: "Quarta-feira", hour: "21:30" },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nostrum praesentium impedit corporis? Doloribus expedita sed autem natus repellat impedit itaque eaque odit voluptas cum.",
  },
]
