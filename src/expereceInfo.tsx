export type ExperienceType = {
  name: string;
  place: string;
  startYear: number;
  endYear: number;
  description: string;
  category: string;
  duration: number,
}

const years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]

const experiences: ExperienceType[] = [
  {
    name: "Graduação",
    place: "PUC-Rio",
    startYear: 2010,
    endYear: 2017,
    description: "Arquitetura e Urbanismo",
    category: "Formação",
    duration: 7,
  },
  {
    name: "Intercâmbio",
    place: "Inglaterra",
    startYear: 2013,
    endYear: 2014,
    description: "Arquitetura e Urbanismo",
    category: "Formação",
    duration: 1,

  },
  {
    name: "Programa de Iniciação Cientifica e Mestrado",
    place: "IMPA",
    startYear: 2010,
    endYear: 2011,
    description: "Matemática discreta",
    category: "Formação",
    duration: 1,

  },
  {
    name: "Tecnico",
    place: "Trybe",
    startYear: 2021,
    endYear: 2022,
    description: "Desenvolvimento Web Full Stack",
    category: "Formação",
    duration: 1,
  },
  {
    name: "Desevolvedora web",
    place: "VILA Estúdio",
    startYear: 2022,
    endYear: 2023,
    description: "Desenvolvimento Web Frontend do site da empresa e para um cliente de um site do setor hoteleiro",
    category: "Experiencia Proficional",
    duration: 1,
  },
  {
    name: "Arquiteta",
    place: "VILA Estúdio",
    startYear: 2017,
    endYear: 2022,
    description: "Arquiteta e Gerente de Obras",
    category: "Experiencia Proficional",
    duration: 5,
  },
  {
    name: "Estágio",
    place: "Inova Urbe",
    startYear: 2016,
    endYear: 2016,
    description: "Escritório de arquitetura social na Rocinha, comunidade no Rio de Janeiro",
    category: "Experiencia Proficional",
    duration: 1,
  }
];

export { experiences };