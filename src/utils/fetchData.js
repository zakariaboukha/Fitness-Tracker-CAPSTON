
// Exercise API options
export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'wger.de/api/v2/',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY, // Ensure this key is stored in a .env file
  },
};

// Workout Plan API details
const workoutPlanUrl =
  'https://ai-workout-planner-exercise-fitness-nutrition-guide.p.rapidapi.com/generateWorkoutPlan?noqueue=1';
const workoutPlanOptions = {
  method: 'POST',
  headers: {
    'x-rapidapi-key': '53ab99d265mshad12d63841fb6e2p140943jsnf17280186793',// Ensure this key is stored in a .env file
    'x-rapidapi-host': 'ai-workout-planner-exercise-fitness-nutrition-guide.p.rapidapi.com',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    goal: 'Build muscle',
    fitness_level: 'Intermediate',
    preferences: ['Weight training', 'Cardio'],
    health_conditions: ['None'],
    schedule: {
      days_per_week: 4,
      session_duration: 60,
    },
    plan_duration_weeks: 4,
    lang: 'en',
  }),
};

// Fetch data utility
export const fetchData = async (url, options) => {
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

// Fetch workout plan example
export const fetchWorkoutPlan = async () => {
  try {
    const workoutPlan = await fetchData(workoutPlanUrl, workoutPlanOptions);
    console.log('Workout Plan:', workoutPlan);
    return workoutPlan;
  } catch (error) {
    console.error('Error fetching workout plan:', error);
    return null;
  }
};

