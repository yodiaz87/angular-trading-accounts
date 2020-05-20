import {AccountResponse} from '../models/account.model';

export const DATA: AccountResponse = {

  accounts: [
    {
      prefix: 'IRA',
      code: '5200',
      totalCash: '5,763.36',
      todayPercent: '-0.08',
      todayCashChange: '8,916.69',
      isGain: -1 // loosing
    },
    {
      prefix: 'AAA',
      code: '3810',
      totalCash: '10,050,054.07',
      todayPercent: '+0.07',
      todayCashChange: '8,916.69',
      isGain: 1
    },
    {
      prefix: 'REG',
      code: '2019',
      totalCash: '13,465,679.34',
      todayPercent: '0.00',
      todayCashChange: '0.00',
      isGain: 0
    },
    {
      prefix: 'AAA',
      code: '1812',
      totalCash: '2,010,926.10',
      todayPercent: '+0.21',
      todayCashChange: '38,881.63',
      isGain: 1
    },
    {
      prefix: 'IRA',
      code: '0146',
      totalCash: '15,884,302.39',
      todayPercent: '-0.03',
      todayCashChange: '7,430.83',
      isGain: -1
    },
    {
      prefix: 'AAA',
      code: '0029',
      totalCash: '39,160,334.42',
      todayPercent: '-0.07',
      todayCashChange: '31,435.87',
      isGain: -1
    }
  ],
  total: 6

};
