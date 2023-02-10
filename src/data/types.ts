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

interface Platform {
  name: string;
}

interface AddedByStatus {
  playing: number;
}

interface Genre {
  name: string;
}

export type PageNumberStructure = number;

export type GenreStructure = "action" | "indie" | "" | "adventure";

export type GamesStructure = GameStructure[];
