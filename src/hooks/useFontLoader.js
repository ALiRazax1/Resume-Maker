import { useEffect } from 'react';
import { fontPairings } from '../data/fonts';

export const useFontLoader = (activeFontId) => {
  useEffect(() => {
    const activePairing = fontPairings.find((f) => f.id === activeFontId);
    if (!activePairing || !activePairing.googleUrl) return;

    // Check if the link tag already exists
    const linkId = `google-font-${activePairing.id}`;
    let linkElement = document.getElementById(linkId);

    if (!linkElement) {
      linkElement = document.createElement('link');
      linkElement.id = linkId;
      linkElement.rel = 'stylesheet';
      linkElement.href = activePairing.googleUrl;
      document.head.appendChild(linkElement);
    }
  }, [activeFontId]);
};
