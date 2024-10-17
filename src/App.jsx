import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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

      <Button size="default" display="flex">
          <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.875 8.64952C13.375 8.36084 13.375 7.63916 12.875 7.35048L1.625 0.855291C1.125 0.566615 0.5 0.92746 0.5 1.50481L0.5 14.4952C0.5 15.0725 1.125 15.4334 1.625 15.1447L12.875 8.64952Z" stroke="white"/>
          </svg>
          Play
      </Button>

      <Button variant="link">{data?._links.previousepisode.name}</Button>
    </div>
  );
}