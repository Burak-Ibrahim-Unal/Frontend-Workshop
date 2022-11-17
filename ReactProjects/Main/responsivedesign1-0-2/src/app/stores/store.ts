import { createContext, useContext } from 'react';
import CommonStore from './commonStore';
import ModalStore from './modalStore';
import StockStore from './stockStore';
import UserStore from './userStore';


interface Store {
    stockStore: StockStore,
    commonStore: CommonStore,
    modalStore: ModalStore,
    userStore: UserStore,

}

export const store: Store = {
    stockStore: new StockStore(),
    commonStore: new CommonStore(),
    modalStore: new ModalStore(),
    userStore: new UserStore(),

}


export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}
