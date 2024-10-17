import { Button } from "@/components/ui/button";
import useFetch from "./hook/useFetch";

export default function Home() {
  const { data, isLoading, error } = useFetch ("/data.json");

  return (
    <div className=" p-5 ">

      {/* Head */}
      <div className="relative overflow-hidden flex flex-col gap-2 justify-center items-center rounded-2xl h-80">

        {/* Affiche Fond */}
        <img className="w-full object-cover" src={data?.image.original} alt="" />
        {/* Fin Affiche Fond */}

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
      <div className=" pt-2 flex flex-col gap-4">
            
        {/* Informations et Affiche */}
        <div className=" p-2 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Information */}
          <div className=" flex flex-col gap-4 col-span-2">

            {/* Title */}
            <div className=" flex flex-col">
              <h2 className=" text-3xl font-bold">{data?.name}</h2>
              <p className=" text-md font-light">{data?.language}</p>
              <p className=" text-md font-light">{data?.rating.average}/10</p>
            </div>
            {/* Fin Title */}

            {/* Description */}
            <div>
              <p className=" text-md font-semibold">Description : </p>
              <p className=" text-md">{data?.summary}</p>
            </div>
            {/* Fin Description */}

            {/* Visionnage */}
            <div>
              <p className=" text-md font-semibold">Or watching : </p>

              <div className=" flex flex-row gap-1">
                <p className=" text-md">Website : {data?.network.name},</p>
                <a href="{data?.network.country.officialSite}" className=" decoration-solid">Voir le site</a>
              </div>
              
              <div className=" flex flex-row gap-1">
                <p className=" text-md">{data?.network.country.name},</p>
                <p className=" text-md">({data?.network.country.code})</p>
              </div>
            </div>
            {/* Fin Visionnage */}
            
            {/* Button */}
            <Button size="default" display="flex">
          <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.875 8.64952C13.375 8.36084 13.375 7.63916 12.875 7.35048L1.625 0.855291C1.125 0.566615 0.5 0.92746 0.5 1.50481L0.5 14.4952C0.5 15.0725 1.125 15.4334 1.625 15.1447L12.875 8.64952Z" stroke="white"/>
          </svg>
          Play
      </Button>
            {/* Fin Button */}

            {/* Episode */}
            <div>
              <p className=" text-md font-semibold">Previous episode : </p>
              <Button variant="link">{data?._links.previousepisode.name}</Button>
            </div>
            {/* Fin Episode */}
          </div>
          {/* Fin Information */}


          {/* Affiche */}
          <div className=" rounded-lg overflow-hidden">
            <img className="w-full object-cover" src={data?.image.original} alt="" />
          </div>
          {/* Fin Affiche */}
        </div>
        {/* Fin Informations et Affiche */}
        
      </div>
      {/* Fin Contenu */}

    </div>
  );
}