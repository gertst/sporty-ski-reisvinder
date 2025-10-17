import { Trip, Statement, TripName } from "./types";

export const TRIPS: Record<TripName, Trip> = {
  [TripName.Cervinia]: {
    id: TripName.Cervinia,
    name: "Cervinia-Zermatt (Paasvakantie)",
    location: "Italië",
    description:
      "Een onvergetelijke ski-ervaring op extreme hoogte met absolute sneeuwzekerheid. Perfect voor de ervaren ski-familie die op zoek is naar avontuur en unieke activiteiten.",
    pros: [
      "Ski-in/Ski-out op 2550m",
      "Extreem sneeuwzeker tot na Pasen",
      "Unieke kinderactiviteiten (pistebully, sneeuwscooter)",
      "Heel uitgestrekt skigebied met 322 km aan pistes",
      "Adembenemende uitzichten op de Matterhorn.",
      "De prachtige pistes op de gletsjers zijn ook in het voorjaar nog in uitstekende conditie.",
    ],
    imageUrl:
      "https://res.cloudinary.com/sportyski25/image/upload/f_avif,q_auto,w_2048,h_1367/v1746040626/matterhorn-met-sporty-ski-monitor_joxxoc.jpg",
    idealFor:
      "Gezinnen met kinderen met ski-ervaring (vanaf niveau 3) die een groot, hooggelegen en veelzijdig skigebied zoeken.",
  },
  [TripName.Nassfeld]: {
    id: TripName.Nassfeld,
    name: "Nassfeld",
    location: "Oostenrijk",
    description:
      "De ultieme gezinsbestemming waar comfort, gemak en plezier centraal staan. Met luxe appartementen direct aan de piste en een 'Parents Day' om zelf volop te genieten.",
    pros: [
      "Accommodatie pal op de piste",
      "Luxe en ruime gezinsappartementen",
      "'Parents Day' voor een vrije skidag voor de ouders",
      "Snowboardlessen mogelijk",
    ],
    imageUrl:
      "https://res.cloudinary.com/sportyski25/image/upload/f_avif,q_auto,w_2048,h_1367/v1745250796/skilift-cervinia_uilgkn.jpg",
    idealFor:
      "Gezinnen met skiërs van alle niveaus (ook beginners) die een compact, kindvriendelijk en comfortabel gebied wensen.",
  },
  [TripName.LittleKidsWeek]: {
    id: TripName.LittleKidsWeek,
    name: "Little Kids Week (Nassfeld)",
    location: "Oostenrijk",
    description:
      "De perfecte, zorgeloze start voor de allerkleinsten. In een rustige periode, met skilessen vanaf 3 jaar en Nederlandstalige opvang, is dit de ideale eerste ski-ervaring.",
    pros: [
      "Skilessen vanaf 3 jaar",
      "Nederlandstalige peuteropvang vanaf 1,5 jaar",
      "Rustige periode (buiten schoolvakanties)",
      "Verblijf in volpension naast de beginnerspiste",
    ],
    imageUrl:
      "https://res.cloudinary.com/sportyski25/image/upload/f_avif,q_auto,w_2048,h_1367/v1746124551/little-kids-park_mobuzk.jpg",
    idealFor:
      "Gezinnen met zeer jonge kinderen (peuters en kleuters) die in een veilige en rustige omgeving willen leren skiën.",
  },
};

export const STATEMENTS: Statement[] = [
  {
    id: "q1",
    text: "Onze kinderen zijn onder 6 en moeten de basis van het skiën nog leren.",
    associatedTrips: [
      { trip: TripName.LittleKidsWeek, weight: 3 },
      { trip: TripName.Nassfeld, weight: 1.5 },
      { trip: TripName.Cervinia, weight: -2 },
    ],
  },
  {
    id: "q2",
    text: "Topsneeuw, zelfs laat in het seizoen, is voor ons een belangrijke factor.",
    associatedTrips: [{ trip: TripName.Cervinia, weight: 3 }],
  },
  {
    id: "q4",
    text: "We houden van de uitgestrekte natuur en prima ski-accommodatie.",
    associatedTrips: [{ trip: TripName.Cervinia, weight: 2.5 }],
  },
  {
    id: "q5",
    text: "Een dagje skiën zonder kinderen, terwijl ze professioneel worden opgevangen, klinkt als een droom.",
    associatedTrips: [
      { trip: TripName.Nassfeld, weight: 2.5 },
      { trip: TripName.LittleKidsWeek, weight: 1.5 },
    ],
  },
  {
    id: "q6",
    text: "Unieke avonturen zoals een rit in een pistebully of sneeuwscootertocht maken de vakantie compleet.",
    associatedTrips: [
      { trip: TripName.Cervinia, weight: 2.5 },
      { trip: TripName.LittleKidsWeek, weight: -0.5 },
      { trip: TripName.Nassfeld, weight: -0.5 },
    ],
  },
  {
    id: "q7",
    text: "Reizen buiten de schoolvakanties, in een rustigere periode, heeft onze voorkeur.",
    associatedTrips: [
      { trip: TripName.LittleKidsWeek, weight: 3 },
      { trip: TripName.Cervinia, weight: -0.5 },
      { trip: TripName.Nassfeld, weight: -0.5 },
    ],
  },
];
