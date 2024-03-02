import React from 'react';
import { render } from '@testing-library/react';
import Main from './Main';

test('initializeTimes returns the expected value', () => {
  const { container } = render(<Main />);
  const timesDivs = container.querySelectorAll('div');
  const expectedTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  timesDivs.forEach((div, index) => {
    expect(div.textContent).toBe(expectedTimes[index]);
  });
});

test('updateTimes returns the same value as availableTimes', () => {
  const { container } = render(<Main />);
  const timesDivs = container.querySelectorAll('div');
  const expectedTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  timesDivs.forEach((div, index) => {
    expect(div.textContent).toBe(expectedTimes[index]);
  });
});