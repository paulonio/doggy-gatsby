import styled from 'styled-components';

export const Form = styled.form`
  color: #4c4c4b;
  font-size: 32px;
  line-height: 39px;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div {
      width: 100%;
    }
  }

  @media screen and (max-width: 570px) {
    font-size: 24px;
    line-height: 29px;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 16px;
    }
  }
`;

export const InputWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  column-gap: 32px;

  & > div {
    width: 60%;
    max-width: 498px;
    display: flex;
    flex-direction: column;
    row-gap: 8px;

    & > p {
      color: red;
    }

    @media screen and (max-width: 570px) {
      margin-right: 0;
      width: 100%;
    }
  }
`;

export const Input = styled.input`
  padding: 20px 24px;
  font-size: 14px;
  line-height: 19px;
  color: #4c4c4b;
  border: #e0e0e0 1px solid;
  border-radius: 8px;

  &::placeholder {
    color: #959fa8;
  }

  @media screen and (max-width: 570px) {
    margin-right: 0;
    width: 100%;
  }
`;
