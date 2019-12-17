import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import Fetch from './components/Fetch';
import Card from './components/Card';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('h1 is rendering', ()=>{
  const { getByText } = render(<App/>)
  getByText(/women's soccer/i);
})

test('h2 is rendering', ()=>{
  const { queryByTestId } = render(<Fetch/>)
  queryByTestId(/by name and country/i);
})
