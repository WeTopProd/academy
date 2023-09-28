export interface Idisciplines {
    name: string;
    attr: string;
  }
  
  export interface ITeacher {
    name: string;
    ImageURL: string;
    fullName: string;
    description: string;
    id: number;
    skills: string[];
    greetings: string;
    disciplines: Array<Idisciplines>;
    unique: string;
    future: string[];
  }



export interface ITeacherLarge {    
    id: string
    fullName: string,
    disciplines: Array<Idisciplines>,
    skills: Array<string>,
    greetings: string,
    unique: string,
    future: Array<string>,
}