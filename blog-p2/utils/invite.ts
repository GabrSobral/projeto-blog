import SmartTV from "/public/images/smart-tv.jpg";
import SmartWatch from "/public/images/smart-watch.jpg";
import Alexa from "/public/images/alexa.jpg";

type PropsInvite = {
  imagem: any;
  title: string;
  description: string;
  url: string;
};

export const Invite: PropsInvite[] = [
  {
    description:
      "O termo Smart TV, significa televisão inteligente. Estas surgiram para trazer um conceito que une a televisão com a internet.",
    imagem: SmartTV,
    title: "SmartTV",
    url: "",
  },
  {
    description:
      "Um smartwatch é um ''relógio moderno'' que possui telas sensíveis ao toque, entregam aplicativos e normalmente registram sinais vitais.",
    imagem: SmartWatch,
    title: "SmartWatch",
    url: "",
  },
  {
    description:
      "Alexa é a assistente virtual da Amazon, que possui alto-falantes inteligentes. Esta assistente é capaz de entender o que lhe é pedido e executar tarefas simples.",
    imagem: Alexa,
    title: "Alexa",
    url: "",
  },
];
