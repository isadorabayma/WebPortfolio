export type ExperienceType = {
  name: String;
  startYear: Number;
  endYear: Number;
  description: String;
  category: String;
}

const experiences: ExperienceType[] = [
  {
    name: "Graduação",
    startYear: 2010,
    endYear: 2017,
    description: "Arquitetura e Urbanismo",
    category: "Formação"
  },
  {
    name: "Intercâmbio Inglaterra",
    startYear: 2013,
    endYear: 2014,
    description: "Arquitetura e Urbanismo",
    category: "Formação"

  },
  {
    name: "Programa de Iniciação Cientifica e Mestrado",
    startYear: 2009,
    endYear: 2011,
    description: "Matemática discreta",
    category: "Formação"

  },
  {
    name: "Tecnico na Trybe",
    startYear: 2021,
    endYear: 2022,
    description: "Desenvolvimento Web Full Stack",
    category: "Formação"
  },
  {
    name: "Desevolvedora web - VILA Estúdio",
    startYear: 2022,
    endYear: 2023,
    description: "Desenvolvimento Web Frontend do site da empresa e para um cliente de um site do setor hoteleiro",
    category: "Experiencia Proficional"
  },
  {
    name: "Arquiteta - Empresa VILA Estúdio",
    startYear: 2017,
    endYear: 2022,
    description: "Arquiteta e Gerente de Obras",
    category: "Experiencia Proficional"
  },
  {
    name: "Estágio de Arquitetura - Inova Urbe",
    startYear: 2016,
    endYear: 2016,
    description: "Escritório de arquitetura social na Rocinha, comunidade no Rio de Janeiro",
    category: "Experiencia Proficional"
  }
];

export { experiences };