import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import Authimage from "../../utils/images/Authimage1.jpeg";
import { counts } from "../../utils/data";
import CountsCard from "../cards/CountsCard";
import WeeklyStatCard from "../cards/WeeklyStatCard";
import CategoryChart from "../cards/CategoryChart";
import AddWorkout from "../AddWorkout";
import WorkoutCard from "../cards/WorkoutCard";
import { fetchData } from "../../utils/fetchData"; // Assuming fetchData is correctly set up

// New BlankDivider component for spacing
const BlankDivider = styled.div`
  width: 100%;
  height: 20px; /* Adjust height as needed */
`;

const BottomBlankDivider = styled.div`
  width: 100%;
  height: 20px; /* Adjust height as needed */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url(${Authimage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const Wrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin-top: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  box-shadow: inset 0 0 10px 5px rgba(66, 66, 153, 0.3);
  overflow-y: auto;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #333;
  text-align: center;
`;

const Flexwrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const ChartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  flex-wrap: wrap;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Siction = styled.div``;
const CardWrapper = styled.div``;

const Dashboard = () => {
  const [workout, setWorkout] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);
  const [todaysWorkouts, setTodaysWorkouts] = useState([]);

  // Fetch today's workouts
  const fetchWorkouts = async () => {
    try {
      const response = await fetchData("/api/get-todays-workouts", { method: "GET" });
      setTodaysWorkouts(response.workouts || []); // Update with API response
    } catch (error) {
      console.error("Error fetching workouts:", error);
    }
  };

  // Add a new workout
  const handleAddNewWorkout = async () => {
    if (!workout.trim()) {
      alert("Workout details cannot be empty!");
      return;
    }

    setButtonLoading(true);
    try {
      const response = await fetchData("/api/add-workout", {
        method: "POST",
        body: JSON.stringify({ details: workout }),
      });
      console.log("Workout added successfully:", response);
      setWorkout("");
      fetchWorkouts(); // Refresh today's workouts
    } catch (error) {
      console.error("Error adding workout:", error);
      alert("Failed to add workout. Please try again.");
    } finally {
      setButtonLoading(false);
    }
  };

  // Fetch workouts on component mount
  useEffect(() => {
    fetchWorkouts();
  }, []);

  const data = {
    totalCaloriesBurnt: 13500,
    totalWorkouts: 6,
    avgCaloriesBurntPerWorkout: 2250,
    totalWeeksCaloriesBurnt: {
      weeks: ["17th", "18th", "19th", "20th", "21th", "22th", "23th"],
      caloriesBurned: [10500, 0, 0, 0, 0, 0, 13500],
    },
    pieChartData: [
      { id: 0, value: 6000, label: "Legs" },
      { id: 1, value: 1500, label: "Back" },
      { id: 2, value: 3750, label: "Shoulder" },
      { id: 3, value: 2250, label: "ABS" },
    ],
  };

  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>Dashboard</Title>
          <Flexwrap>
            {counts.map((item) => (
              <CountsCard key={item.id} item={item} data={data} />
            ))}
          </Flexwrap>

          <BlankDivider />

          <ChartContainer>
            <WeeklyStatCard data={data} />
            <CategoryChart data={data} />
            <AddWorkout
              workout={workout}
              setWorkout={setWorkout}
              addNewWorkout={handleAddNewWorkout}
              buttonLoading={buttonLoading}
            />
          </ChartContainer>

          <BottomBlankDivider />
          <Siction>
            <Title>Today's Workouts</Title>
            <CardWrapper>
              {todaysWorkouts.length > 0 ? (
                todaysWorkouts.map((workout, index) => (
                  <WorkoutCard key={index} workout={workout} />
                ))
              ) : (
                <p>No workouts added for today yet!</p>
              )}
              <WorkoutCard />
              <BottomBlankDivider />
              <BottomBlankDivider />
              <BottomBlankDivider />
            </CardWrapper>
          </Siction>
          <BottomBlankDivider />
        </Wrapper>
      </Container>
    </>
  );
};

export default Dashboard;
