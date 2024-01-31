import RadioButton from './index';

export default {
  title: 'Action/RadioButton',
  component: RadioButton,
  argTypes: {}
};

const Template = (args) => (
  <RadioButton {...args} />
)

export const Default = Template.bind({});
Default.args = {
  label: 'Check me!',
  checked: false
}

export const onChecked = Template.bind({});
onChecked.args = {
  label: 'I am checked!',
  checked: true,
}