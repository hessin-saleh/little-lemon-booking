// src/Main.jsx
import React, { useReducer } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "./api";

export const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    return fetchAPI(action.payload);
  }
  return state;
};

export const initializeTimes = () => {
  // جلب الأوقات المتاحة لليوم الحالي عند التحميل الأول
  return fetchAPI(new Date());
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const submitForm = (formData) => {
    const isSubmitted = submitAPI(formData);
    if (isSubmitted) {
      alert(`Reservation Successful!\nDate: ${formData.date}\nTime: ${formData.time}\nGuests: ${formData.guests}\nOccasion: ${formData.occasion}`);
    } else {
      alert("Failed to submit reservation. Please try again.");
    }
  };

  return (
    <main style={{ padding: "50px 20px", fontFamily: "sans-serif" }}>
      <section>
        <h1 style={{ textAlign: "center", color: "#495E57", fontSize: "2.5rem" }}>Reserve a Table</h1>
        <p style={{ textAlign: "center", color: "#666", marginBottom: "40px" }}>
          Experience the best dining at Little Lemon. Please fill out the form below.
        </p>
        <BookingForm 
          availableTimes={availableTimes} 
          dispatch={dispatch} 
          submitForm={submitForm} 
        />
      </section>
    </main>
  );
};

export default Main;