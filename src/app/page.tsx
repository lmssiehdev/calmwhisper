import Navbar from "@/components/Navbar";
import {
  AdjustmentsHorizontalIcon,
  ArrowSmallRightIcon,
  BuildingLibraryIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import AccordionEle from "../components/AccordianEle";

const features = [
  {
    icon: () => (
      <div className="inline-flex bg-teal-200 text-teal-600 rounded">
        <BuildingLibraryIcon className="h-14 m-4" />
      </div>
    ),
    title: "Endless Soundscape Exploration.",
    description:
      // "Dive into a wide variety of ambient sounds in our library, from nature sounds to white noise and beyond. With a wide selection of sounds to choose from, you'll always find something new to discover and create the perfect sound environment for any mood or activity.",
      "Explore the depths of sound, from nature to white noise and beyond, with our wide variety of ambient sounds in our library.",
  },
  {
    icon: () => (
      <div className="inline-flex bg-green-200 text-green-600 rounded">
        <AdjustmentsHorizontalIcon className="h-14 m-4" />
      </div>
    ),
    title: "Create Your Own Sound Paradise",
    description:
      "mix and layer different ambient sounds to make a personalized soundscape that's perfect for you, and save it for easy access and playback at any time.",
  },
  {
    icon: () => (
      <div className="inline-flex bg-amber-200 text-amber-600 rounded">
        <ClockIcon className="h-14 m-4" />
      </div>
    ),
    title: "Sound Sleep, Soundless Dreams",
    description:
      "Set a timer for your ambient sound and fall asleep without any worries, our timer feature will turn off the sound at the time you set for a peaceful night's sleep. [coming soon]",
  },
];

export default function Home() {
  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <Navbar />
      </div>
      <header className="my-16 text-center overflow-hidden border-b-4 border-solid border-orange-500">
        <h1 className=" text-3xl md:leading-snug font-bold md:text-5xl ">
          Escape the Noise,
          <br /> Create your own Soundscape.
        </h1>
        {/* <p className="my-8 mx-auto max-w-[300px] md:max-w-[600px]">
          Mix and match high-quality nature sounds to create your perfect
          ambiance
        </p> */}
        <Link
          href="/web"
          className="mx-auto my-12 cursor-pointer inline-flex items-center gap-2 rounded bg-orange-500 hover:bg-orange-400 hover:shadow-md font-bold  py-3 px-4 text-white shadow-sm shadow-gray-800"
        >
          Get Started <ArrowSmallRightIcon className="h-5 w-5" />
        </Link>
        <div className="relative max-w-[400px] h-[600px] overflow-hidden rounded-t-3xl border-4 border-b-0 border-orange-500 border-solid mx-auto">
          <Image
            src="/images/mobile_ss.png"
            alt="preview"
            className="object-cover object-top"
            fill
          />
        </div>
      </header>
      <section className="my-40 max-w-[1200px] mx-auto">
        <h2 className="pb-10 text-4xl font-bold text-center">Features</h2>
        <div className="">
          <div className="mx-auto max-w-[500px] md:max-w-none md:grid grid-cols-3 gap-4">
            {features.map(({ icon, title, description }) => (
              <div key={title} className="py-10">
                <div className="md:flex justify-center mx-auto">{icon()}</div>
                <div className="md:text-center">
                  <h3 className="font-bold text-xl pb-2 pt-5">{title}</h3>
                  <p className="text-gray-200">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <AccordionEle />
      <Footer />
    </>
  );
}
