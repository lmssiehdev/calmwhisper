import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import { useEffect } from "react";

// copied type from cybertype repo :-)
/**
 * Only supported on Chrome and Android Webview.
 */
interface BeforeInstallPromptEvent extends Event {
  /**
   * Returns an array of DOMString items containing the platforms on which the event was dispatched.
   * This is provided for user agents that want to present a choice of versions to the user such as,
   * for example, "web" or "play" which would allow the user to chose between a web version or
   * an Android version.
   */
  readonly platforms: Array<string>;

  /**
   * Returns a Promise that resolves to a DOMString containing either "accepted" or "dismissed".
   */
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;

  /**
   * Allows a developer to show the install prompt at a time of their own choosing.
   * This method returns a Promise.
   */
  prompt(): Promise<void>;
}

function PwaInstallButton() {
  useEffect(showInstallPromotion, []);

  function handleButtonClick() {
    hideInstallPromotion();
  }

  return (
    <>
      <button className="pwa-install-button" onClick={handleButtonClick}>
        <ArrowDownTrayIcon className="h-5 w-5" />
      </button>
    </>
  );
}

// Initialize deferredPrompt for use later to show browser install prompt.
let deferredPrompt: null | BeforeInstallPromptEvent;

function showInstallPromotion() {
  window.addEventListener("beforeinstallprompt", (e) => {
    document.body.classList.add("show-pwa-install");
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e as BeforeInstallPromptEvent;
    // Update UI notify the user they can install the PWA
    showInstallPromotion();
    // Optionally, send analytics event that PWA install promo was shown.
    console.log(`'beforeinstallprompt' event was fired.`, deferredPrompt);
  });
}

async function hideInstallPromotion() {
  if (!deferredPrompt) return;

  document.body.classList.remove("show-pwa-install");
  // Show the install prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  const { outcome } = await deferredPrompt.userChoice;
  // Optionally, send analytics event with outcome of user choice
  console.log(`User response to the install prompt: ${outcome}`);
  // We've used the prompt, and can't use it again, throw it away
  deferredPrompt = null;
}

export default PwaInstallButton;
