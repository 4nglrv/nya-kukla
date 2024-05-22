export type Icon = {
  default: string;
  active: string;
};

export type CategoryStyles = {
  top?: number;
  width?: number;
  height?: number;
  left?: number;
  transform?: string;
  zIndex?: number;
  position?: string;
};

export type Category = {
  id: string;
  icon: Icon;
  items: Item[];
  styles?: CategoryStyles;
  smoothSlide?: boolean;
  isNotHidden?: boolean;

  handleApply: (item: Item) => void;
  handleRemove: () => void;
};

export type Item = {
  id: string;
  img: string;

  menuTitle?: string;
  styles?: CategoryStyles;
};

export type ClothesStateType = {
  currItem: Item;
  categoryId: string;
};

/**
 * ВСЕ ДОСТУПНЫЕ КАТЕГОРИИ ШМОТОК ЭШКЕРЕ
 * П.С. ИЗНАЧАЛЬНО ДЛЯ ДРУГОГО ПРЕДНАЗНАЧАЛОСЬ ПОЭТОМУ ИСТОРИЧЕСКИ СЛОЖИЛОСЬ ТАКОЕ НАЗВАНИЕ
 **/
export enum TeloTypes {
  CAP = 'cap',
  TOP = 'top',
  BOTTOM = 'bottom',
  SOCKS = 'socks',
  SHOES = 'shoes',
  TAIL = 'tail',
  PANTS = 'pants',
  COATS = 'coats',
  BAGS = 'bags',
  OUTFIT = 'outfit',
  TELO = 'telo',
}

export type TeloRecordTypes = Partial<Record<TeloTypes, ClothesStateType>>;
