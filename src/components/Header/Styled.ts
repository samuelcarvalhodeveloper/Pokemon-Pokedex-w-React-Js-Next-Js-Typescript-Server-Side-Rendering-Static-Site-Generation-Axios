import styled from "styled-components";

const HeaderStyled = styled.header`
  background: #EAE1E1;
  border-bottom: .1rem solid #3F3434;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;

  .header__center {
    width: 100%;
    max-width: 132rem;
    padding: 1.1rem 3rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .header__link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
  }
`;

export default HeaderStyled;
