import React, { Dispatch, SetStateAction, useState } from 'react';

import { isKey } from '../../misc';
import {
  Category,
  ClothesStateType,
  Item,
  TeloRecordTypes,
} from '../../misc/types';
import clothesItem from '../telo/ClothesItem';
import Styled from './Menu.styles';

type MenuProps = {
  categories: Category[];
  clothes: TeloRecordTypes;
};

const Menu: React.FC<MenuProps> = ({ categories, clothes }) => {
  const [currCategory, setCurrCategory] = useState(categories[0]);

  return (
    <Styled.Menu>
      <Styled.Tabs>
        <Styled.TabsWrapper>
          <swiper-container slides-per-view={5} width={270}>
            {categories.map((category, i) => (
              <TabItem
                currCategory={currCategory}
                setCurrCategory={setCurrCategory}
                category={category}
                key={i}
              />
            ))}
          </swiper-container>
        </Styled.TabsWrapper>
      </Styled.Tabs>
      <Styled.Items>
        <ClothingItem currCategory={currCategory} clothes={clothes} />
      </Styled.Items>
    </Styled.Menu>
  );
};

const ClothingItem: React.FC<{
  currCategory: Category;
  clothes: TeloRecordTypes;
}> = ({ currCategory, clothes }) => {
  let currClothes: ClothesStateType | undefined;

  if (isKey(clothes, currCategory.id)) {
    currClothes = clothes[currCategory.id];
  }

  const handleItemChange = (item: Item) => {
    currCategory.handleApply(item);
  };

  const handleItemRemove = () => {
    currCategory.handleRemove();
  };

  return (
    <Styled.ItemsWrapper>
      {!currCategory?.isNotHidden && (
        <Styled.ClothingItem
          style={{ color: 'black' }}
          onClick={handleItemRemove}
        >
          <img src={'/assets/panel/fa_remove.svg'} alt={'УДАЛИТБ!'} />
        </Styled.ClothingItem>
      )}

      {currCategory.items.map((item, i) => (
        <Styled.ClothingItem
          key={`${i}-${item.id}`}
          onClick={() => handleItemChange(item)}
          $isActive={item.id === currClothes?.currItem.id}
        >
          {item?.menuTitle && (
            <Styled.MenuTitle>{item.menuTitle}</Styled.MenuTitle>
          )}
          <img
            src={item.img}
            alt={item.id}
            style={{ display: item?.menuTitle ? 'none' : 'block' }}
          />
        </Styled.ClothingItem>
      ))}
    </Styled.ItemsWrapper>
  );
};

const TabItem: React.FC<{
  currCategory: Category;
  setCurrCategory: Dispatch<SetStateAction<Category>>;
  category: Category;
}> = ({ category, currCategory, setCurrCategory }) => {
  const isActive = currCategory.id === category.id;

  return (
    <swiper-slide>
      <Styled.TabItem onClick={() => setCurrCategory(category)}>
        <img
          src={!isActive ? category.icon.default : category.icon.active}
          alt={category.id}
        />
      </Styled.TabItem>
    </swiper-slide>
  );
};

export default Menu;
