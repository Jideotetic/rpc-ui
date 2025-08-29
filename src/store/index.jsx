import * as React from "react";
import { createContext, useContext, useReducer, useCallback } from "react";

import { actionHandler } from "./middlewares";
import mainReducer, { initialState } from "./reducers";

export const GlobalStore = createContext({});

export const useGlobalStore = () => useContext(GlobalStore);

export default function Provider({ children }) {
	const [state, dispatchBase] = useReducer(mainReducer, initialState);
	const dispatch = useCallback(actionHandler(dispatchBase, state), []);

	return (
		<GlobalStore.Provider value={{ state, dispatch }}>
			{children}
		</GlobalStore.Provider>
	);
}
