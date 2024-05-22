import styled from 'styled-components';

const styledComponents = {
  App: styled.div`
    background: #4093de;
    height: 100dvh;
    width: 100vw;
    position: relative;
    display: flex;
  `,
  GameContainer: styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  `,
  Loader: styled.h1`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40dvh;
  `,
};

export default styledComponents;
