import * as Slider from "@radix-ui/react-slider";
import { useEffect } from "react";

type Props = {
  defaultValue: number;
  handleValueChange: (volume: number) => void;
};

export default function VolumeSlider({
  defaultValue,
  handleValueChange,
}: Props) {
  return (
    <form>
      <Slider.Root
        className="SliderRoot"
        defaultValue={[defaultValue]}
        max={1}
        min={0}
        step={0.1}
        aria-label="Volume"
        onValueChange={(value) => handleValueChange(value[0])}
      >
        <Slider.Track className="SliderTrack">
          <Slider.Range className="SliderRange" />
        </Slider.Track>
        <Slider.Thumb className="SliderThumb" />
      </Slider.Root>
    </form>
  );
}
