import styled from "styled-components";

const Content404 = styled.main`
  width: 100%;
  max-width: 47.1rem;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  height: 100vh;
  padding: 0 3.2rem;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  .main__content {
    width: 100%;
    background: #EAE1E1;
    border-radius: 1.6rem;
    border: .1rem solid #BFABAB;
    padding: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .main__center {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    flex-flow: column nowrap;
    text-align: center;
  }

  .main__title {
    font-weight: 800;
    font-size: 3.2rem;
    line-height: 125%;
  }
`;

export default Content404;
