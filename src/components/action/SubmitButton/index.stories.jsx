import SubmitButton from './index';

export default {
  title: 'Action/SubmitButton',
  component: SubmitButton,
  argTypes: {}
};

const Template = (args) => (
  <SubmitButton {...args} />
)

export const Default = Template.bind({});
Default.args = {
  label: 'Submit'
}
