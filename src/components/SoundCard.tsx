"use client";

import { Slider } from "@/components/ui/Slider";
import { useSoundContext } from "@/context/soundContext";
import { cn } from "@/lib/utils";
import { soundData } from "@/soundData";
import ReactHowler from "react-howler";

type Props = {
  item: any;
};

export default function SoundGrid() {
  return (
    <>
      <div className=" max-w-[900px] grid grid-cols-2 md:grid-cols-4 mx-auto gap-8">
        {soundData.map((item, index) => (
          <SoundCard key={index} item={item} />
        ))}
      </div>
    </>
  );
}

export function SoundCard({ item }: Props) {
  const { name, sound, icon } = item;
  const { currentSoundsPlaying, dispatch, isMute, handleVolumeChange } =
    useSoundContext();

  const handleIconClick = () => {
    dispatch({ type: "TOGGLE_SOUND", name });
  };

  return (
    <>
      <div className="select-none flex flex-col p-4 justify-center items-center">
        <div className="w-[65px]">
          <button
            className={cn(
              {
                "opacity-60": !currentSoundsPlaying[name]?.isPlaying,
              },
              "inline-block w-full cursor-pointer"
            )}
            onClick={handleIconClick}
          >
            {/*             
            // Todo: render svg instead of an img which will enable changing with the fill property
            */}
            <img
              className="w-auto h-auto filter-white color-white"
              src={icon}
              alt={name}
              draggable={false}
            />
          </button>
        </div>
        <div
          className={cn(
            { invisible: !currentSoundsPlaying[name] },
            "w-full pt-3 max-w-[100px] h-10"
          )}
        >
          {currentSoundsPlaying[name]?.isPlaying && (
            <>
              <Slider
                value={[currentSoundsPlaying[name]?.volume]}
                onValueChange={(v) => handleVolumeChange(name, v[0])}
                defaultValue={[currentSoundsPlaying[name]?.volume]}
                className="my-1"
                min={0}
                max={1}
                step={0.1}
              />
              <ReactHowler
                playing={!isMute}
                src={sound}
                html5={true}
                volume={currentSoundsPlaying[name]?.volume}
                loop={true}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}
