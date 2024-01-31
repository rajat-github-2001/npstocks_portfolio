import Button from './index';

export default {
  title: 'Action/Button',
  component: Button,
  argTypes: {}
};

const Template = (args) => (
  <Button {...args} />
)

export const Default = Template.bind({});
Default.args = {
  label: 'Click me!',
  onClick: () => {
    console.log('I am clicked');
  }
}