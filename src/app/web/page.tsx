"use client";
import { soundData } from "@/soundData";
import { useSoundContext } from "@/context/soundContext";
import SoundCard from "./components/SoundCard";

export default function Home() {
  const { isMute, addSound } = useSoundContext();

  return (
    <>
      <div className=" max-w-[900px] grid grid-cols-2 md:grid-cols-4 mx-auto gap-8">
        {soundData.map((item, index) => (
          <SoundCard key={index} item={item} {...{ isMute, addSound }} />
        ))}
      </div>
    </>
  );
}
