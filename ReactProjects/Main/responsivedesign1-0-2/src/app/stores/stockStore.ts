import { makeAutoObservable, runInAction } from 'mobx';
import agent from "../api/agent";
import { Stock } from '../models/stock';
// import { format } from "date-fns";
import { store } from './store';



export default class StockStore {
      stockRegistry = new Map<string, Stock>();
      selectedStock: Stock | undefined = undefined;
      editMode = false;
      loading = false;
      loadingInitial = false;

      constructor() {
            makeAutoObservable(this)
      }



      loadStocks = async () => {
            this.loadingInitial = true;
            try {

                  const stocks = await agent.Stocks.list();
                  stocks.forEach(stock => {
                        this.setStock(stock);
                  })
                  this.setLoadingInitial(false);


            } catch (error) {
                  console.log(error)
                  this.setLoadingInitial(false);
            }

      }

      private setStock = (stock: Stock) => {
        const user = store.userStore.user;
        if (user) {
              stock.isGoing = stock.attendees!.some(a => a.username === user.username);
              stock.isHost = stock.hostUsername === user.username;
              stock.host = stock.attendees?.find(x => x.username === stock.hostUsername);
        }
        stock.date = new Date(stock.date!);
        this.stockRegistry.set(stock.id, stock);
  }



      loadStock = async (id: string) => {
            let stock = this.getStock(id);

            if (stock) {
                  this.selectedStock = stock;
                  return stock;

            } else {
                  this.loadingInitial = true;

                  try {
                        stock = await agent.Activities.details(id);
                        this.setStock(stock);
                        runInAction(() => {
                              this.selectedStock = stock;
                        })
                        this.setLoadingInitial(false);
                        return stock;
                  } catch (error) {
                        console.log(error);
                        this.setLoadingInitial(false);
                  }
            }
      }



      private getStock = (id: string) => {
            return this.stockRegistry.get(id);
      }

      setLoadingInitial = (state: boolean) => {
            this.loadingInitial = state;
      }

      createStock = async (stock: StockFormValues) => {
            const user = store.userStore.user;
            const attendee = new Profile(user!);
            try {
                  await agent.Activities.create(stock);
                  const newStock = new Stock(stock);
                  newStock.hostUsername = user!.username;
                  newStock.attendees = [attendee];
                  this.setStock(newStock);

                  runInAction(() => {
                        this.selectedStock = newStock;
                  })
            } catch (error) {
                  console.log(error);
            }
      }

      updateStock = async (stock: StockFormValues) => {
            try {
                  await agent.Activities.update(stock);
                  runInAction(() => {
                        if (stock.id) {
                              let updatedStock = { ...this.getStock(stock.id), ...stock };
                              this.stockRegistry.set(stock.id, updatedStock as Stock);
                              this.selectedStock = updatedStock as Stock;
                        }
                  })
            } catch (error) {
                  console.log(error);
            }
      }

      deleteStock = async (id: string) => {
            this.loading = true;
            try {
                  await agent.Activities.delete(id);
                  runInAction(() => {
                        this.stockRegistry.delete(id);
                        this.loading = false;
                  })
            } catch (error) {
                  console.log(error);
                  runInAction(() => {
                        this.loading = false;
                  })
            }
      }

      updateAttendance = async () => {
            const user = store.userStore.user;
            this.loading = true;
            try {
                  await agent.Activities.attend(this.selectedStock!.id);
                  runInAction(() => {
                        if (this.selectedStock?.isGoing) {
                              this.selectedStock.attendees =
                                    this.selectedStock.attendees?.filter(a => a.username !== user?.username);
                              this.selectedStock.isGoing = false;
                        } else {
                              const attendee = new Profile(user!);
                              this.selectedStock?.attendees?.push(attendee);
                              this.selectedStock!.isGoing = true;
                        }
                        this.stockRegistry.set(this.selectedStock!.id, this.selectedStock!);
                  });
            } catch (error) {
                  console.log(error);
            } finally {
                  runInAction(() => this.loading = false);
            }
      }

      cancelStockToggle = async () => {
            this.loading = true;
            try {
                  await agent.Activities.attend(this.selectedStock!.id);
                  runInAction(() => {
                        this.selectedStock!.isCancelled = !this.selectedStock?.isCancelled;
                        this.stockRegistry.set(this.selectedStock!.id, this.selectedStock!);
                  })
            } catch (error) {
                  console.log(error);
            }
            finally {
                  runInAction(() => this.loading = false);
            }
      }

      clearSelectedStock = () => {
            this.selectedStock = undefined;
      }

}