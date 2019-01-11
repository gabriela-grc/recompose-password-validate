import React from 'react'
import Password from './Password'
import { render, cleanup, fireEvent, getByTestId } from 'react-testing-library'
import 'jest-dom/extend-expect'

afterEach(cleanup)

describe('Password', () => {
  it('should mount component', () => {
    const { getByText } = render(<Password />)
    expect(getByText('Ter no mínimo 6 caracteres')).toBeInTheDocument()
  })
  it('should disabled submit', () => {
    const { getByTestId } = render(<Password toggleColor={() => { }} toggleDisabled={() => { }} />)
    fireEvent.change(getByTestId('text'), { target: { value: 'ZAQ!2wsx' } })
    fireEvent.change(getByTestId('text'), { target: { value: 'ZAQ!2' } })
    expect(getByTestId('submit')).toHaveAttribute('disabled')
  })
  it('should enabled submit', () => {
    const { getByTestId } = render(<Password toggleColor={() => { }} toggleDisabled={() => { }} />)
    fireEvent.change(getByTestId('text'), { target: { value: 'MJU&8ikl' } })
    expect(getByTestId('submit')).toHaveAttribute('disabled', '')
  })
}) 
