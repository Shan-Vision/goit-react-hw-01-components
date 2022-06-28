import styled from 'styled-components';

export const FriendListWrapp = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: start;
  gap: 16px;
  align-content: center;
  width: 300px;
  margin-bottom: 16px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const Indicator = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-left: 10px;
  margin-right:10px;

  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
`;

export const FriendName = styled.p`
  flex-grow: 1;
  font-size: 20px;
  font-weight: 700;
  padding-left: 10px;
`;
