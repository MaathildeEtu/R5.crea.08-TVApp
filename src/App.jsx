import { Button } from "@/components/ui/button";
import useFetch from "./hook/useFetch";

export default function Home() {
  const { data, isLoading, error } = useFetch ("/data.json");

  return (
    <div className=" p-5 ">
      <div className=" relative overflow-hidden flex flex-col gap-2 pt-36 p-6 justify-center items-center rounded-lg">
        <img className=" absolute -z-10" src={data?.image.original} alt="" />

        <div className=" flex flex-col items-start justify-start w-full">
          <p className=" text-md">{data?.genres[0]} · {data?.genres[1]} · {data?.genres[2]}</p>
          <div className=" flex flex-row gap-1">
            <p>Release : </p>
            <p className=" text-md">{data?.schedule.days} - {data?.schedule.time}</p>
          </div>
        </div>
          
      </div>

      <div>
        <h2 className=" text-xl">{data?.name}</h2>
        <p className=" text-xl">{data?.language}</p>
        <p className=" text-xl">{data?.rating.average}</p>

        <p className=" text-xl">{data?.summary}</p>

        <Button>
          <img src="/play.svg" alt="" />
          Play</Button>

        <p className=" text-xl">{data?._links.previousepisode.name}</p>
      </div>
    </div>
  );
}