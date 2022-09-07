export interface userInfo {
  fName: string;
  lName: string;
  phone: string;
  email: string;
}

export interface Pokemon {
  name: string;
  types: string[];
  imgUrl: string;
}

export interface PokemonType {
  pokemon: {
    name: string;
    url: string;
  };
  slot: number;
}
