import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';

import { IconContext } from 'react-icons';

// export const StatisticItem = ({ title, total, children }) => {
//   return (
//     <StatisticBox>
//       <IconContext.Provider value={{ color: 'blue', size: '30' }}>
//         {children}
//       </IconContext.Provider>
//       <StatisticCounter>{total}</StatisticCounter>
//       <StatisticText>{title}</StatisticText>
//     </StatisticBox>
//   );
// };

export const StatisticItem = ({ title, total, icon }) => {
  return (
    <StatisticBox>
      <IconContext.Provider value={{ color: 'blue', size: '30' }}>
        {icon}
      </IconContext.Provider>
      <StatisticCounter>{total}</StatisticCounter>
      <StatisticText>{title}</StatisticText>
    </StatisticBox>
  );
};
