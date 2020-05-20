export interface AccountResponse {
  accounts: Account[];
  total: number;
}

export interface Account {
  prefix: string;
  code: string;
  totalCash: string;
  todayPercent: string;
  todayCashChange: string;
  isGain: number;
}
