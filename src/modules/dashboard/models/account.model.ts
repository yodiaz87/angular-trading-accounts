export interface AccountResponse {
  accounts: Account[];
  total: number;
}

export interface Account {
  name: string;
  totalCash: number;
  todayPercent: number;
  todayCashChange: number;
}
