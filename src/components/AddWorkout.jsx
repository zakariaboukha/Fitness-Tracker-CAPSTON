import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";
import { fetchData } from "../utils/fetchData"; // Utility function for fetching data

const Card = styled.div`
  flex: 1;
  min-width: 280px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: rgba(226, 234, 244, 0.8);
  @media (max-width: 600px) {
    padding: 16px;
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const AddWorkout = ({ token }) => {
  const [workout, setWorkout] = useState(""); // State to track workout input
  const [buttonLoading, setButtonLoading] = useState(false); // State to track button loading

  const addNewWorkout = async () => {
    if (!workout.trim()) {
      alert("Workout details cannot be empty!");
      return;
    }

    setButtonLoading(true);

    try {
      // API Endpoint and options
      const url =
        "https://ai-workout-planner-exercise-fitness-nutrition-guide.p.rapidapi.com/generateWorkoutPlan?noqueue=1";

      const options = {
        method: "POST",
        headers: {
          "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
          "x-rapidapi-host":
            "ai-workout-planner-exercise-fitness-nutrition-guide.p.rapidapi.com",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          goal: "Build muscle", // Example goal, adjust dynamically if needed
          fitness_level: "Intermediate",
          preferences: ["Weight training", "Cardio"],
          health_conditions: ["None"],
          schedule: {
            days_per_week: 4,
            session_duration: 60,
          },
          plan_duration_weeks: 4,
          lang: "en",
        }),
      };

      // Fetch data using utility function
      const response = await fetchData(url, options);
      console.log("Workout added successfully:", response);
      alert("Workout added successfully!");
      setWorkout(""); // Clear the input field after successful addition
    } catch (error) {
      console.error("Error adding workout:", error);
      alert("Failed to add workout. Please try again.");
    } finally {
      setButtonLoading(false);
    }
  };

  return (
    <Card>
      <Title>Add New Workout</Title>
      <TextInput
        label="Workout"
        textArea
        rows={10}
        placeholder={`Enter in this format:

#Category
-Workout Name
-Sets
-Reps
-Weight
-Duration`}
        value={workout}
        handelChange={(e) => setWorkout(e.target.value)}
      />
      <Button
        text="Add Workout"
        small
        onClick={addNewWorkout} // Call the addNewWorkout function
        isLoading={buttonLoading}
        isDisabled={buttonLoading}
      />
    </Card>
  );
};

export default AddWorkout;
