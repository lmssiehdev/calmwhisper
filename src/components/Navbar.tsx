import { ProductHunt } from "@/components/ProductHunt";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <div className="flex justify-between text-white py-4">
        <h1 className="text-lg font-bold">
          <Link href="/">Calm Whisper</Link>
        </h1>
        <nav>
          <ul className="flex gap-4 items-center">
            <li>
              <ProductHunt />
            </li>
            <li>
              <a
                className={cn(
                  buttonVariants({ variant: "secondary", size: "sm" }),
                  "flex items-center gap-2"
                )}
                href="https://tally.so/r/npegyE"
                target="_blank"
                rel="noreferrer"
              >
                Feedback <ArrowUpRightIcon className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "flex items-center gap-2"
                )}
                href="https://github.com/lmssiehdev/calmwhisper"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="text-white h-4 w-4 "
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  data-view-component="true"
                >
                  <path
                    d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
                    fill="currentColor"
                  ></path>
                </svg>{" "}
                Star on GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
