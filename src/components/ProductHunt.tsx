"use client";
import useLocalStorageState from "use-local-storage-state";

export function ProductHunt() {
  const [clicked, setClicked] = useLocalStorageState("product-hunt-badge", {
    defaultValue: false,
  });
  if (clicked) return null;

  return (
    <a
      onClick={() => setClicked(true)}
      href="https://www.producthunt.com/posts/calm-whisper?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-calm&#0045;whisper"
      className="animate-tiny-bounce block"
      target="_blank"
    >
      <img
        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=432787&theme=dark"
        alt="Calm&#0032;Whisper - Ambient&#0032;Sounds&#0032;for&#0032;Deep&#0032;Focus&#0044;&#0032;Free&#0032;&#0038;&#0032;Open&#0032;Source&#0046; | Product Hunt"
        className="h-8"
      />
    </a>
  );
}
