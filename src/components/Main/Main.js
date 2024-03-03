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
	console.log(action);
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
		console.log("Updating times");
		let newAvailableTimes = fetchAPI(selectedDate);
		dispatch({ type: "UPDATE_TIMES", payload: newAvailableTimes });
	};

	const submitForm = (formData) => {
		console.log('submittone 2')
		let result = submitAPI(formData);
		dispatch({ type: "SUBMITTED", payload: result });
		console.log('submittone 2', result)
		!!result && navigate("/confirmation");
	};

	return (
		<main>
			{/* {React.Children.map(children, (child) =>
				React.cloneElement(child, {
					availableTimes: state.availableTimes,
					updateTimes: updateTimes,
					submitForm: submitForm,
					...props,
				})
			)} */}
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
