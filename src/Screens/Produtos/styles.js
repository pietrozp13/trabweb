import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const Header = styled.div`
  padding: 10px;
  color: #fff;
  box-shadow: -6px 12px 25px -5px rgba(230,230,230,1);
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 40%;
  border: 1px solid #dbdbdb;
`;

export const ItensParaBaixa = styled.div`
  display: flex;
  color: black;
  height: 20px;
  box-shadow: 0px -2px 28px 3px rgba(230,230,230,1);
  padding: 15px;
  margin: 20px;
`;

export const ButtonsActionsContainer = styled.div`
  display: flex;
  justify-content: center;
`;
