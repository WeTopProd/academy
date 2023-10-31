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
  type?: DisciplinesTypes | any;
  image_url: string;
  ImageType?: string;
  ImageURLResize?: string;
  description: string;
  lesson_duration: string;
  cost: Icost[] | any;
  skills: string[];
  recommended_lesson_count: string;
}

export type DisciplineId = {
  id?: DisciplinesType['id'];
};

export type ChosenDiscipline = {
  count_people: number;
  lesson_dates: [{ date: string; time: string }] | [];
  start_lessons: string;
  type_payment: string;
  discipline: number | false;
  type_lessons: number;
  count_lessons: number;
  additional_person: number;
  general_time: string;
};

export type DisciplineChooseControl = {
  DSC_id: DisciplineId | false;
  step: number;
  chosen: ChosenDiscipline;
  done: boolean;
  stepPolControl: {
    1: {
      discipline: boolean;
      type_lessons: boolean;
      count_lessons: boolean;
      count_people: boolean;
    };
    2: { start_lessons: boolean; general_time: boolean };
    3: { type_payment: boolean };
  };
};
