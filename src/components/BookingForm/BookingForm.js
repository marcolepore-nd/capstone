import React, { useEffect, useState } from "react";
import Centerer from "components/Centerer/Centerer";
import Button from "components/Button/Button";
import "./BookingForm.scss";

const BookingForm = (props) => {
	let currentDate = new Date().toISOString().substr(0, 10);
	const [date, setDate] = useState(currentDate);
	const [time, setTime] = useState("");
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
		console.log("submittone");
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
		<div className="bookingForm_container">
			<Centerer column>
				{/* FORM LABEL */}
				<h3>Reserve your table</h3>

				<form className="bookingForm_form" onSubmit={handleSubmit}>

					{/* DATE INPUT */}
					<div className="bookingForm_inputWrap">
						<label htmlFor="res-date">
							<h4>Choose date</h4>
						</label>
						<input
							type="date"
							id="res-date"
							value={date}
							onChange={handleDateChange}
							min={currentDate}
							aria-label="Choose date"
						/>
					</div>

					{/* TIME INPUT */}
					<div className="bookingForm_inputWrap">
						<label htmlFor="res-time">
							<h4>Choose time</h4>
						</label>
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
					</div>

					{/* GUESTS INPUT */}
					<div className="bookingForm_inputWrap">
						<label htmlFor="guests">
							<h4>Number of guests</h4>
						</label>
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
					</div>

					{/* OCCASION INPUT */}
					<div className="bookingForm_inputWrap">
						<label htmlFor="occasion">
							<h4>Occasion</h4>
						</label>
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
					</div>

					{/* SUBMIT BUTTON */}
					<div className="bookingForm_inputWrap">
						<Button
							type="submit"
							label="Reserve"
							aria-label="Reserve"
							disabled={!valid}
						/>
					</div>
				</form>
			</Centerer>
		</div>
	);
};

export default BookingForm;
