import SearchDropdown from './index';
import { useState } from 'react'

export default {
  title: 'Dropdown/SearchDropdown',
  component: SearchDropdown,
  argTypes: {}
};

const tickerOptions = ['NABIL', 'SBL', 'KBL'];

const Template = (args) => {
  const [selectedTicker, setSelectedTicker] = useState(args.data !== '' ? args.data : '');

  const handleTickerSelect = (option) => {
    setSelectedTicker(option);
  };

  return <SearchDropdown {...args} options={tickerOptions} selected={selectedTicker} onSelect={handleTickerSelect}  />
}

export const Default = Template.bind({});
Default.args = {
  data: ''
}

export const Edit = Template.bind({})
Edit.args = {
  data: 'ADBL'
}