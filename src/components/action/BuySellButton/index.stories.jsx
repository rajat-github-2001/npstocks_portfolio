import BuySellButton from './index';

export default {
  title: 'Action/BuySellButton',
  component: BuySellButton,
  argTypes: {}
};

const Template = (args) => (
  <BuySellButton {...args} />
)

export const Default = Template.bind({});
Default.args = {
  label: 'Buy'
}

export const Sell = Template.bind({});
Sell.args = { 
  label: 'Sell'
}
