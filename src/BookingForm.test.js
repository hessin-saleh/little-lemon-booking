// src/BookingForm.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './Main';

describe('Booking Form & State Management', () => {
  
  test('Renders the Choose date label', () => {
    render(<BookingForm availableTimes={[]} dispatch={() => {}} submitForm={() => {}} />);
    const labelElement = screen.getByText(/Choose date/i);
    expect(labelElement).toBeInTheDocument();
  });

  test('Validates HTML5 attributes are applied to inputs', () => {
    render(<BookingForm availableTimes={[]} dispatch={() => {}} submitForm={() => {}} />);
    
    const dateInput = screen.getByLabelText(/Choose date/i);
    expect(dateInput).toHaveAttribute('required');

    const guestsInput = screen.getByLabelText(/Number of guests/i);
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
  });

  test('initializeTimes function returns a non-empty array', () => {
    const times = initializeTimes();
    expect(times.length).toBeGreaterThan(0);
  });

  test('updateTimes function returns the same state if action type is invalid', () => {
    const initialState = ['17:00', '18:00'];
    const action = { type: 'INVALID_ACTION' };
    const newState = updateTimes(initialState, action);
    expect(newState).toEqual(initialState);
  });
});