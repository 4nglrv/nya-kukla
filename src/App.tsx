import { useEffect, useMemo, useState } from 'react';

import Styled from './App.styles';
import useAssetsLoader from './components/common/UseAssetsLoader';
import Tab from './components/tab/Menu';
import Telo from './components/telo/Telo';
import {
  Category,
  ClothesStateType,
  Item,
  TeloRecordTypes,
} from './misc/types';

function App() {
  const [cap, setCap] = useState<ClothesStateType | undefined>();
  const [top, setTop] = useState<ClothesStateType | undefined>();
  const [coats, setCoats] = useState<ClothesStateType | undefined>();
  const [bottom, setBottom] = useState<ClothesStateType | undefined>();
  const [socks, setSocks] = useState<ClothesStateType | undefined>();
  const [shoes, setShoes] = useState<ClothesStateType | undefined>();
  const [tail] = useState<ClothesStateType | undefined>();
  const [bags, setBag] = useState<ClothesStateType | undefined>();
  const [outfit, setOutfit] = useState<ClothesStateType | undefined>();
  const [telo, setTelo] = useState<ClothesStateType | undefined>();
  const [pants, setPants] = useState<ClothesStateType | undefined>();

  const clothesState: TeloRecordTypes = {
    cap,
    top,
    bottom,
    socks,
    shoes,
    tail,
    coats,
    bags,
    pants,
    outfit,
    telo,
  };

  // TODO: add active item key
  const categories: Category[] = [
    {
      id: 'telo',
      icon: {
        default: '/assets/telo/icon.png',
        active: '/assets/telo/iconActive.png',
      },
      items: [
        { id: 'telo0', img: '/assets/telo/telo0.png', menuTitle: 'Алиса' },
        { id: 'telo1', img: '/assets/telo/telo1.png', menuTitle: 'Даша' },
        { id: 'telo2', img: '/assets/telo/telo2.png', menuTitle: 'Вита' },
        { id: 'telo3', img: '/assets/telo/telo3.png', menuTitle: 'Полина' },
        { id: 'telo4', img: '/assets/telo/telo4.png', menuTitle: 'Анжелика' },
        { id: 'telo5', img: '/assets/telo/telo5.png', menuTitle: 'Наташа' },
        { id: 'telo6', img: '/assets/telo/telo6.png', menuTitle: 'Аня' },
        { id: 'telo7', img: '/assets/telo/telo7.png', menuTitle: 'Алина' },
        { id: 'telo8', img: '/assets/telo/telo8.png', menuTitle: 'Вика' },
        { id: 'telo9', img: '/assets/telo/telo9.png', menuTitle: 'Дарина' },
      ],
      styles: {
        zIndex: 2,
        position: 'relative',
      },
      smoothSlide: false,
      isNotHidden: true,

      handleApply: (item: Item) => {
        setTelo({ currItem: item, categoryId: 'telo' });
      },
      handleRemove: () => setTelo(undefined),
    },
    {
      id: 'cap',
      icon: {
        default: '/assets/caps/icon.png',
        active: '/assets/caps/iconActive.png',
      },
      items: [
        { id: 'cap0', img: '/assets/caps/cap0.png' },
        { id: 'cap1', img: '/assets/caps/cap1.png' },
        { id: 'cap2', img: '/assets/caps/cap2.png' },
        { id: 'cap3', img: '/assets/caps/cap3.png' },
        { id: 'cap4', img: '/assets/caps/cap4.png' },
      ],
      styles: {
        top: 5,
        height: 19,
        zIndex: 3,
      },

      handleApply: (item: Item) => {
        setCap({ currItem: item, categoryId: 'cap' });
      },
      handleRemove: () => setCap(undefined),
    },
    {
      id: 'outfit',
      icon: {
        default: '/assets/outfit/icon.png',
        active: '/assets/outfit/iconActive.png',
      },
      items: [
        { id: 'outfit0', img: '/assets/outfit/outfit0.png' },
        { id: 'outfit1', img: '/assets/outfit/outfit1.png' },
        { id: 'outfit2', img: '/assets/outfit/outfit2.png' },
        {
          id: 'outfit3',
          img: '/assets/outfit/outfit3.png',
          styles: { top: 14.5, height: 56 },
        },
        {
          id: 'outfit4',
          img: '/assets/outfit/outfit4.png',
          styles: { top: 15 },
        },
        {
          id: 'outfit5',
          img: '/assets/outfit/outfit5.png',
          styles: { height: 22, top: 22, transform: 'translate(-50.5%, 0)' },
        },
        {
          id: 'outfit6',
          img: '/assets/outfit/outfit6.png',
          styles: {
            height: 31,
            top: 21.5,
            transform: 'translate(-54%, 0)',
            zIndex: 6,
          },
        },
      ],
      styles: {
        top: 14,
        height: 58,
        transform: 'translate(-53%, 0)',
        zIndex: 6,
      },

      handleApply: (item: Item) => {
        setOutfit({ currItem: item, categoryId: 'outfit' });
        setBottom(undefined);
        setPants(undefined);
        setCoats(undefined);
        setBag(undefined);
        setTop(undefined);
      },
      handleRemove: () => setOutfit(undefined),
    },
    {
      id: 'top',
      icon: {
        default: '/assets/tops/icon.png',
        active: '/assets/tops/iconActive.png',
      },
      items: [
        { id: 'top0', img: '/assets/tops/top0.png' },
        { id: 'top1', img: '/assets/tops/top1.png' },
        { id: 'top2', img: '/assets/tops/top2.png' },
        {
          id: 'top3',
          img: '/assets/tops/top3.png',
          styles: { transform: 'translate(-51%, 0)' },
        },
        { id: 'top4', img: '/assets/tops/top4.png' },
      ],
      styles: {
        height: 12,
        top: 21,
        zIndex: 5,
        transform: 'translate(-51.5%, 0)',
      },

      handleApply: (item: Item) => {
        setTop({ currItem: item, categoryId: 'top' });
        setOutfit(undefined);
      },
      handleRemove: () => setTop(undefined),
    },
    {
      id: 'coats',
      icon: {
        default: '/assets/coats/icon.png',
        active: '/assets/coats/iconActive.png',
      },
      items: [
        { id: 'coat0', img: '/assets/coats/coat0.png' },
        { id: 'coat1', img: '/assets/coats/coat1.png' },
        { id: 'coat2', img: '/assets/coats/coat2.png' },
        { id: 'coat3', img: '/assets/coats/coat3.png', styles: { top: 20.9 } },
        { id: 'coat4', img: '/assets/coats/coat4.png' },
      ],
      styles: {
        height: 30,
        top: 21.5,
        transform: 'translate(-53.5%, 0)',
        zIndex: 6,
      },

      handleApply: (item: Item) => {
        setCoats({ currItem: item, categoryId: 'coats' });
        setOutfit(undefined);
      },
      handleRemove: () => setCoats(undefined),
    },
    {
      id: 'bottom',
      icon: {
        default: '/assets/bottom/icon.png',
        active: '/assets/bottom/iconActive.png',
      },
      items: [
        { id: 'bottom0', img: '/assets/bottom/bottom0.png' },
        { id: 'bottom1', img: '/assets/bottom/bottom1.png' },
        { id: 'bottom2', img: '/assets/bottom/bottom2.png' },
        { id: 'bottom3', img: '/assets/bottom/bottom3.png' },
        { id: 'bottom4', img: '/assets/bottom/bottom4.png' },
        { id: 'bottom5', img: '/assets/bottom/bottom5.png' },
      ],
      styles: {
        height: 23,
        top: 32,
        zIndex: 5,
      },

      handleApply: (item: Item) => {
        setBottom({ currItem: item, categoryId: 'bottom' });
        setOutfit(undefined);
        setPants(undefined);
      },
      handleRemove: () => setBottom(undefined),
    },
    {
      id: 'pants',
      icon: {
        default: '/assets/pants/icon.png',
        active: '/assets/pants/iconActive.png',
      },
      items: [
        { id: 'pant0', img: '/assets/pants/pant0.png' },
        { id: 'pant1', img: '/assets/pants/pant1.png' },
        { id: 'pant2', img: '/assets/pants/pant2.png' },
        { id: 'pant3', img: '/assets/pants/pant3.png' },
        { id: 'pant4', img: '/assets/pants/pant4.png' },
        { id: 'pant5', img: '/assets/pants/pant5.png' },
      ],
      styles: {
        height: 34,
        top: 33,
        zIndex: 5,
      },

      handleApply: (item: Item) => {
        setPants({ currItem: item, categoryId: 'pants' });
        setOutfit(undefined);
        setBottom(undefined);
      },
      handleRemove: () => setPants(undefined),
    },
    {
      id: 'socks',
      icon: {
        default: '/assets/socks/icon.png',
        active: '/assets/socks/iconActive.png',
      },
      items: [
        { id: 'socks0', img: '/assets/socks/socks0.png' },
        { id: 'socks1', img: '/assets/socks/socks1.png' },
        { id: 'socks2', img: '/assets/socks/socks2.png' },
        { id: 'socks3', img: '/assets/socks/socks3.png' },
        { id: 'socks4', img: '/assets/socks/socks4.png' },
        { id: 'socks5', img: '/assets/socks/socks5.png' },
      ],
      styles: {
        height: 33.9,
        top: 36.4,
        zIndex: 3,
      },

      handleApply: (item: Item) => {
        setSocks({ currItem: item, categoryId: 'socks' });
      },
      handleRemove: () => setSocks(undefined),
    },
    {
      id: 'shoes',
      icon: {
        default: '/assets/shoes/icon.png',
        active: '/assets/shoes/iconActive.png',
      },
      items: [
        {
          id: 'shoe0',
          img: '/assets/shoes/shoe0.png',
          styles: { height: 5, top: 66, transform: 'translate(-53%, 0)' },
        },
        { id: 'shoe1', img: '/assets/shoes/shoe1.png' },
        { id: 'shoe2', img: '/assets/shoes/shoe2.png' },
        { id: 'shoe3', img: '/assets/shoes/shoe3.png' },
        { id: 'shoe4', img: '/assets/shoes/shoe4.png' },
        { id: 'shoe5', img: '/assets/shoes/shoe5.png' },
      ],
      styles: {
        height: 16.4,
        top: 55,
        zIndex: 4,
      },

      handleApply: (item: Item) => {
        setShoes({ currItem: item, categoryId: 'shoes' });
      },
      handleRemove: () => setShoes(undefined),
    },
    {
      id: 'bags',
      icon: {
        default: '/assets/bags/icon.png',
        active: '/assets/bags/iconActive.png',
      },
      items: [
        { id: 'bag0', img: '/assets/bags/bag0.png' },
        { id: 'bag1', img: '/assets/bags/bag1.png' },
        { id: 'bag2', img: '/assets/bags/bag2.png' },
        { id: 'bag3', img: '/assets/bags/bag3.png' },
      ],
      styles: {
        height: 20,
        top: 22,
        zIndex: 6,
      },

      handleApply: (item: Item) => {
        setBag({ currItem: item, categoryId: 'bags' });
        setOutfit(undefined);
      },
      handleRemove: () => setBag(undefined),
    },
  ];

  const initialOutfit: ClothesStateType = {
    currItem: categories[2].items[5],
    categoryId: 'outfit',
  };

  const initialShoes: ClothesStateType = {
    currItem: categories[8].items[0],
    categoryId: 'shoes',
  };

  const initialTelo: ClothesStateType = {
    currItem: categories[0].items[0],
    categoryId: 'telo',
  };

  const [audio] = useState(new Audio('/assets/FACE_BURGER.mp3'));

  useEffect(() => {
    setOutfit(initialOutfit);
    setShoes(initialShoes);
    setTelo(initialTelo);

    let isAudioPlayed = false;

    window.addEventListener(
      'touchstart',
      () => {
        if (isAudioPlayed) return;
        audio.play();
        isAudioPlayed = true;
      },
      false
    );
    // eslint-disable-next-line
  }, []);

  const [assetsIsLoaded, setAssetsIsLoaded] = useState(false);

  const allAssets = useMemo(() => {
    const imgs: string[] = [];
    categories.forEach((category) => {
      category.items.forEach((item) => imgs.push(item.img));
      imgs.push(category.icon.active);
      imgs.push(category.icon.default);
    });
    return imgs;
  }, []);

  const [precent, setPrecent] = useState(0);

  useAssetsLoader(
    allAssets,
    () => setAssetsIsLoaded(true),
    (val) => setPrecent(val)
  );

  return (
    <Styled.App>
      {!assetsIsLoaded ? (
        <Styled.Loader>ЭШКЕРЕ ЗАГРУЗКА {Math.floor(precent)}%</Styled.Loader>
      ) : (
        <Styled.GameContainer>
          <Telo categories={categories} clothes={clothesState} />
          <Tab categories={categories} clothes={clothesState} />
        </Styled.GameContainer>
      )}
    </Styled.App>
  );
}

export default App;
