
export enum TripName {
  Cervinia = 'Cervinia',
  Nassfeld = 'Nassfeld',
  LittleKidsWeek = 'LittleKidsWeek',
}

export interface Statement {
  id: string;
  text: string;
  associatedTrips: { trip: TripName; weight: number }[];
}

export interface Trip {
  id: TripName;
  name: string;
  location: string;
  description: string;
  pros: string[];
  imageUrl: string;
  idealFor: string;
}

export type Answers = Record<string, number>;
