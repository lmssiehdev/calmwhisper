import { FEEDBACK_FORM } from "@/constants";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function Page() {
  return (
    <div className="prose-invert prose no-prose mx-auto">
      <div>
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
        <p>
          Initial sounds sourced from{" "}
          <a
            href="https://github.com/rafaelmardojai/blanket/"
            target="_blank"
            rel="noreferrer"
          >
            Blanket
          </a>
          , sound licensing details in their{" "}
          <a
            href="https://github.com/rafaelmardojai/blanket/blob/master/SOUNDS_LICENSING.md"
            target="_blank"
            rel="noreferrer"
          >
            repo
          </a>
          .
        </p>
      </div>
    </div>
  );
}
