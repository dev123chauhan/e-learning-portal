import styled from 'styled-components';
import PropTypes from 'prop-types';
const ChartContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 20px;
`;
const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const GaugeContainer = styled.div`
  position: relative;
  width: 200px;
  height: 100px;
  margin: 0 auto;
`;

const GaugeBackground = styled.div`
  width: 200px;
  height: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  border: 20px solid #f0f0f0;
  border-bottom: 0;
  box-sizing: border-box;
`;

const GaugeFill = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  border: 20px solid #4caf50;
  border-bottom: 0;
  box-sizing: border-box;
  clip-path: ${props => `polygon(50% 50%, ${50 - Math.cos(props.angle * Math.PI / 180) * 50}% ${50 - Math.sin(props.angle * Math.PI / 180) * 50}%, ${props.angle > 90 ? '0% 0%, 100% 0%' : ''})`};
`;

const GaugePointer = styled.div`
  position: absolute;
  bottom: 0;
  left: 100px;
  width: 4px;
  height: 80px;
  background-color: #ff6b6b;
  transform-origin: bottom center;
  transform: ${props => `rotate(${props.angle}deg)`};
`;

const GaugeValue = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;

const Gauge = ({ value }) => {
    const angle = (value / 10000) * 180;
    return (
      <GaugeContainer>
        <GaugeBackground />
        <GaugeFill angle={angle} />
        <GaugePointer angle={angle} />
        <GaugeValue>{value.toFixed(3)}</GaugeValue>
      </GaugeContainer>
    );
  };
  
  // Add prop types to the Gauge component
  Gauge.propTypes = {
    value: PropTypes.number.isRequired,
  };
export default function Performance() {
  return (
    <div>
        <ChartContainer>
        <Title>Performance</Title>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ backgroundColor: '#4caf50', color: 'white', padding: '5px 10px', borderRadius: '5px' }}>
            Point Progress
          </div>
          <select style={{ padding: '5px', borderRadius: '5px' }}>
            <option>Monthly</option>
          </select>
        </div>
        <Gauge value={8966} />
      </ChartContainer>
    </div>
  )
}


// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// const PerformanceContainer = styled.div`
//   width: 400px;
//   background-color: white;
//   border-radius: 10px;
//   padding: 20px;
//   box-shadow: 0 2px 10px rgba(0,0,0,0.1);
// `;

// const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// const Title = styled.h2`
//   font-size: 18px;
//   margin: 0;
// `;

// const PointProgress = styled.div`
//   background-color: #4caf50;
//   color: white;
//   padding: 5px 10px;
//   border-radius: 5px;
//   font-size: 14px;
// `;

// const Select = styled.select`
//   padding: 5px 10px;
//   border-radius: 5px;
//   border: 1px solid #ddd;
//   font-size: 14px;
// `;

// const GaugeContainer = styled.div`
//   position: relative;
//   width: 200px;
//   height: 100px;
//   margin: 0 auto;
// `;

// const GaugeBackground = styled.div`
//   width: 200px;
//   height: 100px;
//   border-top-left-radius: 100px;
//   border-top-right-radius: 100px;
//   border: 20px solid #f0f0f0;
//   border-bottom: 0;
//   box-sizing: border-box;
// `;

// const GaugeFill = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 200px;
//   height: 100px;
//   border-top-left-radius: 100px;
//   border-top-right-radius: 100px;
//   border: 20px solid #4caf50;
//   border-bottom: 0;
//   box-sizing: border-box;
//   clip-path: ${props => `polygon(50% 50%, ${50 - Math.cos(props.angle * Math.PI / 180) * 50}% ${50 - Math.sin(props.angle * Math.PI / 180) * 50}%, ${props.angle > 90 ? '0% 0%, 100% 0%' : ''})`};
// `;

// const GaugePointer = styled.div`
//   position: absolute;
//   bottom: 0;
//   left: 100px;
//   width: 4px;
//   height: 80px;
//   background-color: #ff6b6b;
//   transform-origin: bottom center;
//   transform: ${props => `rotate(${props.angle}deg)`};
// `;

// const GaugeValue = styled.div`
//   position: absolute;
//   bottom: -30px;
//   left: 0;
//   right: 0;
//   text-align: center;
//   font-size: 24px;
//   font-weight: bold;
// `;

// const Gauge = ({ value }) => {
//   const angle = (value / 10000) * 180;
//   return (
//     <GaugeContainer>
//       <GaugeBackground />
//       <GaugeFill angle={angle} />
//       <GaugePointer angle={angle} />
//       <GaugeValue>Your Point: {value.toFixed(3)}</GaugeValue>
//     </GaugeContainer>
//   );
// };

// Gauge.propTypes = {
//   value: PropTypes.number.isRequired,
// };

// const Performance = ({ performanceValue, timeOptions }) => {
//   return (
//     <PerformanceContainer>
//       <Header>
//         <Title>Performance</Title>
//       </Header>
//       <Header>
//         <PointProgress>Point Progress</PointProgress>
//         <Select>
//           {timeOptions.map(option => (
//             <option key={option.value} value={option.value}>{option.label}</option>
//           ))}
//         </Select>
//       </Header>
//       <Gauge value={performanceValue} />
//     </PerformanceContainer>
//   );
// };

// Performance.propTypes = {
//   performanceValue: PropTypes.number.isRequired,
//   timeOptions: PropTypes.arrayOf(PropTypes.shape({
//     value: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//   })).isRequired,
// };

// Performance.defaultProps = {
//   performanceValue: 0,
//   timeOptions: [
//     { value: 'monthly', label: 'Monthly' },
//     { value: 'weekly', label: 'Weekly' },
//     { value: 'daily', label: 'Daily' },
//   ],
// };

// export default Performance;