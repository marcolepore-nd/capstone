import React, { useEffect, useState } from "react";
import Centerer from "components/Centerer/Centerer";
import Button from "components/Button/Button";
import "./BookingForm.scss";

const BookingForm = (props) => {
  let currentDate = new Date().toISOString().substr(0, 10);
  const [date, setDate] = useState(currentDate);
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [valid, setValid] = useState(false);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    const newDate = selectedDate < currentDate ? currentDate : selectedDate;
    setDate(newDate);
    setTime("");
    props.updateTimes(newDate);
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
		console.log('submittone')
    e.preventDefault();
    let formData = {
      date,
      time,
      guests,
      occasion,
    };
    props.submitForm(formData);
  };

  useEffect(() => {
    if (date && time && guests && occasion) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [date, time, guests, occasion]);

  return (
    <Centerer column>
      <form className="bookingForm_form" onSubmit={handleSubmit}>
        {console.log("props", props)}
        {/* DATE INPUT */}
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          min={currentDate}
          aria-label="Choose date"
        />

        {/* TIME INPUT */}
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          type="select"
          value={time}
          onChange={handleTimeChange}
          aria-label="Choose time"
        >
					<option value="">Select a time</option>
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
          type="select"
          value={occasion}
          onChange={handleOccasionChange}
          aria-label="Occasion"
        >
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Other</option>
        </select>

        {/* SUBMIT BUTTON */}
        <Button
          type="submit"
          label="Make your reservation"
          aria-label="Make your reservation"
          disabled={!valid}
        />
      </form>
    </Centerer>
  );
};

export default BookingForm;
