import { FEEDBACK_FORM } from "@/constants";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function Page() {
  return (
    <div className="prose-invert prose no-prose mx-auto">
      <div>
        <p>
          I was surprised by the poor quality of ambient noise apps available in
          the market. They either deliver low-quality sounds with noticeable
          gaps in the loops or impose extremely short time limits on listening.
          This is a real problem for me, given that I'm a developer who spends
          the majority of my time glued to the computer.
        </p>

        <p>
          which is why I decided create Calm Whisper. I hope you find it as
          useful as I have.
        </p>
        <p>
          If you have any suggestions, stumble upon a bug, or simply want to
          drop me a few kind words, you can get in touch using the{" "}
          <a
            className="hover:accent inline-flex items-center justify-center gap-1 underline-offset-4 hover:text-primary/90"
            href={FEEDBACK_FORM}
            target="_blank"
            rel="noreferrer"
          >
            feedback form <ArrowUpRightIcon className="h-3 w-3" />
          </a>{" "}
          or by opening an issue on{" "}
          <a
            className="hover:accent inline-flex items-center justify-center gap-1 underline-offset-4 hover:text-primary/90"
            href="https://github.com/lmssiehdev/calmwhisper"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowUpRightIcon className="h-3 w-3" />
          </a>
          .
        </p>
      </div>

      <div>
        <h3>Credits:</h3>
        <p>Icons credits go to https://icons8.com</p>
      </div>
    </div>
  );
}
