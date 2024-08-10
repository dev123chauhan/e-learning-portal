// import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 20px;
`;

const ChartContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Legend = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const LegendColor = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  margin-right: 5px;
  background-color: ${props => props.color};
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

const data = [
  { name: 'Jan', Study: 40, Exams: 30 },
  { name: 'Feb', Study: 20, Exams: 20 },
  { name: 'Mar', Study: 60, Exams: 10 },
  { name: 'Apr', Study: 40, Exams: 15 },
  { name: 'May', Study: 15, Exams: 5 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: '#333', color: '#fff', padding: '5px', borderRadius: '5px' }}>
        <p>{`Study: ${payload[0].value}`}</p>
        <p>{`Exams: ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

// Add prop types to the CustomTooltip component
CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
    })
  ),
};

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

const StatisticsSection = () => {
  return (
    <Container>
      <ChartContainer>
        <Title>Hours Spent</Title>
        <Legend>
          <LegendItem>
            <LegendColor color="#ff7f0e" />
            <span>Study</span>
          </LegendItem>
          <LegendItem>
            <LegendColor color="#d3d3d3" />
            <span>Exams</span>
          </LegendItem>
        </Legend>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="Study" stackId="a" fill="#ff7f0e" />
            <Bar dataKey="Exams" stackId="a" fill="#d3d3d3" />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
      {/* <ChartContainer>
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
      </ChartContainer> */}
    </Container>
  );
};

export default StatisticsSection;
