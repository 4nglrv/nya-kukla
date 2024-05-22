import styled from 'styled-components';

import { Item } from '../../misc/types';

const styledComponents = {
  Telo: styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    margin-top: 2.4rem;
    position: relative;
    z-index: 0;
  `,
  TeloWrapper: styled.div`
    display: flex;
    justify-content: center;
    position: relative;
  `,
  TeloImgWrapper: styled.div`
    display: flex;
    justify-content: center;
  `,
  TeloImg: styled.img`
    width: auto;
    height: 100%;
    object-fit: cover;
    z-index: 2;
    position: relative;
  `,
  ClothesBaseImg: styled.img<{ $styles?: Item['styles'] }>`
    position: ${(p) => p.$styles?.position || 'absolute'};
    width: ${(p) => (p.$styles?.width ? p.$styles?.width + '%' : 'auto')};
    max-width: initial;
    object-fit: cover;
    height: ${(p) => (p.$styles?.height ? p.$styles?.height + 'dvh' : '100%')};
    top: ${(p) => (p.$styles?.top ? p.$styles?.top + 'dvh' : 'initial')};
    left: ${(p) => p.$styles?.left || 50}%;
    transform: ${(p) => p.$styles?.transform || 'translate(-50%, 0)'};
    z-index: ${(p) => p.$styles?.zIndex || 1};
  `,
};

export default styledComponents;
