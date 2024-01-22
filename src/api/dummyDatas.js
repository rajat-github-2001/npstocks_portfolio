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