import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import Authimage from "../../utils/images/Authimage2.jpeg";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import WorkoutCard from "../cards/WorkoutCard";
import { fetchData } from "../../utils/fetchData"; // Assuming fetchData is correctly set up

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
  background-image: url(${Authimage});
  background-size: cover;
  background-position: center;
  @media (max-width: 400px) {
    padding: 10px 0px;
  }
`;

const Wrapper = styled.div`
  flex: 1;
  max-width: 1600px;
  display: flex;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
    flex-direction: column;
  }
  @media (max-width: 400px) {
    padding: 0px 10px;
  }
`;

const GlassContainer = styled.div`
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1); /* Frosted glass effect */
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  padding: 20px;
  @media (max-width: 600px) {
    padding: 15px;
  }
  @media (max-width: 400px) {
    padding: 10px;
  }
`;

const Left = styled(GlassContainer)`
  flex: 0.2;
  height: fit-content;
  @media (max-width: 600px) {
    flex: 1;
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 12px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

const CalendarWrapper = styled.div`
  background: white;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  @media (max-width: 600px) {
    padding: 5px;
  }
  @media (max-width: 400px) {
    padding: 0px;
  }
`;

const Right = styled(GlassContainer)`
  flex: 1;
  backdrop-filter: blur(10px);
  height: fit-content;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
  @media (max-width: 400px) {
    padding: 0px 10px;
  }
`;

const SecTiltle = styled.div`
  font-size: 22px;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  @media (max-width: 600px) {
    font-size: 18px;
  }
  @media (max-width: 400px) {
    font-size: 16px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 100px;
  @media (max-width: 600px) {
    gap: 12px;
  }
  @media (max-width: 400px) {
    gap: 6px;
  }
`;

const Workouts = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [workouts, setWorkouts] = useState([]);
  
  // Fetch workouts based on the selected date
  const fetchWorkouts = async (date) => {
    try {
      const response = await fetchData(`/api/get-workouts?date=${date}`, { method: "GET" });
      setWorkouts(response.workouts || []); // Assuming response contains workouts for that date
    } catch (error) {
      console.error("Error fetching workouts:", error);
    }
  };

  // Handle date change from the calendar
  const handleDateChange = (newDate) => {
    const formattedDate = newDate.format("YYYY-MM-DD"); // Assuming the API accepts this format
    setSelectedDate(formattedDate);
    fetchWorkouts(formattedDate);
  };

  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Left>
            <Title>Select Date</Title>
            <CalendarWrapper>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                  sx={{
                    width: '195px', 
                    height: '300px', 
                    '@media (min-width: 600px)': { width: '300px', height: '400px' },
                    '@media (min-width: 1024px)': { width: '400px', height: '500px' },
                  }}
                  onChange={handleDateChange} // Set the selected date
                />
              </LocalizationProvider>
            </CalendarWrapper>
          </Left>
          <Right>
            <Section>
              <SecTiltle>Today's Workout</SecTiltle>
              <CardWrapper>
              <WorkoutCard />
                {workouts.length > 0 ? (
                  workouts.map((workout, index) => (
                    <WorkoutCard key={index} workout={workout} />
                  ))
                ) : (
                  <p>No workouts available for this date.</p>
                )}
              </CardWrapper>
            </Section>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Workouts;
