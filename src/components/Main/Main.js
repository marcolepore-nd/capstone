import React, { useReducer } from "react";

const initializeTimes = () => {
	return [
		"17:00",
		"18:00",
		"19:00",
		"20:00",
		"21:00",
		"22:00",
	];
};

const timesReducer = (state, action) => {
	switch (action.type) {
		case "UPDATE_TIMES":
			return action.payload;
		default:
			return state;
	}
};

const Main = ({ children, ...props }) => {
	const [availableTimes, dispatch] = useReducer(timesReducer, initializeTimes());

	const updateTimes = (selectedDate) => {
		// Logic to update availableTimes based on selectedDate
		// For now, returning the same availableTimes regardless of the date
		dispatch({ type: "UPDATE_TIMES", payload: availableTimes });
	};

	return (
		<main>
			{React.Children.map(children, (child) =>
				React.cloneElement(child, {
					availableTimes: availableTimes,
					setAvailableTimes: dispatch,
					updateTimes: updateTimes,
					...props,
				})
			)}
		</main>
	);
};

export default Main;
