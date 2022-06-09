import {
  CardCuriosidades,
  CardPostsProfile,
  CardProfile,
  CardProfileJeredy,
} from "components/Card";
import { TextBookMark } from "components/DivMarkedText";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Invite } from "utils/invite";
import { Header } from "../components/Header";
import IconHome from "/public/icons/home.svg";
import Girias from "/public/images/girias.jpg";
import { ProfileInfoJeredy as PI } from "utils/profile-info";
import { PostsUserOn } from "utils/posts-user-on";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className="bg-banner-3 bg-center bg-cover h-[300px] contrast-75 flex flex-col justify-center gap-5 pl-28  text-white tracking-wider">
        <span className="text-5xl contrast-200 ">Gírias da Internet</span>
        <span className="text-3xl font-extralight">
          Você sabe o que significa?
        </span>
      </div>
      <div className="bg-circles bg-cover bg-repeat-y min-h-screen text-[#373737]">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 flex py-1 gap-3 mx-12 text-sm">
            <Link href={""}>
              <Image src={IconHome} className="cursor-pointer" />
            </Link>
            <span>|</span>
            <Link href={""}>Artigos</Link>
            <span>|</span>
            <Link href={"/"}>Internet das Coisas</Link>
            <span>|</span>
            <Link href={"girias-internet"}>Gírias da Internet</Link>
            <span>|</span>
            <Link href={"Podcast"}>Podcast - História da Internet</Link>
          </div>
          <div className="col-span-12 mx-12 rounded-lg ">
            <div className="grid grid-cols-12 gap-4 py-4 px-12 bg-[#F1F1F1]">
              <div className="col-span-12 flex gap-7 text-[#373737] text-xs pb-2 pt-2">
                <span>5min de leitura</span>
                <span>19/05/2022 - às 19:32</span>
              </div>
              <div className="col-span-8">
                <div className="break-words flex flex-col gap-5">
                  <span>
                    Com a Era Digital, novos meios, cenários surgiram,
                    modificando nossa forma de interagir por meio da língua.
                    Acerca dos usos da linguagem, vê-se nessa forma um uso
                    minimalista de pontuação, uso quantitativo de siglas,
                    abreviaturas e frases que fogem do padrão. Há uma “mistura”
                    de formas de expressões que envolvem os significados, como
                    som, imagem e texto.
                  </span>
                  <span>
                    Não é novidade que a internet é uma das ferramentas mais
                    utilizadas no mundo todo, seja para trabalho, estudo ou até
                    entreterimento. É justamente por essa alta demanda de uso
                    que ela acabou se tornando berço de novas expressões e
                    comportamentos entre a galera mais jovem. Memes, hashtags,
                    abreviações...São tantas novidade que fica cada vez mais
                    difícil acompanhar, ainda mais porque elas se multiplicam e
                    mudam em uma velocidade espantosa. Essa mudança de linguagem
                    na internet começou em meados de 2000 e vem acompanhando a
                    evolução digital até hoje.
                  </span>
                  <span>
                    Os termos presentes em mensagens, e-mails, mídias sociais,
                    jogos ou até mesmo ambientes mais formais são, normalmente
                    uma relaçõa de expressões norte-americanas que se destacaram
                    - ou, entrando na onda, bombaram - na rede. Com a Era
                    Digital, novos meos, cenários surgiram, modificando nossa
                    forma de interagir por meio da língua. Acerca dos usos de
                    linguagem, vê-se nessa forma um uso minimalista de
                    pontuação, uso quantitativo de siglas, abreviaturas e frases
                    que fogem do padrão. Há uma “mistura” de formas de
                    expressões que envolvem os siginificados, como som, imagem e
                    texto.
                  </span>
                </div>
                <TextBookMark
                  texto={"Afinal, o que é de fato uma gíria de internet?"}
                />
                <div className="break-words flex flex-col gap-5">
                  <span>
                    {" "}
                    Os usuários da internet, ao criarem uma linguagem própria ao
                    ambiente virtual, utilizam-se da sua competência escrita
                    para a criação, por exemplo, de gírias que circulam nesse
                    meio. A gíria é um vocábulo típico da oralidade, ela
                    apresenta forte teor de coesão e é formadora de
                    comportamentos, principalmente entre os jovens. Podemos
                    estudá-la sob duas óticas: a gíria de grupo e a gíria comum.
                    Todos esses apontamentos nos levam a perceber a linguagem da
                    internet como um novo modelo de comunicação, que é acessível
                    a todos os que circulam nesse ambiente, a partir de uma
                    linguagem adequada a esse meio.{" "}
                  </span>
                  <div className="flex justify-center py-4">
                    <Image
                      src={Girias}
                      alt={"Foto de gírias"}
                      width={440}
                      height={440}
                    />
                  </div>
                  <span>
                    É válido falar que, a comunicação vem fazendo inovações, e
                    faz com que surgem em todos os âmbitos da sociedade,
                    inclusive na língua, as adequações pelas quais a comunicação
                    passou ao longo desse período do mundo globalizado, permitem
                    que consideremos a linguagem do meio digital como
                    específica, própria para esse ambiente, no sentido de ser
                    distinta da linguagem oral, por exemplo, uma vez que é
                    materializada em termos específicos, como os termos técnicos
                    e as gírias, que possibilitam aos usuários movimentarem-se
                    na internet socialmente.
                  </span>
                  <span>
                    Atualmente, vivemos como modelo das tecnologias da
                    comunicação, que não é voltado só para o consumo de
                    informações, mas sim onde os usuários podem produzir e
                    compartilhar informações, como em sites de redes sociais,
                    por exemplo, <b> Facebook</b>, <b>Instagram</b>,{" "}
                    <b>WhatsApp</b>, <b>Twitter</b>, etc.
                  </span>
                </div>
                <TextBookMark
                  texto={
                    "Alguns exemplos de gírias mais faladas nas redes socias"
                  }
                />
                <div className="break-words flex flex-col gap-5 ml-3">
                  <div className="flex gap-3 relative">
                    <div className="absolute top-2 w-2 h-2 bg-blue-900 rounded-full" />
                    <span className="ml-4">
                      <b>Ranço</b>: Quando dizemos que uma pessoa tem ranço de
                      alguém, nos referimos a um sentimento de “nojo”.
                    </span>
                  </div>
                  <div className="flex gap-3 relative">
                    <div className="absolute top-2 w-2 h-2 bg-blue-900 rounded-full" />
                    <span className="ml-4">
                      <b>Biscoitero</b>: Pessoa que busca chamar atenção fazendo
                      ou dizendo coisas, com, a maioria das vezes, de receber
                      elogios
                    </span>
                  </div>
                  <div className="flex gap-3 relative">
                    <div className="absolute top-2 w-2 h-2 bg-blue-900 rounded-full" />
                    <span className="ml-4">
                      <b>Crush</b>: Ter uma queda ou interesse em alguém,
                      algumas pessoas definem com um sentimento não
                      correspondido.
                    </span>
                  </div>
                  <div className="flex gap-3 relative">
                    <div className="absolute top-2 w-2 h-2 bg-blue-900 rounded-full" />
                    <span className="ml-4">
                      <b>Auge</b>: Alguém compartilha um fake news, por exemplo,
                      e você pode dizer, como algo “ridículo” de se acreditar,
                      ou também elogiar alguém.
                    </span>
                  </div>
                  <div className="flex gap-3 relative">
                    <div className="absolute top-2 w-2 h-2 bg-blue-900 rounded-full" />
                    <span className="ml-4">
                      <b>Militou</b>: É usada para dizer que alguém é muito
                      bonito e atinge a nota máxima, que marcou 10 pontos em uma
                      escala de 10 na beleza ou em qualquer outra coisa que
                      gostou.
                    </span>
                  </div>
                  <span>
                    E entre muitas outras, não há dúvidas de que a Internet é o
                    atual berço dos memes e gírias que estão na boca da galera.
                    E cada dia fica mais difícil acompanhar as novidades que se
                    multiplicam na rede a uma grande velocidade.{" "}
                  </span>
                </div>
                <TextBookMark texto={"Conclusão"} />
                <div className="break-words flex flex-col gap-7">
                  <span>
                    Nesta pesquisa, problematizamos o uso de gírias no contexto
                    digital, nas redes sociais. Delimitamos como fonte as redes
                    Facebook e WhatsApp. A fim de verificar a importância do
                    conhecimento desse vocabulário específico para a interação,
                    as redes sociais vêm tomando proporções cada vez maiores, e,
                    com isso, a gama de indivíduos que delas faz uso se torna
                    mais ampla.
                  </span>
                  <span>
                    Essa amplitude de alcance que essas ferramentas têm, gera
                    influência na sociedade e isso se reflete na língua.
                    Aumentando o número de usuários das redes, assim, aumentando
                    a quantidade de falantes que usam os termos específicos que
                    nelas circulam. Ás gírias, se tornam, tarefa necessária aos
                    estudos linguísticos, os avanços tecnológicos que favorecem
                    a integração entre as sociedades não cessam.
                  </span>
                </div>
              </div>
              <div className="col-span-4 ">
                <div className="mb-4">
                  <CardProfileJeredy />
                </div>
                <div className="mb-4">
                  <div className="card w-[297px] h-[350px] shadow-lg shadow-black/20 rounded-lg ">
                    <div className="bg-[#27C080] w-full flex items-center px-3 h-[51px] rounded-tr-lg rounded-tl-lg">
                      <span className="text-white font-medium text-lg tracking-tight">
                        Mais posts de {PI.nome}
                      </span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3 mt-2">
                      {PostsUserOn.map(({ title, description, url }, index) => (
                        <CardPostsProfile
                          key={index}
                          description={description}
                          url={url}
                          title={title}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black h-10 w-full" />
      <div className="bg-zinc-800 h-10 w-full" />
      <footer className="bg-zinc-500 flex items-center justify-center p-2 text-white text-sm">
        © Todos os direitos reservados
      </footer>
    </>
  );
};

export default Home;
