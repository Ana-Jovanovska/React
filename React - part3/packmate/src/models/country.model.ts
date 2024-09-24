export interface Country {
  name: {
    common: string;
    official: string;
    nativeName?: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  status: string;
  currencies?: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  internationalDialing: {
    root: string;
    suffixes: string[];
  };
  capital?: string[];
  region: string;
  languages?: {
    [key: string]: string;
  };
  demonyms?: {
    [key: string]: {
      female: string;
      male: string;
    };
  };
  flagEmoji: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  carInfo: {
    signs: string[];
    drivingSide: string;
  };
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
  };
  startOfWeek: string;
  capitalInfo: {
    coordinates?: [number, number];
  };
  postalCode?: {
    format: string;
    regex?: string;
  };
}
