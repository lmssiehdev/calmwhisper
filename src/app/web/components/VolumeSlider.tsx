import * as Slider from "@radix-ui/react-slider";
import { useEffect } from "react";

type Props = {
  value: number;
  handleValueChange: (volume: number) => void;
};

export default function VolumeSlider({ value, handleValueChange }: Props) {
  return (
    <form>
      <Slider.Root
        className="SliderRoot"
        value={[value]}
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
