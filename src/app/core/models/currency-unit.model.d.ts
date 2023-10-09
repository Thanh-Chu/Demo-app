import { SupportedCurrency } from "src/app/constants";

export interface CurrencyUnit{
    symbol: string;
    name: string;
    code: SupportedCurrency;
}