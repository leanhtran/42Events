export interface IRace {
  banner_card: string;
  brandRaceSlug: string;
  end_date: string;
  eventType: string;
  isBundle: boolean;
  isFreeEngraving: boolean;
  is_brand_race: boolean;
  is_new: boolean;
  joined: boolean;
  launch_date: string;
  medalViewImage: string;
  medal_engraving_end_date: string;
  raceIDs: string[];
  racePeriod: string;
  racePrice: string;
  raceRunners: 4;
  race_name: string;
  race_type: string;
  slug: string;
  sportType: string;
  start_date: string;
  _id: string;
  categories: string[];
}

export interface IRaceEvent {
  featured: IRace[];
  free: IRace[];
  newRelease: IRace[];
  past: IRace[];
  popular: IRace[];
  startingSoon: IRace[];
  updatedAt: string;
}

export type RaceList = IRace[]