export interface ApiResponseStructure {
  [x: string]: any;
  next: string;
  previous: string;
  results: GameStructure[];
}

interface GameStructure {
  id: number;
  name: string;
  released: string;
  background_image: string;
  rating: number;
  genres: Genre[];
  added_by_status: AddedByStatus;
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
