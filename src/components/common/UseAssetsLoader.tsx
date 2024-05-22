import { useEffect } from 'react';

export default function useAssetsLoader(
  assets: string[],
  onLoaded: () => void,
  precent: (val: number) => void
) {
  let loadedAssets = 0;

  useEffect(() => {
    const loadImage = (src: string) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = src;
        // wait 2 seconds to simulate loading time
        loadImg.onload = () => {
          loadedAssets++;
          const numPrecent = (loadedAssets * 100) / assets.length;
          precent(numPrecent < 100 ? numPrecent : 100);

          return setTimeout(() => {
            resolve(src);
          }, 1000);
        };

        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(assets.map((src) => loadImage(src)))
      .then(() => onLoaded())
      .catch((err) => console.log('Failed to load images', err));
  }, []);
}
