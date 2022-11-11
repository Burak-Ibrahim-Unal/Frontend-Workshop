import { createContext, useContext } from "react";
import CommonStore from "./commonStore";
import StockStore from "./stockStore";

interface Store {
    commonStore: CommonStore,
    stockStore: StockStore,
}


export const store: Store = {
    commonStore: new CommonStore(),
    stockStore: new StockStore(),


}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}
