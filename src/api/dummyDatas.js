export const gainsDummyData = {
  heading: { value: '5.5 Cr', label: 'Total Portfolio Value' },
  gains: [
    { value: '+18,234.10', label: "Day's Gain" },
    { value: '-12.12 lac', label: "Unrealised Gain" },
    { value: '+9.99%', label: "Day's Gain %" },
    { value: '-99.99%', label: "Unrealised Gain %" },
    { value: '+18,234.10', percent: '+9.99%', label: "Realised Gain" },
    { value: '-12.12 lac', percent: '-99.99%', label: "Overall Gain" },
  ],
};

export const portfolioDetailsDummyData = {
  heading: { value: '66 k', label: 'Total Portfolio Value' },
  gains: [
    { value: '+11,234.10', label: "Day's Gain" },
    { value: '-10.12 lac', label: "Unrealised Gain" },
    { value: '+10.99%', label: "Day's Gain %" },
    { value: '-99.99%', label: "Unrealised Gain %" },
    { value: '+18,234.10', percent: '+9.99%', label: "Realised Gain" },
    { value: '-12.12 lac', percent: '-99.99%', label: "Overall Gain" },
  ],
};

export const stocksData = {
  isPercentage: true,
  data: [
    { symbol: 'ADBL', days_gain: '200', unrealised_gain: '100', days_gain_percentage: '+0.53%', unrealised_gain_percentage: '+148.00%' },
    { symbol: 'SBL', days_gain: '200', unrealised_gain: '500', days_gain_percentage: '-0.53%', unrealised_gain_percentage: '+148.00%' },
    { symbol: 'NABIL', days_gain: '200', unrealised_gain: '230', days_gain_percentage: '+0.53%', unrealised_gain_percentage: '-148.00%' },
  ]
}

export const stockDetailsDummyData = {
  heading: { value: '34 Cr', label: 'Market Value' },
  gains: [
    { value: '+11,234.10',percent: '+9.99%', label: "Day's Gain" },
    { value: '-10.12 lac', percent: '-99.99%', label: "Unrealised Gain" },
    { value: '+18,234.10', percent: '+9.99%', label: "Realised Gain" },
    { value: '-12.12 lac', percent: '-99.99%', label: "Overall Gain" },
  ],
};

export const shareInfoDummyData = [
  {label: 'Latest Close', value: '841.01'},
  {label: 'Shares Outstanding', value: '3,451'},
  {label: 'Avg Cost', value: '451.91'},
  {label: 'Cost Basis', value: '45.32 lacs'},
]

export const transactionDummyData = [
  {type: { value : 'SECONDARY', label: 'SECONDARY' }, company: 'Agriculture Developent Bank (ADBL)', date: '15/10/2023', transactionId: '1234567', qty: 10, price: 257.10, sebonCommission: 10, dpAmount: 257, brokerCommission: 257, cash: 0, totalAmount: 2605.67, costPerShare: 260.57,},
  {type: { value: 'IPO', label: 'IPO' }, company: 'Agriculture Developent Bank (ADBL)', date: '16/10/2023', transactionId: '12385867', qty: 11, price: 290.10, sebonCommission: 0, dpAmount: 0, brokerCommission: 0, cash: 0, totalAmount: 0, costPerShare: 0},
  {type: { value: 'FPO', label: 'FPO' }, company: 'Agriculture Developent Bank (ADBL)', date: '16/10/2022', transactionId: '1123867', qty: 9, price: 190.10, sebonCommission: 0, dpAmount: 0, brokerCommission: 0, cash: 0, totalAmount: 0, costPerShare: 0},
  {type: { value: 'RIGHT', label: 'RIGHT SHARES' }, company: 'Agriculture Developent Bank (ADBL)', date: '16/10/2021', transactionId: '345867', qty: 6, price: 800.10, sebonCommission: 0, dpAmount: 0, brokerCommission: 0, cash: 0, totalAmount: 0, costPerShare: 0},
  {type: { value: 'BONUS', label: 'BONUS SHARES' }, company: 'Agriculture Developent Bank (ADBL)', date: '16/10/2021', transactionId: '345867', qty: 6, price: 800.10, sebonCommission: 0, dpAmount: 0, brokerCommission: 0, cash: 0, totalAmount: 0, costPerShare: 0},
  {type: { value: 'CASH', label: 'CASH DIVIDEND' }, company: 'Agriculture Developent Bank (ADBL)', date: '10/10/2023', transactionId: '34580', qty: 20, price: 700.10, sebonCommission: 0, dpAmount: 0, brokerCommission: 0, cash: 1000, totalAmount: 0, costPerShare: 0},
  {type: { value: 'SELL', label: 'SELL' }, company: 'Agriculture Developent Bank (ADBL)', date: '10/10/2022', transactionId: '3450900', qty: 0, price: 800.10, sebonCommission: 100, dpAmount: 123, brokerCommission: 343, cash: 0, totalAmount: 0, costPerShare: 0},
]
