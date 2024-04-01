import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

      let rootElement = document.getElementById('root')
      var headingg = React.createElement('h1',{className : 'headingg', children : "Hello World!"});
      ReactDOM.render(headingg,rootElement);
  
