import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import QuestionList from "./QuestionList";
import { ionFireEvent as fireEvent } from '@ionic/react-test-utils';
// // extends
// import 'react-testing-library/extend-expect';
// interface ExtendedMatchers extends jest.Matchers<void> {
//   toHaveTextContent: (htmlElement: string) => object;
//   toBeInTheDOM: () => void;
// }
function mockFetch(data: any) {
    return jest.spyOn(window, 'fetch').mockResolvedValue(new Response(JSON.stringify(data)));
}

const renderComponent = (props: any) => render(<QuestionList {...props} />)

beforeEach(() => mockFetch([]));

test('should render questions compoment', () => {
    const { getByText } = renderComponent({ questions: [], listType: 'all', hide: true })
    //console.log(getByText('Quizzer App'));
    expect(getByText('Quizzer App')).toBeInTheDocument()
});
