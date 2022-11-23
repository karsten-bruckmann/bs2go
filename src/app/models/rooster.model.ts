export interface Rooster {
  title: string;
  forces: Force[];
  summaries: Summary[];
}

export interface Summary {
  name: string;
  textItems: string[];
}

export interface Force {
  name: string;
  categories: Category[];
}

export interface Category {
  name: string;
  sections: Section[];
}

export interface Section {
  name: string;
  sections: Section[];
  textItems: string[];
  tables: Table[];
}

export interface Table {
  name: string;
  header: string[];
  rows: string[][];
}
