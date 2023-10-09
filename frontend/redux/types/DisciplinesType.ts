export enum DisciplinesTypes {
  'web-designer' = 'web-designer',
  'vedushii' = 'vedushii',
  'web-developer' = 'web-developer',
  'pantomima' = 'pantomima',
  'step' = 'step',
  'vokal' = 'vokal',
  'bloger' = 'bloger',
  'clown' = 'clown',
  'actor' = 'actor',
  'billiards' = 'billiards',
  'barmen' = 'barmen',
  'standup' = 'standup',
}

export interface Icost {
  name: string;
  price: string;
  type: type;
}

export interface Iskills {
  name: string;
  price: string;
  type: type;
}

export enum type {
  group,
  individual,
  course,
}
export enum resize {
  resize = '-square',
}

export interface DisciplinesType {
  id: number;
  name: string;
  name_sklonenie: string;
  type: DisciplinesTypes;
  ImageURL: string;
  ImageType: string;
  ImageURLResize?: string;
  description: string;
  lesson_duration: string;
  cost: Icost[];
  skills: string[];
  recomended_lesson_count: string;
}

export type DisciplineId = {
  id?: DisciplinesType['id'];
};

export type DisciplineChooseControl = {
  DSC_id: DisciplineId | false;
};
