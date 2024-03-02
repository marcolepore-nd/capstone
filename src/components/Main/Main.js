import React, { useReducer } from "react";
import { fetchAPI, submitAPI } from "api/bookingAPI";

const initializeTimes = () => {
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
			state.submitteed = action.payload;
			return state;
		default:
			return state;
	}
};

const Main = ({ children, ...props }) => {
	const [state, dispatch] = useReducer(reducer, initializeTimes());

	const updateTimes = (selectedDate) => {
		let newAvailableTimes = fetchAPI(selectedDate);
		dispatch({ type: "UPDATE_TIMES", payload: newAvailableTimes });
	};

	const submitForm = (formData) => {
		let result = submitAPI(formData);
		dispatch({ type: "SUBMITTED", payload: result });
	}

	return (
		<main>
			{React.Children.map(children, (child) =>
				React.cloneElement(child, {
					availableTimes: state.availableTimes,
					updateTimes: updateTimes,
					submitForm: submitForm,
					...props,
				})
			)}
		</main>
	);
};

export default Main;
