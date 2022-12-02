import Card from './Card.vue'

export default {
    title: 'Card',
    component: Card,
    argTypes: {
        title: 'String',
        subHeader: 'String',
        media: 'String',
        supportingText: 'String',
        buttonText: 'String'
    }
}

const Template = (args) => ({
    components: { Card },
    setup() {
        return {args}
    },
    template: '<Card v-bind="args" />'
})

export const Primary = Template.bind({})
Primary.args = { title: 'Example title', subHeader: 'Secondary text' }

export const Secondary = Template.bind({})
Secondary.args = { title: 'Example title', subHeader: 'Media text', mediaHref: 'placeholder.svg' }

export const Third = Template.bind({})
Third.args = { title: 'Example title', subHeader: 'Example with supporting text', mediaHref: 'placeholder.svg', supportingText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }

export const Fourth = Template.bind({})
Fourth.args = { 
    title: 'Example title', 
    subHeader: 'Example with supporting text', 
    mediaHref: 'placeholder.svg', 
    supportingText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    buttonText: 'go'
}