export interface GameStructure {
  id: string;
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
