import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const containerTest = document.createElement('div');
  containerTest.id = 'react_app_test';
  render(<App />, containerTest);
  containerTest.remove();
});
