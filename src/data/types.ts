export interface ApiResponseStructure {
  next: string;
  previous: string;
  results: GameStructure[];
}
export interface GameStructure {
  id: number;
  name: string;
  released: string;
  background_image: string;
  rating: number;
  genres: Genre[];
  added_by_status: AddedByStatus;
  platforms: Platform[];
}

export interface CamelCaseGameStructure {
  id: number;
  name: string;
  released: string;
  backgroundImage: string;
  rating: number;
  genres: Genre[];
  addedByStatus: AddedByStatus;
  platforms: Platform[];
}

interface Platform {
  name: string;
}

interface AddedByStatus {
  playing: number;
}

interface Genre {
  name: string;
}

export type GamesStructure = GameStructure[];
