import React from "react";
import styled from "styled-components";

// Card container with compact styling for small screens
const Card = styled.div`
  flex: 1;
  min-width: 300px;
  padding: 16px;  // Reduced padding for smaller cards
  border: 1px solid ${({ theme }) => theme.text_primary + "20"};
  border-radius: 12px;  // Smaller border radius for a more compact look
  display: flex;
  flex-direction: column; // Stack content vertically on smaller screens
  gap: 6px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + "15"};
  background:  rgba(226, 234, 244, 0.8);

  @media (max-width: 600px) {
    padding: 12px;  // Further reduce padding on very small screens
    min-width: 200px;  // Make the card more compact on small screens
  }

  @media (min-width: 600px) {
    flex-direction: row; // Layout content horizontally on larger screens
    flex-wrap: wrap; // Allow content to wrap if needed
    align-items: center; // Center align child elements
  }

  @media (min-width: 1025px) {
    align-items: flex-start; // Align items at the start for larger screens
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;  // Reduced gap between elements for a more compact look

  @media (max-width: 600px) {
    gap: 5px;  // Slightly larger gap for smaller screens
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 14px;  // Smaller font size for more compact design
  color: ${({ theme }) => theme.primary};

  @media (max-width: 600px) {
    font-size: 12px;  // Even smaller font size on very small screens
  }
`;

const Value = styled.div`
  font-weight: 600;
  font-size: 22px;  // Reduced font size for the value
  display: flex;
  align-items: end;
  gap: 6px;  // Smaller gap
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 600px) {
    font-size: 18px;  // Even smaller value font size on small screens
  }
`;

const Unit = styled.div`
  font-size: 12px;  // Smaller unit font size
  margin-bottom: 6px;
`;

const Span = styled.div`
  margin-bottom: 6px;
  font-weight: 500;
  font-size: 14px;  // Smaller font size for the percentage change

  @media (max-width: 600px) {
    font-size: 10px;  // Smaller percentage font size on small screens
  }

  ${({ positive, theme }) =>
    positive
      ? `color: ${theme.green};`
      : `color: ${theme.red};`}
`;

const Icon = styled.div`
  height: fit-content;
  padding: 6px;  // Reduced padding for a more compact icon
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;  // Smaller border radius for the icon
  max-width: 40px;  // Smaller icon size
  max-height: 40px;
  flex-shrink: 0;  // Prevent shrinking
  flex-grow: 0;  // Prevent growing

  ${({ color, bg }) => `
    background: ${bg};
    color: ${color};
  `}

  @media (max-width: 600px) {
    align-self: center; // Center the icon on smaller screens
  }

  @media (min-width: 600px) and (max-width: 1024px) {
    align-self: center; // Ensure alignment for tablet screens
    margin: auto; // Center horizontally within its parent container
  }

  @media (min-width: 1025px) {
    align-self: flex-start; // Align to the start for larger screens
  }
`;

const Desc = styled.div`
  font-size: 12px;  // Smaller description font size
  color: ${({ theme }) => theme.text_secondary + "90"};
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 10px;  // Smaller description font size on small screens
  }
`;

const CountsCard = ({ item, data }) => {
  const value = data && data[item.key] ? data[item.key].toFixed(2) : "N/A"; // Ensure value exists

  return (
    <Card>
      <Left>
        <Title>{item.name}</Title>
        <Value>
          {value}
          <Unit>{item.unit}</Unit>
          <Span positive>(+10%)</Span>
        </Value>
        <Desc>{item.desc}</Desc>
      </Left>
      <Icon color={item.color} bg={item.lightColor}>
        {item.icon}
      </Icon>
    </Card>
  );
};

export default CountsCard;
