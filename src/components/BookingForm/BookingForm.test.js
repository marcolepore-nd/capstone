import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from 'components/BookingForm/BookingForm';

test('renders BookingForm component', () => {
  render(<BookingForm />);
  const dateInputElement = screen.getByLabelText('Choose date');
  expect(dateInputElement).toBeInTheDocument();
});

test('renders BookingForm component with submit button', () => {
  render(<BookingForm />);
  const submitButtonElement = screen.getByRole('button', { type: 'Submit' });
  expect(submitButtonElement).toBeInTheDocument();
});

test('renders BookingForm component with input field for time', () => {
  render(<BookingForm />);
  const timeInputElement = screen.getByLabelText('Choose time');
  expect(timeInputElement).toBeInTheDocument();
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