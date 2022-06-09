import { PropsCardCuriosidades } from "components/Card";
import Sobral from "/public/images/sobral.svg";
import Clarissa from "/public/images/woman.png";
import Jeredy from "/public/images/jeredy.svg";

export type PropsProfileCard = {
  nome: string;
  image: any;
  description: {
    local: string;
    job: string;
    registered: string;
    socialmedia: {
      in: string;
      git: string;
    };
  };
};

export const ProfileInfo: PropsProfileCard = {
  nome: "Gabriel Sobral",
  image: Sobral,
  description: {
    job: "Senior Software Engineer Developer",
    local: "São Paulo - Brazil",
    registered: "27 de jun. de 2021",
    socialmedia: {
      git: "https://www.github.com/",
      in: "https://www.linkedin.com/in/gabriel-sobral-programmer/",
    },
  },
};

export const ProfileInfoClarissa: PropsProfileCard = {
  nome: "Clarissa Liz",
  image: Clarissa,
  description: {
    job: "Software Front-End Developer",
    local: "Minas Gerais - Brazil",
    registered: "02 de jan. de 2021",
    socialmedia: {
      git: "https://www.github.com/",
      in: "https://www.linkedin.com/",
    },
  },
};

export const ProfileInfoJeredy: PropsProfileCard = {
  nome: "Jeredy Altman",
  image: Jeredy,
  description: {
    job: "Software Back-End Developer",
    local: "Amapá - Brazil",
    registered: "29 de mai. de 2020",
    socialmedia: {
      git: "https://www.github.com/",
      in: "https://www.linkedin.com/",
    },
  },
};
