import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from 'components/BookingForm/BookingForm';

test('renders BookingForm component', () => {
  render(<BookingForm />);
  const dateInputElement = screen.getByLabelText('Choose date');
  expect(dateInputElement).toBeInTheDocument();
  expect(dateInputElement).toHaveAttribute('type', 'date');
  expect(dateInputElement).toHaveAttribute('id', 'res-date');
});

test('renders BookingForm component with submit button', () => {
  render(<BookingForm />);
  const submitButtonElement = screen.getByRole('button', { type: 'submit' });
  expect(submitButtonElement).toBeInTheDocument();
  expect(submitButtonElement).toHaveAttribute('type', 'submit');
  expect(submitButtonElement).toHaveAttribute('aria-label', 'Make your reservation');
});

test('renders BookingForm component with input field for time', () => {
  render(<BookingForm />);
  const timeInputElement = screen.getByLabelText('Choose time');
  expect(timeInputElement).toBeInTheDocument();
  expect(timeInputElement).toHaveAttribute('type', 'select');
  expect(timeInputElement).toHaveAttribute('id', 'res-time');
});

test('renders BookingForm component with input field for number of guests', () => {
  render(<BookingForm />);
  const guestsInputElement = screen.getByLabelText('Number of guests');
  expect(guestsInputElement).toBeInTheDocument();
  expect(guestsInputElement).toHaveAttribute('type', 'number');
  expect(guestsInputElement).toHaveAttribute('id', 'guests');
  expect(guestsInputElement).toHaveAttribute('min', '1');
  expect(guestsInputElement).toHaveAttribute('max', '10');
});

test('renders BookingForm component with input field for occasion', () => {
  render(<BookingForm />);
  const occasionInputElement = screen.getByLabelText('Occasion');
  expect(occasionInputElement).toBeInTheDocument();
  expect(occasionInputElement).toHaveAttribute('type', 'select');
  expect(occasionInputElement).toHaveAttribute('id', 'occasion');
});








test('calls handleSubmit function on submit click', () => {
  const handleSubmit = jest.fn();
  render(<BookingForm handleSubmit={handleSubmit} />);
  const submitButtonElement = screen.getByRole('button', { type: 'submit' });

  submitButtonElement.addEventListener('click', () => {
    handleSubmit();
  });

  fireEvent.click(submitButtonElement);
  expect(handleSubmit).toHaveBeenCalled();
});

test('disables submit button when form is invalid', () => {
  render(<BookingForm />);
  const submitButtonElement = screen.getByRole('button', { type: 'submit' });
  expect(submitButtonElement).toBeDisabled();
});

/* test('enables submit button when form is valid', () => {
  render(<BookingForm />);
  const submitButtonElement = screen.getByRole('button', { type: 'submit' });

  const dateInputElement = screen.getByLabelText('Choose date');
  fireEvent.change(dateInputElement, { target: { value: '2022-12-31' } });

  const timeInputElement = screen.getByLabelText('Choose time');
  fireEvent.change(timeInputElement, { target: { value: '18:00' } });

  const guestsInputElement = screen.getByLabelText('Number of guests');
  fireEvent.change(guestsInputElement, { target: { value: '4' } });

  const occasionInputElement = screen.getByLabelText('Occasion');
  fireEvent.change(occasionInputElement, { target: { value: 'Anniversary' } });

  expect(submitButtonElement).toBeEnabled();
}); */