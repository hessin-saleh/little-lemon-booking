// src/BookingForm.jsx
import React, { useState } from "react";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    // تحديث الأوقات المتاحة بناءً على التاريخ الجديد
    dispatch({ type: "UPDATE_TIMES", payload: new Date(selectedDate) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm({ date, time, guests, occasion });
  };

  // التحقق من صحة البيانات لتفعيل أو تعطيل زر الإرسال
  const isFormValid = date !== "" && time !== "" && guests >= 1 && guests <= 10 && occasion !== "";

  return (
    <form 
      style={{ display: "grid", maxWidth: "400px", gap: "20px", margin: "0 auto", padding: "20px", backgroundColor: "#f4f4f4", borderRadius: "10px" }} 
      onSubmit={handleSubmit}
      aria-label="Table Booking Form"
    >
      <label htmlFor="res-date" style={{ fontWeight: "bold", color: "#495E57" }}>Choose date *</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} required aria-required="true" style={{ padding: "10px" }} />

      <label htmlFor="res-time" style={{ fontWeight: "bold", color: "#495E57" }}>Choose time *</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required aria-required="true" style={{ padding: "10px" }}>
        <option value="">Select a Time</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests" style={{ fontWeight: "bold", color: "#495E57" }}>Number of guests *</label>
      <input 
        type="number" 
        placeholder="1" 
        min="1" 
        max="10" 
        id="guests" 
        value={guests} 
        onChange={(e) => setGuests(e.target.value)} 
        required 
        aria-required="true"
        style={{ padding: "10px" }}
      />

      <label htmlFor="occasion" style={{ fontWeight: "bold", color: "#495E57" }}>Occasion *</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required aria-required="true" style={{ padding: "10px" }}>
        <option value="">Select an Occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button 
        type="submit" 
        aria-label="On Click"
        disabled={!isFormValid}
        style={{ 
          padding: "15px", 
          backgroundColor: isFormValid ? "#F4CE14" : "#e0e0e0", 
          color: isFormValid ? "#333" : "#888",
          cursor: isFormValid ? "pointer" : "not-allowed", 
          border: "none", 
          borderRadius: "8px", 
          fontWeight: "bold",
          fontSize: "16px",
          marginTop: "10px"
        }}
      >
        Make Your Reservation
      </button>
    </form>
  );
};

export default BookingForm;