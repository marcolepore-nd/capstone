import React, { useState } from "react";

const BookingForm = (props) => {
  let currentDate = new Date().toISOString().substr(0, 10);
  const [date, setDate] = useState(currentDate);
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleDateChange = (e) => {
    setDate(e.target.value);
    props.updateTimes(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
		let formData = {
			date,
			time,
			guests,
			occasion,
		};
		props.submitForm(formData);
  };

  return (
    <form
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      onSubmit={handleSubmit}
    >
      {/* DATE INPUT */}
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        aria-label="Choose date"
      />

      {/* TIME INPUT */}
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={handleTimeChange}
        aria-label="Choose time"
      >
        {props.availableTimes?.map((timeOption) => (
          <option key={timeOption}>{timeOption}</option>
        ))}
      </select>

      {/* GUESTS INPUT */}
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={handleGuestsChange}
        aria-label="Number of guests"
      />

      {/* OCCASION INPUT */}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={handleOccasionChange}
        aria-label="Occasion"
      >
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Other</option>
      </select>

      {/* SUBMIT BUTTON */}
      <input
        type="submit"
        value="Make Your reservation"
        aria-label="Make Your reservation"
      />
    </form>
  );
};

export default BookingForm;
