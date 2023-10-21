"use client";

import { useSoundContext } from "@/context/soundContext";
import classNames from "classnames";
import ReactHowler from "react-howler";
import { Slider } from "./VolumeSlider";
import { useState } from "react";

type Props = {
  item: any;
};

export default function SoundCard({ item }: Props) {
  const { name, sound, icon } = item;
  const { currentSoundsPlaying, dispatch, isMute } = useSoundContext();

  const handleIconClick = () => {
    dispatch({ type: "TOGGLE_SOUND", name });
  };

  const handleVolumeChange = (volume: number) => {
    dispatch({ type: "UPDATE_VOLUME", name, volume });
  };

  return (
    <>
      <div className="select-none flex flex-col p-4 justify-center items-center">
        <div className="w-[65px]">
          <button
            className={classNames(
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
          className={classNames(
            { invisible: !currentSoundsPlaying[name] },
            "w-full pt-3 max-w-[100px] h-10"
          )}
        >
          {currentSoundsPlaying[name]?.isPlaying && (
            <>
              <Slider
                value={[currentSoundsPlaying[name]?.volume]}
                onValueChange={(v) => handleVolumeChange(v[0])}
                defaultValue={[currentSoundsPlaying[name]?.volume]}
                className="my-1"
              />
              <ReactHowler
                playing={!isMute}
                src={sound}
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
