import { FitnessCenterRounded, TimelapseRounded } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  flex: 1;
  min-width: 300px;
  padding: 16px;  
  border: 1px solid ${({ theme }) => theme.text_primary + "20"};
  border-radius: 12px;  
  display: flex;
  flex-direction: column; 
  gap: 6px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + "15"};
  background: rgba(226, 234, 244, 0.8);

  @media (max-width: 600px) {
    padding: 12px;  
    min-width: 200px;  
  }

  @media (min-width: 600px) {
    flex-direction: row; 
    flex-wrap: wrap; 
    align-items: center;  
  }

  @media (min-width: 1000px) {
    align-items: flex-start;  
  }
`;
const Category = styled.div`
  width: fit-content;
  font-size: 14px;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  background: ${({ theme }) => theme.primary + 20};
  padding: 4px 10px;
  border-radius: 8px;
`;
const Name = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
`;
const Sets = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
  display: flex;
  gap: 6px;
`;
const Flex = styled.div`
  display: flex;
  gap: 16px;
`;
const Details = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const exercises = [
  {
    category: "#legs",
    name: "Back Squat",
    sets: "6 sets X 10 reps",
    weight: "45 kg",
    duration: "30 min",
  },
  {
    category: "#chest",
    name: "Bench Press",
    sets: "4 sets X 8 reps",
    weight: "40 kg",
    duration: "25 min",
  },
  {
    category: "#back",
    name: "Pull-ups",
    sets: "3 sets X 12 reps",
    weight: "body weight",
    duration: "20 min",
  },
  {
    category: "#shoulders",
    name: "Shoulder Press",
    sets: "4 sets X 10 reps",
    weight: "30 kg",
    duration: "25 min",
  },
  {
    category: "#abs",
    name: "Plank",
    sets: "3 sets X 60 sec",
    weight: "body weight",
    duration: "20 min",
  },
];

const WorkoutCard = ({ exercise }) => {
  return (
    <Card>
      <Category>{exercise.category}</Category>
      <Name>{exercise.name}</Name>
      <Sets>Count: {exercise.sets}</Sets>
      <Flex>
        <Details>
          <FitnessCenterRounded sx={{ fontSize: "20px" }} />
          {exercise.weight}
        </Details>
        <Details>
          <TimelapseRounded sx={{ fontSize: "20px" }} />
          {exercise.duration}
        </Details>
      </Flex>
    </Card>
  );
};

const WorkoutCards = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {exercises.map((exercise) => (
        <WorkoutCard key={exercise.name} exercise={exercise} />
      ))}
    </div>
  );
};

export default WorkoutCards;
