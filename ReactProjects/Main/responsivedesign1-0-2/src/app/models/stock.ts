export interface Stock {
    ItemMasterId: string;
    SkuCode: string;
    Stock: number;
    STD: number;
    BLK: number;
    FreeStock: number;
    ReservedStock: number;
    SafetyStock: number;
    CorrectionQuantity: number;
    WarehouseStock: number;
    Description: string;
    Color: string;
    Size: string;
    CustomerAccountCode: string;
}

export class StockFormValues {
    id?: string = undefined;
    description: string = "";


    constructor(stock?: StockFormValues) {
        if (stock) {
            this.id = stock.id;
            this.description = stock.description;
        }
    }
}