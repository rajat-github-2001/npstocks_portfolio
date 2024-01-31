import DateInput from './index';
import { useState } from 'react'

export default {
  title: 'input/DateInput',
  component: DateInput,
  argTypes: {}
};

const Template = (args) => {
  const [selectedDate, setSelectedDate] = useState(args.data !== '' ? args.data : null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return <DateInput {...args} selected={selectedDate} onChange={handleDateChange}  />
}

export const Default = Template.bind({});
Default.args = {
 data: ''
}

export const Edit = Template.bind({});
Edit.args = {
 data: new Date()
}

