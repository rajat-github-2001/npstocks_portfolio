import NormalDropdown from './index';
import { useState } from 'react'

export default {
  title: 'Dropdown/NormalDropdown',
  component: NormalDropdown,
  argTypes: {}
};

const options = [
  { value: 'Test1', label: 'Test1' },
  { value: 'Test2', label: 'Test2' },
  { value: 'Test3', label: 'Test3' },
]

const Template = (args) => {
  const [selectedDropdownOption, setSelectedDropdownOption] = useState(options[0]);

  const handleSelect = (option) => {
    setSelectedDropdownOption(option);
  };

  return <NormalDropdown {...args} options={options} selectedOption={selectedDropdownOption} onSelect={handleSelect} />
}

export const Default = Template.bind({});
Default.args = {
  iconName: 'DownBlack.svg',
}
