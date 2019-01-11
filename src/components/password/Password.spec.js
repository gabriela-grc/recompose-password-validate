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
    fireEvent.change(getByTestId('passwordtext'), { target: { value: 'ZAQ!2wsx' } })
    fireEvent.change(getByTestId('passwordtext'), { target: { value: 'ZAQ!2' } })
    expect(getByTestId('passwordsubmit')).toHaveAttribute('disabled')
  })
  it('should enabled submit', () => {
    const { getByTestId } = render(<Password toggleColor={() => { }} toggleDisabled={() => { }} />)
    fireEvent.change(getByTestId('passwordtext'), { target: { value: 'ZAQ!2wsx' } })
    expect(getByTestId('passwordsubmit')).toHaveAttribute('disabled', "")
  })
}) 
