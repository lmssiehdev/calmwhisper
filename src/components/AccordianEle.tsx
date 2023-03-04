"use client";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

export default function AccordionEle() {
  const data = [
    {
      title: "Calm Whisper for a productive workday",
      content:
        "Calm Whisper is the perfect app to help you stay calm and composed during stressful workdays. Whether you need to focus on an important project, meet a tight deadline, or handle a difficult client, Calm Whisper has got you covered. With its carefully curated selection of ambient sounds, it helps create a calm and focused environment, enabling you to tackle even the most challenging work tasks with ease. Try it today and experience the power of ambient noise for increased productivity and reduced stress at work.",
    },
    {
      title: "Calm Whisper for creating a calming home environment",
      content:
        "Make your home a peaceful and relaxing haven with Calm Whisper. This ambient noise app is designed to help you unwind and de-stress after a long day. Whether you want to read a book, take a nap, or simply relax, Calm Whisper's soothing sounds can help you achieve a deep state of relaxation and inner peace. From rainforest sounds to ocean waves, from white noise to pink noise, Calm Whisper has a wide range of ambient sounds to choose from. Download Calm Whisper today and start enjoying the benefits of ambient noise for relaxation and stress relief.",
    },
    {
      title: "Calm Whisper for stress-free studying",
      content:
        "Study smarter, not harder, with Calm Whisper. This ambient noise app is designed to enhance your study sessions and help you retain more information. By creating a calm and focused environment, Calm Whisper can help you stay concentrated and focused, reducing distractions and improving your memory and recall. Whether you're studying for an exam, preparing for a presentation, or working on a research paper, Calm Whisper can help you achieve your academic goals. Try it today and experience the power of ambient noise for enhanced learning and academic success.",
    },
    {
      title: "Calm Whisper for peaceful travels",
      content:
        "Traveling can be stressful, but Calm Whisper can help you relax and recharge during long journeys. Whether you're taking a road trip, flying to a new destination, or riding on a train, Calm Whisper's ambient sounds can help you escape the noise and commotion of travel and find a sense of inner calm. With sounds like airplane cabin, train ride, or even city ambiance, Calm Whisper offers a variety of ambient sounds that can help you feel more at ease while on the go. Download Calm Whisper today and experience the soothing power of ambient noise for a more enjoyable travel experience.",
    },
    {
      title: "Calm Whisper for relaxation and tranquility",
      content:
        "Experience deep relaxation and inner peace with Calm Whisper. This ambient noise app is designed to help you let go of stress and tension and achieve a state of profound relaxation. Whether you want to meditate, do yoga, or simply unwind after a long day, Calm Whisper's soothing sounds can help you find inner peace and tranquility. With sounds like gentle rain, ocean waves, or forest birds, Calm Whisper offers a wide range of ambient sounds to suit your relaxation needs. Try it today and discover the transformative power of ambient noise for relaxation and stress relief.",
    },
    {
      title: "Calm Whisper for a restful night's sleep",
      content:
        "Say goodbye to insomnia and restlessness with Calm Whisper. This ambient noise app is designed to help you fall asleep quickly and soundly, so you can wake up feeling refreshed and rejuvenated. With sounds like white noise, pink noise, or even ASMR, Calm Whisper can help mask unwanted background noise and create a calm and soothing sleep environment. Whether you have trouble falling asleep or staying asleep, Calm Whisper can help you get the rest you need to feel your best. Download Calm Whisper today and experience the power of ambient noise for a better night's sleep.",
    },
    {
      title: "Why Calm Whisper is the key to inner peace and focus.",
      content:
        "Calm Whisper works by harnessing the power of ambient noise to help you relax, focus, and sleep better. Scientific studies have shown that ambient noise can have a positive effect on our brains and bodies, helping to reduce stress and anxiety, improve concentration and creativity, and promote restful sleep. Calm Whisper offers a carefully curated selection of ambient sounds that have been scientifically proven to have these benefits. Whether you need to focus at work, relax at home, or sleep better at night, Calm Whisper can help you achieve your goals. Try it today and discover the science-backed benefits of ambient noise for your health and wellbeing.",
    },
  ];

  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <div className="max-w-[700px] mx-auto">
      <h2 className="pb-10 text-4xl font-bold text-center">
        What is Calm Whisper?
      </h2>
      <p className="pb-10 whitespace-pre-line">
        {`Calm Whisper is not just another ambient noise app - it's your gateway to a serene and peaceful state of mind. Think of it as your very own personal retreat, where you can escape the chaos of everyday life and immerse yourself in a world of calming sounds and melodies.
        
        With Calm Whisper, you'll have access to a vast library of high-quality ambient noise options that are specifically designed to promote relaxation, focus, and sleep. From the gentle rustling of leaves to the distant hum of a waterfall, each sound is carefully curated to help you achieve a state of inner calmness.
        
        Whether you're studying for an exam, need to concentrate on work, or just want to relax after a long day, Calm Whisper has got you covered. Our easy-to-use app allows you to customize your listening experience by adjusting the volume and mix of sounds, creating a unique and tailored environment to suit your needs.
        
        So why not give yourself the gift of relaxation and download Calm Whisper today? With Calm Whisper, you'll have everything you need to transform any space into a peaceful oasis, helping you to reduce stress, increase focus, and achieve a better night's sleep. Start your journey to inner calmness with Calm Whisper now.`}
      </p>
      <Accordion
        allowZeroExpanded={true}
        className=""
        onChange={(v: string[]) => setOpenItem(v[0])}
      >
        {data.map(({ title, content }) => (
          <AccordionItemEle
            key="title"
            title={title}
            content={content}
            openItem={openItem}
          />
        ))}
      </Accordion>
    </div>
  );
}

const AccordionItemEle = ({
  title,
  content,
  openItem,
}: {
  title: string;
  content: string;
  openItem: string | null;
}) => {
  const id = title.split(" ").join("_");

  return (
    <AccordionItem
      key="title"
      className="p-4 mb-1 bg-white text-gray-700 rounded"
      uuid={id}
    >
      <div>
        <AccordionItemHeading className="font-bold">
          <AccordionItemButton className="flex items-center justify-between">
            {title}
            {openItem === id ? (
              <ChevronUpIcon className="h-5 w-5" />
            ) : (
              <ChevronDownIcon className="h-5 w-5" />
            )}
          </AccordionItemButton>
        </AccordionItemHeading>
      </div>
      <AccordionItemPanel className="pt-4 ">
        <p>{content}</p>
      </AccordionItemPanel>
    </AccordionItem>
  );
};
