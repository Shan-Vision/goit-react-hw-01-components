import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { getRandomColor, Title, Item } from './StatisticsComponents';

export const Statistics = ({ title, stats }) => {
  return (
    <Box as="section" width="300px" mb={3}>
      {title && <Title>{title}</Title>}
      <Box as="ul" display="flex">
        {stats.map(({ id, label, percentage }) => (
          <Item key={id} backgroundColor={getRandomColor()}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </Item>
        ))}
      </Box>
    </Box>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    })
  ).isRequired,
};
