import React, { Suspense } from "react";
import StoriesHome from "./stories";
import { StoriesHomeSkeletons } from "../skeletons";

export default function HomePage() {
  const storiesData = [
    {
      id: 1,
      userName: "sarahval1514",
      userAvatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quantity: 3,
      view: 2,
      bestfriend: [2, 3],
    },
    {
      id: 2,
      userName: "alexsan15",
      userAvatar:
        "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quantity: 4,
      view: 1,
      bestfriend: [2, 3],
    },
    {
      id: 3,
      userName: "mafersh4",
      userAvatar:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quantity: 3,
      view: 3,
      bestfriend: [2, 3],
    },
    {
      id: 4,
      userName: "mario_rbyhjhjhkjkjkjkjkjkj",
      userAvatar:
        "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quantity: 6,
      view: 0,
      bestfriend: [1, 4],
    },
    {
      id: 5,
      userName: "sergio-stp15",
      // userAvatar:
      //   "https://images.pexels.com/photos/1906157/pexels-photo-1906157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quantity: 3,
      view: 2,
      bestfriend: [2, 3],
    },
    {
      id: 6,
      userName: "carlostapiasm",
      userAvatar:
        "https://images.pexels.com/photos/733767/pexels-photo-733767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quantity: 3,
      view: 0,
      bestfriend: [1],
    },
    {
      id: 7,
      userName: "sam_flores15",
      userAvatar:
        "https://images.pexels.com/photos/1194806/pexels-photo-1194806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quantity: 3,
      view: 0,
      bestfriend: [2, 3],
    },
    {
      id: 8,
      userName: "taylor-12",
      userAvatar:
        "https://images.pexels.com/photos/4255392/pexels-photo-4255392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quantity: 3,
      view: 0,
      bestfriend: [2, 3],
    },
    {
      id: 9,
      userName: "danny80sd",
      userAvatar:
        "https://images.pexels.com/photos/16373346/pexels-photo-16373346/free-photo-of-moda-mujer-camisa-flor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quantity: 5,
      view: 5,
      bestfriend: [2, 3],
    },
    {
      id: 10,
      userName: "smpay97",
      userAvatar:
        "https://images.pexels.com/photos/19601923/pexels-photo-19601923/free-photo-of-moda-mujer-verano-jardin.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quantity: 3,
      view: 3,
      bestfriend: [2, 3],
    },
  ];
  return (
    <>
      <div className="flex sm:max-w-[620px] md:w-full w-screen sm:mt-5 mt-14 overflow-x-auto px-2 sm:mx-auto">
        {storiesData.map((storyData) => (
          <span key={storyData.id}>
            <Suspense fallback={<StoriesHomeSkeletons />}>
              <StoriesHome
                userAvatar={storyData.userAvatar}
                userName={storyData.userName}
                quantity={storyData.quantity}
                view={storyData.view}
                bestfriend={storyData.bestfriend}
              />
            </Suspense>
          </span>
        ))}
      </div>
      <div className="flex flex-col my-8 w-full sm:items-center space-y-4">
        <div className="sm:w-[450px] w-screen">
          <div className="flex flex-row justify-between">
            <div className="flex pl-3 flex-row space-x-2 ">
              <canvas className="w-10 h-10 bg-zinc-200 rounded-full animate-pulse"></canvas>
              <div className="flex flex-col py-1 space-y-1">
                <span className="bg-zinc-200 h-3 w-28 rounded-lg animate-pulse"></span>{" "}
                <span className="bg-zinc-200 h-3 w-20 rounded-lg animate-pulse"></span>
              </div>
            </div>
            <div className="flex py-2">
              <span className="bg-zinc-200 h-3 w-10 rounded-lg animate-pulse"></span>
            </div>
          </div>
          <div className="bg-zinc-200 w-full h-[450px] my-2 rounded-md animate-pulse"></div>
        </div>
        <div className="w-[450px]">
          <div className="flex flex-row justify-between">
            <div className="flex pl-3 flex-row space-x-2 ">
              <canvas className="w-10 h-10 bg-zinc-200 rounded-full animate-pulse"></canvas>
              <div className="flex flex-col py-1 space-y-1">
                <span className="bg-zinc-200 h-3 w-28 rounded-lg animate-pulse"></span>{" "}
                <span className="bg-zinc-200 h-3 w-20 rounded-lg animate-pulse"></span>
              </div>
            </div>
            <div className="flex py-2">
              <span className="bg-zinc-200 h-3 w-10 rounded-lg animate-pulse"></span>
            </div>
          </div>
          <div className="bg-zinc-200 w-full h-[450px] my-2 rounded-md animate-pulse"></div>
        </div>
      </div>
    </>
  );
}
