import assetStore from "./assetsStore";
import authStates from "./authStore";
import { logger } from "./middlewares";

export const initialState = {
	authStore: authStates.initialState,
	assetsStore: assetStore.initialState,
};

export default function mainReducer(state, action) {
	const { authStore, assetsStore } = state;

	const currentState = {
		authStore: authStates.reducer(authStore, action),
		assetsStore: assetStore.reducer(assetsStore, action),
	};

	logger(action, state, currentState);

	return currentState;
}
