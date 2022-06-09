import {
  CardCuriosidades,
  CardPostsProfile,
  CardProfile,
} from "components/Card";
import { TextBookMark } from "components/DivMarkedText";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Invite } from "utils/invite";
import { Header } from "../components/Header";
import IconHome from "/public/icons/home.svg";
import SmartHome from "/public/images/imagem-iot.svg";
import { ProfileInfo as PI } from "utils/profile-info";
import { PostsUserOn } from "utils/posts-user-on";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className="bg-banner h-[300px] flex flex-col justify-center gap-5 pl-28  text-white tracking-wider">
        <span className="text-5xl ">Internet das Coisas</span>
        <span className="text-3xl font-extralight">É como nós pensamos?</span>
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
            <Link href={""}>Internet das Coisas</Link>
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
                    Ao falarmos de internet das coisas (IoT) logo nos vem a
                    mente algo totalmente futurista e fora de nosso alcance,
                    porém, este pensamento é invalido, pois, esta tecnologia já
                    está presente em nosso dia a dia, em diversos dispositivos,
                    como por exemplo: a televisão que está em sua casa ou até
                    mesmo o relógio que você utiliza em seu pulso. Mas não são
                    todos os dispositivos que podem ser considerados IoT, a
                    certas características que são totalmente necessárias para
                    que possam estar a receber esse título.
                  </span>
                  <span>
                    O termo internet das coisas foi inventado pelo engenheiro
                    Kevin Ashton, em 1999, durante uma reunião de negócios com
                    executivos da empresa Procter {"&"} Gamble. Este termo foi
                    apresentado como um marco revolucionário, sua proposta era
                    de que ao invés de etiquetar manualmente todos os produtos
                    da empresa eles poderiam utilizar uma tecnologia que
                    capturava e armazenava dados por meio de uma rádio
                    frequência (RFID) para etiquetar os produtos
                    eletronicamente.
                  </span>
                </div>
                <TextBookMark texto={"Como funciona um dispositivo IoT? "} />
                <div className="break-words flex flex-col gap-5">
                  <span>
                    Considera-se um dispositivo IoT o qual está integrado um
                    sistema eletrônico capaz de realizar a comunicação com um
                    outro sistema por meio de frequências (sem a utilização de
                    fios), de modo que consiga captar e enviar informações. Um
                    exemplo cabível é o smartwatch, um relógio inteligente que
                    interage com o smartphone, por vezes utilizando um sistema
                    operacional responsável por esta função, por meio de uma
                    conexão bluetooth.
                  </span>
                  <div className="flex justify-center py-4">
                    <Image
                      src={SmartHome}
                      alt={"Foto de uma casa inteligente"}
                    />
                  </div>
                  <span>
                    Outro exemplo que podemos citar é Smart light, uma lâmpada
                    inteligente que se conecta com o smartphone via WI-FI, onde
                    pode-se habilitar, o controle para ativar, desativar,
                    modificar a cor e aumentar ou diminuir a intensidade
                    luminosa. Também podemos citar a opção de Smart TV´s,
                    equipamento que permite a visualização de aplicativos de
                    streaming via internet sem a utilização de cabos de rede. Na
                    atual conjuntura, sendo o dispositivo mais adquirido pela
                    população brasileira.
                  </span>
                </div>
                <TextBookMark texto={"Existe desvantagem?"} />
                <div className="break-words flex flex-col gap-7">
                  <span>
                    Persiste uma dúvida que perturba a comunidade que aderiu ou
                    que pretende fazer a adesão a estes dispositivos, que
                    consiste no grau de segurança proporcionada durante o
                    tráfego de dados. Embora a tecnologia seja promissora,
                    necessitam-se atribuir obstáculos, baseados na adição de
                    camadas protetivas, persuadindo o usuário à adentrar nestas
                    novas tendências. Uma das incertezas sobre a segurança,
                    refere-se ao risco de invasões ou ataques cibernéticos com
                    captura de dados pessoais e vírus de caráter maliciosos.
                  </span>
                </div>
                <TextBookMark texto={"Conclusão"} />
                <div className="break-words flex flex-col gap-7">
                  <span>
                    Após termos feito a leitura dos tópicos acima, podemos
                    chegar à conclusão de que a internet das coisas encontrasse
                    presente nos tempos atuais, em diversos dispositivos, e que
                    com certeza irá evoluir ainda mais. A tecnologia é muito
                    atrativa, e promete alterar totalmente o patamar de
                    interação entre os dispositivos. Agregando o conforto e a
                    praticidade, facilitando o dia a dia da população em geral.
                    Porém mesmo sabendo que é algo que tem como propósito
                    facilitar as nossas vidas, temos que ter um certo cuidado,
                    pois não sabemos ao certo se é uma tecnologia totalmente
                    segura.
                  </span>
                </div>
                <TextBookMark texto={"Talvez você se interesse"} />
                <div className="py-3 flex flex-row justify-around gap-10 mb-7 h-[300px] ">
                  {Invite.map(({ description, imagem, title, url }, index) => {
                    return (
                      <CardCuriosidades
                        key={index}
                        description={description}
                        image={imagem}
                        title={title}
                        url={url}
                      />
                    );
                  })}
                </div>
                <div className="flex flex-col w-full gap-1 text-[10px]">
                  <Link
                    href={
                      "https://www.copeltelecom.com/site/blog/4-exemplos-de-internet-das-coisas/"
                    }
                  >
                    <div className="flex gap-1 cursor-pointer">
                      <span className="font-semibold"> Fonte: </span>{" "}
                      <span className="underline underline-offset-2">
                        4 exemplos de internet das coisas
                      </span>
                    </div>
                  </Link>
                  <Link
                    href={
                      "https://www.totvs.com/blog/inovacoes/aplicacoes-da-internet-das-coisas/"
                    }
                  >
                    <div className="flex gap-1 cursor-pointer">
                      <span className="font-semibold"> Fonte: </span>
                      <span className="underline underline-offset-2">
                        Internet das Coisas: o que é, surgimento, aplicações e
                        impactos
                      </span>
                    </div>
                  </Link>
                  <Link
                    href={
                      "https://canaltech.com.br/internet/A-Internet-das-Coisas-das-origens-ao-futuro/"
                    }
                  >
                    <div className="flex gap-1 cursor-pointer">
                      <span className="font-semibold"> Fonte: </span>{" "}
                      <span className="underline underline-offset-2">
                        A Internet das Coisas: das origens ao futuro
                      </span>
                    </div>
                  </Link>
                  <Link
                    href={
                      "http://finep.gov.br/noticias/todas-noticias/4446-kevin-ashton-entrevista-exclusiva-com-o-criador-do-termo-internet-das-coisas"
                    }
                  >
                    <div className="flex gap-1 cursor-pointer">
                      <span className="font-semibold"> Fonte: </span>
                      <span className="underline underline-offset-2">
                        Kevin Ashton – entrevista exclusiva com o criador do
                        termo “Internet das Coisas”
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-span-4 ">
                <div className="mb-4">
                  <CardProfile />
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
