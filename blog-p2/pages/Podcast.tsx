import { CardPostsProfile, CardProfileCLarissa } from "components/Card";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../components/Header";
import IconHome from "/public/icons/home.svg";
// import PoadCast from "/public/poadcast/poadcast-luiz4.mp3";
import { ProfileInfoClarissa } from "utils/profile-info";
import { PostsUserOn } from "utils/posts-user-on";
import { TextBookMark } from "components/DivMarkedText";
import { Player } from "components/Player";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className="bg-banner2 h-[300px] flex flex-col justify-center gap-5 pl-28  text-white tracking-wider">
        <span className="text-5xl ">História da Internet</span>
        <span className="text-3xl font-extralight">
          O início de uma nova era
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
                <span>5min de Podcast </span>
                <span>21/05/2022 - às 12:09</span>
              </div>
              <div className="col-span-8">
                <TextBookMark texto={"Podcast - História da Internet"} />
                
                <Player
                  duration={406}
                  name="PodCast - História da Internet"
                  url="https://res.cloudinary.com/dmv19qtjb/video/upload/v1654775051/WhatsApp_Audio_2022-06-09_at_08.18.02_gx4wu4.mp3"
                />
              </div>
              <div className="col-span-4 ">
                <div className="mb-4">
                  <CardProfileCLarissa />
                </div>
                <div className="mb-4">
                  <div className="card w-[297px] h-[350px] shadow-lg shadow-black/20 rounded-lg ">
                    <div className="bg-[#27C080] w-full flex items-center px-3 h-[51px] rounded-tr-lg rounded-tl-lg">
                      <span className="text-white font-medium text-lg tracking-tight">
                        Mais posts de {ProfileInfoClarissa.nome}
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
