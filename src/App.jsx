import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import useFetch from "./hook/useFetch";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useState } from "react";

export default function Home() {
  const [ url, setUrl ] = useState(" Under the dome ")
  const { data, isLoading, error } = useFetch(`https://api.tvmaze.com/singlesearch/shows?q=${url}&embed[]=episodes&embed[]=cast&embed[]=seasons`);
  console.log(data)

  const regex = /(<([^>]+)>)/gi;

  const handlerSearch=(e) => {
    e.preventDefault() ;
    let form = e.target ;
    let url = new FormData(form).get('search') ;
    // console.log(value) ;
    setUrl(url)
  } 

  return (
    <>
      {isLoading && <p>loading....</p>}
      {data && (
        <div>

          {/* Content*/}
          <div className=" bg-fond p-5 pb-8 md:pr-14 md:pt-14 md:pl-14 xl:pr-44 xl:pl-44 flex flex-col gap-4 ">

            {/* Nav */}
            <div className=" bg-white p-6 rounded-xl">
              <div className=" flex justify-between items-center">

                <div className=" flex flex-row gap-2 items-end">
                  <img className="h-12" src="/logo-app.png" alt="" />
                  <p className=" text-xl font-extralight">CineStudio</p>
                </div>

                <form onSubmit={handlerSearch} className="flex items-center">
                  <input name="search" type="text" placeholder="Rechercher..." className="pt-2 pb-2 pr-4 pl-4 rounded-l-xl border-2 border-gray-100 focus:outline-none"/>
                  <button type="submit" className="pt-2 pb-2 pr-4 pl-4 bg-blue-400 border-2 border-blue-400 text-white rounded-r-xl">Search</button>
                </form>
              </div>
            </div>

            {/* Information */}
            <div className=" bg-white p-6 rounded-xl">

              {/* Head */}
              <div className="relative overflow-hidden flex flex-col gap-2 justify-center items-center rounded-xl h-80">
                {/* Affiche Fond */}
                <img
                  className="w-full object-cover"
                  src={data?.image?.original}
                  alt=""
                />
                {/* Fin Affiche Fond */}

                {/* Cadre d'opacité */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-dark h-20"></div>
                {/* Fin Cadre d'opacité */}

                {/* Texte */}
                <div className="absolute bottom-4 left-6 flex flex-col items-start justify-start w-full z-10 gap-2">
                <div className="flex flex-row gap-1 flex-wrap">
                {data?.genres.map((tag) => {
                  return <Badge variant="outline">{tag}</Badge>
                })}
                </div>
                  <div className="flex flex-row gap-1">
                    <p className="text-white">Release : </p>
                    <p className="text-light text-white">
                      {data?.schedule.days} - {data?.schedule.time}
                    </p>
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
                  <div className=" flex flex-col gap-4 col-span-2 justify-between">
                    
                    {/* Top */}
                    <div className=" flex flex-col gap-8">
                      {/* Title */}
                      <div className=" flex flex-col">
                        <h2 className=" text-5xl font-bold">{data?.name}</h2>
                        <p className=" text-xl font-light">{data?.language}</p>
                        <p className=" text-light font-light">
                          {data?.rating.average}/10
                        </p>
                      </div>
                      {/* Fin Title */}

                      {/* Description */}
                      <div>
                        <p className=" text-light font-semibold">Description : </p>
                        <p className=" text-light">{data?.summary.replace(regex, "")}</p>
                      </div>
                      {/* Fin Description */}

                      {/* Visionnage */}
                      <div>
                        <p className=" text-light font-semibold">Or watching : </p>

                        <div className=" flex flex-row gap-1">
                          <p className=" text-light">Website : {data?.network.name},</p>
                          <a
                            href="{data?.network.country.officialSite}"
                            className=" decoration-solid"
                          >
                            Voir le site
                          </a>
                        </div>

                        <div className=" flex flex-row gap-1">
                          <p className=" text-light">{data?.network.country.name},</p>
                          <p className=" text-light">({data?.network.country.code})</p>
                        </div>
                      </div>
                      {/* Fin Visionnage */}

                      {/* Episode */}
                      <div>
                        <p className=" text-light font-semibold">Previous episode : </p>
                        <Button variant="link">
                          {data?._links.previousepisode.name}
                        </Button>
                      </div>
                      {/* Fin Episode */}
                    </div>

                    {/* Bottom */}
                    <div>
                      {/* Buttons */}
                      <div className=" flex flex-row justify-between gap-2">
                        <Button size="default" variant="default" className="w-full">
                          <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.875 8.64952C13.375 8.36084 13.375 7.63916 12.875 7.35048L1.625 0.855291C1.125 0.566615 0.5 0.92746 0.5 1.50481L0.5 14.4952C0.5 15.0725 1.125 15.4334 1.625 15.1447L12.875 8.64952Z" stroke="white" />
                          </svg>Play
                        </Button>

                        <Button size="default" variant="outline">
                          Épisode
                        </Button>

                        <Button size="default" variant="outline">
                          Cast
                        </Button>
                    </div>
                    </div>

                  </div>
                  {/* Fin Information */}

                  {/* Affiche */}
                  <div className=" rounded-lg overflow-hidden">
                    <img
                      className="w-full object-cover"
                      src={data?.image?.original}
                      alt=""
                    />
                  </div>
                  {/* Fin Affiche */}
                </div>
                {/* Fin Informations et Affiche */}

              </div>
              {/* Fin Contenu */}
            </div>

            {/* Episode */}
            <div className=" bg-white pr-6 pl-6 pt-10 pb-10 rounded-xl">
              {/* Carousel */}
              <div className=" mr-10 ml-10 lg:mr-16 lg:ml-16">
                <h3 className=" text-center font-bold text-3xl pt-6 pb-6">Episode</h3>
                <Carousel>
                  <CarouselContent className=" items-stretch">
                    {/* Episode */}
                      {/* {console.log(data?._embedded.episodes[0].name)} */}
                      {data?._embedded.episodes.map((film) => {
                        return (
                          <CarouselItem className="lg:basis-1/3">
                            <Card className="h-full flex flex-col justify-between">
                              <CardHeader>
                                <img className="h-28 w-full object-cover overflow-hidden rounded-t-xl" src={film.image?.original} alt="Photo episode"/>
                                <div className=" flex flex-row gap-1 md:flex-col md:gap-0">
                                  <CardDescription>Season : {film.season}</CardDescription>
                                  <CardDescription>Episode : {film.number}</CardDescription>
                                </div>
                                <CardTitle>{film.name}</CardTitle>
                                <CardDescription>
                                  {film.summary.replace(regex, "")}
                                </CardDescription>
                                <p>{film.rating.average}/10</p>
                              </CardHeader>
                              <CardFooter>
                                <Button size="default" display="flex" className=" w-full">
                                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.875 8.64952C13.375 8.36084 13.375 7.63916 12.875 7.35048L1.625 0.855291C1.125 0.566615 0.5 0.92746 0.5 1.50481L0.5 14.4952C0.5 15.0725 1.125 15.4334 1.625 15.1447L12.875 8.64952Z" stroke="white"/></svg> Play
                                </Button>
                              </CardFooter>
                            </Card>
                          </CarouselItem>
                        );
                      })}
                    {/* Fin Episode */}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
              {/* Fin Carousel */}
            </div>
            
            {/* Cast */}
            <div className=" bg-white pr-6 pl-6 pt-10 pb-10 rounded-xl">
              {/* Cast */}
              <div>
                <h3 className=" text-center font-bold text-3xl pt-6 pb-6">Cast Member</h3>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:flex-row">
                  {data?._embedded.cast.map((people) => {
                    return (
                      <Card>
                        <CardHeader>
                          <div className="flex flex-row gap-2">
                            <img
                              className="h-40 w-full object-cover object-top overflow-hidden rounded-lg"
                              src={people.person.image?.original}
                              alt="Photo personne"
                            />
                            <img
                              className="h-40 w-full object-cover object-top overflow-hidden rounded-lg"
                              src={people.character.image?.original}
                              alt="Photo personnage"
                            />
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription><span className="font-bold">{people.person.name}</span> dans le rôle de <span className="font-bold">{people.character.name}</span> </CardDescription>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
              {/* Fin Cast */}
            </div>
          </div> 
          
          {/* Footer */}
          <div className=" bg-black p-8">
              <p className=" text-white text-center">©CineStudio - Tous droits réservés - 2024</p>

              <ul className=" flex flex-row gap-2 justify-center items-center">
                <li><a className=" text-white text-center font-light" href="">Création par l'Agence Carolane et Mathilde</a></li>
                <li><a className=" text-white text-center font-light" href="">|</a></li>
                <li><a className=" text-white text-center font-light" href="">Mentions légales</a></li>
                <li><a className=" text-white text-center font-light" href="">|</a></li>
                <li><a className=" text-white text-center font-light" href="">Cookies</a></li>
                <li><a className=" text-white text-center font-light" href="">|</a></li>
                <li><a className=" text-white text-center font-light" href="">Politique de confidentialité</a></li>
              </ul>
          </div>

        </div>
      )}
    </>
  );
}
