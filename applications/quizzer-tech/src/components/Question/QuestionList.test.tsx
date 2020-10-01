import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import QuestionList from "./QuestionList";
import { ionFireEvent as fireEvent } from '@ionic/react-test-utils';

function mockFetch(data: any) {
    return jest.spyOn(window, 'fetch').mockResolvedValue(new Response(JSON.stringify(data)));
}

const renderComponent = (props: any) => render(<QuestionList {...props} />);

beforeEach(() => mockFetch([]));

test('should render questions compoment', () => {
    const { getByText } = renderComponent({ questions: [], listType: 'all', hide: true })
    expect(getByText('Quizzer App')).toBeInTheDocument()
});

test('should render `No questions Found` when there is no question available', () => {
    const { getByText } = renderComponent({ questions: [], listType: 'all', hide: false })
    expect(getByText('No questions Found')).toBeInTheDocument()
});