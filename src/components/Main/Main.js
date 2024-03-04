import React, { useEffect, useReducer } from "react";
import { fetchAPI, submitAPI } from "api/bookingAPI";
import { useNavigate } from "react-router-dom";
import BookingForm from "components/BookingForm/BookingForm";
import "./Main.scss";

export const initializeTimes = () => {
	let currentDate = new Date().toISOString().substr(0, 10);
	let availableTimes = fetchAPI(currentDate);
	return {
		availableTimes: availableTimes,
		submitted: false,
	};
};

const reducer = (state, action) => {
	switch (action.type) {
		case "UPDATE_TIMES":
			state.availableTimes = action.payload;
			return state;
		case "SUBMITTED":
			state.submitted = action.payload;
			return state;
		default:
			return state;
	}
};

const Main = ({ children, ...props }) => {
	const navigate = useNavigate();
	const [state, dispatch] = useReducer(reducer, initializeTimes());

	const updateTimes = (selectedDate) => {
		let newAvailableTimes = fetchAPI(selectedDate);
		dispatch({ type: "UPDATE_TIMES", payload: newAvailableTimes });
	};

	const submitForm = (formData) => {
		let result = submitAPI(formData);
		dispatch({ type: "SUBMITTED", payload: result });
		!!result && navigate("/confirmation");
	};

	return (
		<main>
			<BookingForm
				availableTimes={state.availableTimes}
				updateTimes={updateTimes}
				submitForm={submitForm}
				{...props}
			/>
		</main>
	);
};

export default Main;
