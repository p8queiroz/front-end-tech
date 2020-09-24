import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Menu from "./Menu";
import { MemoryRouter } from 'react-router-dom'

const renderComponent = (props: any) => render(<MemoryRouter><Menu {...props} /></MemoryRouter>);

test('<Menu />', () => {
    const { getByText } = renderComponent({})
    expect(getByText('Quizzer App')).toBeInTheDocument()
});

test('should render app pages', () => {
    const { getByText } = renderComponent({})
    expect(getByText('Questions')).toBeInTheDocument()
});

test('should render athenticated pages when user is Authenticated', () => {
    const { getByText } = renderComponent({ Authenticated: true })
    expect(getByText('Account')).toBeInTheDocument()
});

test('should render non-athenticated pages when user is not Authenticated', () => {
    const { getByText } = renderComponent({ Authenticated: false })
    expect(getByText('Login')).toBeInTheDocument()
});