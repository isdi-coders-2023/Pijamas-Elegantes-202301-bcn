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

export type PageNumberStructure = number;

export type GenreStructure = "action" | "indie" | "" | "adventure";

export type GamesStructure = GameStructure[];

interface Tag {
  name: string;
  image_background: string;
}

export interface GameDetailStructure {
  id: number;
  name: string;
  description: string;
  released: string;
  background_image: string;
  background_image_additional: string;
  rating: number;
  added_by_status: AddedByStatus;
  genres: Genre[];
  tags: Tag[];
}

export interface CamelCaseGameDetailStructure {
  id: number;
  name: string;
  description: string;
  released: string;
  backgroundImage: string;
  backgroundImageAdditional: string;
  rating: number;
  addedByStatus: AddedByStatus;
  genres: Genre[];
  tags: Tag[];
}
