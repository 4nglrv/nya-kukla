import styled from 'styled-components';

const styledComponents = {
  Menu: styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    min-width: 280px;
    z-index: 1;
  `,

  Tabs: styled.div`
    max-width: 280px;
  `,

  TabsWrapper: styled.div`
    swiper-slide {
      margin-top: auto;
    }
  `,

  TabItem: styled.div`
    cursor: pointer;
    margin-top: auto;
    > img {
      max-width: 50px;
    }
  `,

  TabArrLeft: styled.img``,

  TabArrRight: styled.img``,

  Items: styled.div`
    width: 100%;
    background: #fff;
    max-width: 280px;
    max-height: 136px;
    overflow: scroll;
  `,

  ItemsWrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 1.2em 2.1em;
    height: 100%;
    gap: 12px;
  `,

  ClothingItem: styled.div<{ $isActive?: boolean }>`
    background: ${(p) => (!p.$isActive ? '#fff' : '#d89eee')};
    border: solid ${(p) => (!p.$isActive ? '#4a9ff1' : '#c22ef1')} 2px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    cursor: pointer;
    padding: 8px;

    &:hover {
    }

    > img {
      height: auto;
      max-height: 50px;
      width: 100%;
      object-fit: contain;
    }

    > span {
      color: ${(p) => (p.$isActive ? '#fff' : '#4a9ff1')};
    }
  `,

  MenuTitle: styled.span`
    font-weight: bold;
  `,
};

export default styledComponents;
