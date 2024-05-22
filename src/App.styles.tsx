import styled from 'styled-components';

const styledComponents = {
  App: styled.div`
    background: #4093de;
    height: 100dvh;
    width: 100vw;
    position: relative;
  `,
  GameContainer: styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  `,
};

export default styledComponents;
