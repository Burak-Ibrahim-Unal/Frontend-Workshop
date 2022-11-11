export interface Stock {
    id: string;
    title: string;
    date: Date | null;
    description: string;
    category: string;
    city: string;
    venue: string;
    hostUsername: string;
    isCancelled: boolean;
    isGoing: boolean;
    isHost: boolean;

}


export class StockFormValues {
    id?: string = undefined;
    title: string = "";
    category: string = "";
    description: string = "";
    date: Date | null = null;
    city: string = "";
    venue: string = "";

    
    constructor(stock?: StockFormValues) {
        if (stock) {
            this.id = stock.id;
            this.category = stock.category;
            this.title = stock.title;
            this.description = stock.description;
            this.city = stock.city;
            this.venue = stock.venue;
            this.date = stock.date;
        }
    }
}