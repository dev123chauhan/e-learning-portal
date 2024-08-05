
import styled from 'styled-components';

const SuccessSection = styled.section`
  text-align: center;
  padding: 50px 0;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
  max-width: 800px;
  margin: 0 auto 40px;
  line-height: 1.6;
`;

const MetricsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const MetricItem = styled.div`
  flex: 1;
  min-width: 150px;
  margin: 10px;
`;

const MetricValue = styled.div`
  font-size: 48px;
  background: linear-gradient(to right, #49BBBD, #136CB5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
`;

const MetricLabel = styled.div`
  font-size: 18px;
  color: #333;
`;

const Success = () => {
  const metrics = [
    { value: '15K+', label: 'Students' },
    { value: '75%', label: 'Total success' },
    { value: '35', label: 'Main questions' },
    { value: '26', label: 'Chief experts' },
    { value: '16', label: 'Years of experience' },
  ];

  return (
    <SuccessSection>
      <Title>Our Success</Title>
      <Description>
        Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec
        nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci.
      </Description>
      <MetricsContainer>
        {metrics.map((metric, index) => (
          <MetricItem key={index}>
            <MetricValue>{metric.value}</MetricValue>
            <MetricLabel>{metric.label}</MetricLabel>
          </MetricItem>
        ))}
      </MetricsContainer>
    </SuccessSection>
  );
};

export default Success;