import styled from 'styled-components';

const styledComponents = {
  App: styled.div`
    background: #4093de;
    height: 100dvh;
    width: 100vw;
    position: relative;
    display: flex;
    flex-direction: column;
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
  StartButton: styled.button`
    display: inline;
    max-width: 180px;
    padding: 8px;
    margin: 24px auto;
  `,
};

export default styledComponents;
