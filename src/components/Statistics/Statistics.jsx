import css from 'components/Statistics/Statistics.module.css';
import { Box } from 'components/Box';
import styled from 'styled-components';

const Li = styled.li`
  background-color: ${props => props.theme.backgroundColor};
`;
export const Statistics = ({ title, stats }) => {
  return (
    <Box as="section" width="300px" border="1px solid black">
      <h2 className={css.title}>{title}</h2>
      <Box as="ul" display="flex">
        {stats.map(stat => (
          <Li className={css.item} key={stat.id}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </Li>
        ))}
      </Box>
    </Box>
  );
};

export const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
