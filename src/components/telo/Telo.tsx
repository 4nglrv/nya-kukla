import React from 'react';

import { isKey } from '../../misc';
import { Category, TeloRecordTypes } from '../../misc/types';
import ClothesItem from './ClothesItem';
import Styled from './Telo.styles';

type TeloProps = {
  categories: Category[];
  clothes: TeloRecordTypes;
};

const Telo: React.FC<TeloProps> = ({ clothes, categories }) => {
  return (
    <Styled.Telo>
      <Styled.TeloWrapper>
        <Styled.TeloImgWrapper>
          {Object.keys(clothes).map((key, i) => {
            if (isKey(clothes, key)) {
              const data = clothes[key];
              const category = categories.filter(
                (val) => val.id === data?.categoryId
              )[0];

              if (!data || !category) {
                return null;
              }

              return (
                <ClothesItem
                  key={`${key}-${i}`}
                  src={data.currItem.img}
                  styles={{ ...category.styles, ...data.currItem.styles }}
                  isSmoothSlide={category?.smoothSlide ?? true}
                />
              );
            }
          })}
        </Styled.TeloImgWrapper>
      </Styled.TeloWrapper>
    </Styled.Telo>
  );
};

export default Telo;
