import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./state";
import { ActionsTypes, addItemToShopAction } from "./itemsReducer";

export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>;

type ListItemsType = {
	type: string;
	id: number;
	sku: string;
	title: string;
	regular_price: { currency: string; value: number };
	image: string;
	brand2: number;
};

async function http<T>(request: RequestInfo): Promise<T> {
	const response = await fetch(request);
	return await response.json();
}

export const getListItems = (): ThunkType => {
	return async (dispatch, getState) => {
		const response = await fetch("https://raw.githubusercontent.com/AzureBin/react-test/master/assets/products.json");

		// let response = await fetch("https://raw.githubusercontent.com/AzureBin/react-test/master/assets/products.json");
		let sdf: ListItemsType[] = [];
		if (response.ok) {
			sdf = (await response.json()) as ListItemsType[];
		}
		debugger;
		console.log(sdf);
	};
};
