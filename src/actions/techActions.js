import {
	GET_TECHS,
	ADD_TECH,
	DELETE_TECH,
	SET_LOADING,
	TECHS_ERROR,
} from "./types";

// get tech from server
export const getTechs = () => async (dispatch) => {
	try {
		setLoading();
		const res = await fetch("/techs");
		const data = await res.json();
		dispatch({
			type: GET_TECHS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: TECHS_ERROR,
			payload: err.response.statusText,
		});
	}
};

// add tech from server
export const addTech = (tech) => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch("/techs", {
			method: "POST",
			body: JSON.stringify(tech),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await res.json();
		dispatch({
			type: ADD_TECH,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: TECHS_ERROR,
			payload: err.response.statusText,
		});
	}
};

// add tech from server
export const deleteTech = (id) => async (dispatch) => {
	try {
		setLoading();
		console.log("delete tech ", id);
		await fetch(`/techs/${id}`);

		dispatch({
			type: DELETE_TECH,
			payload: id,
		});
	} catch (err) {
		dispatch({
			type: TECHS_ERROR,
			payload: err.response.statusText,
		});
	}
};

// set loading to true
export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};
