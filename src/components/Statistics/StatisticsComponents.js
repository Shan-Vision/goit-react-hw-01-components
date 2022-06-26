import styled from 'styled-components';

export const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
export const Title = styled.h2`
  padding: 20px 60px;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 700;
  background-color: #fff;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 11px;
  background-color: ${props => props.backgroundColor};

  .label {
    margin-bottom: 5px;
  }
  .percentage {
    font-size: 20px;
    font-weight: 700;
  }
`;
