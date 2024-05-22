import { useEffect } from 'react';

export default function useAssetsLoader(
  assets: string[],
  onLoaded: () => void,
  precent: (val: number) => void
) {
  let loadedAssets = 0;

  useEffect(() => {
    const loadAssets = (src: string) => {
      return new Promise((resolve, reject) => {
        const onAssetsLoad = () => {
          loadedAssets++;
          const numPrecent = (loadedAssets * 100) / assets.length;
          precent(numPrecent < 100 ? numPrecent : 100);

          return setTimeout(() => {
            resolve(src);
          }, 1000);
        };

        if (src.endsWith('.png')) {
          const loadImg = new Image();
          loadImg.src = src;
          loadImg.onload = () => onAssetsLoad();
          loadImg.onerror = (err) => reject(err);
        } else if (src.endsWith('.mp3')) {
          const loadMp3 = new Audio();
          loadMp3.src = src;
          loadMp3.onloadstart = () => onAssetsLoad();
          loadMp3.onerror = (err) => reject(err);
        }
      });
    };

    Promise.all(assets.map((src) => loadAssets(src)))
      .then(() => onLoaded())
      .catch((err) => console.log('Failed to load images', err));
  }, []);
}
