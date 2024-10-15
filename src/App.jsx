import { Button } from "@/components/ui/button";
import useFetch from "./hook/useFetch";

export default function Home() {
  const { data, isLoading, error } = useFetch ("/data.json");

  return (
    <div>
      <div className=" relative">
        <img className=" absolute" src={data?.image.original} alt="" />
        <p className="text-center text-xl">{data?.genres[0]} - {data?.genres[1]} - {data?.genres[2]}</p>
        <p className="text-center text-xl">{data?.schedule.days} - {data?.schedule.time}</p>
        <p className="text-center text-xl">{data?.language}</p>
      </div>

      <h2 className="text-center text-xl">{data?.name}</h2>
      <p className="text-center text-xl">{data?.language}</p>
      <p className="text-center text-xl">{data?.rating.average}</p>

      <p className="text-center text-xl">{data?.summary}</p>

      <Button>
        <img src="/play.svg" alt="" />
        Play</Button>

      <p className="text-center text-xl">{data?._links.previousepisode.name}</p>
    </div>
  );
}