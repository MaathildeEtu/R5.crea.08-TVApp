import { Button } from "@/components/ui/button";
import useFetch from "./hook/useFetch";

export default function Home() {
  const { data, isLoading, error } = useFetch ("/data.json");

  return (
    <div className=" p-5 ">

      {/* Head */}
      <div className="relative overflow-hidden flex flex-col gap-2 justify-center items-center rounded-lg h-80">

        {/* Image */}
        <img className="w-full object-cover" src={data?.image.original} alt="" />
        {/* Fin Image */}

        {/* Cadre d'opacité */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-dark h-20"></div>
        {/* Fin Cadre d'opacité */}

        {/* Texte */}
        <div className="absolute bottom-4 left-6 flex flex-col items-start justify-start w-full z-10">
          <p className="text-md text-white">{data?.genres[0]} · {data?.genres[1]} · {data?.genres[2]}</p>
          <div className="flex flex-row gap-1">
            <p className="text-white">Release : </p>
            <p className="text-md text-white">{data?.schedule.days} - {data?.schedule.time}</p>
          </div>
        </div>
        {/* Fin Texte */}

      </div>
      {/* Fin Head */}

      {/* Contenu */}
      <div>
        <h2 className=" text-3xl font-bold">{data?.name}</h2>
        <p className=" text-xl">{data?.language}</p>
        <p className=" text-xl">{data?.rating.average}</p>

        <p className=" text-xl">{data?.summary}</p>

        <Button><img src="/play.svg" alt="" />Play</Button>

        <p className=" text-xl">{data?._links.previousepisode.name}</p>
      </div>
      {/* Fin Contenu */}

    </div>
  );
}