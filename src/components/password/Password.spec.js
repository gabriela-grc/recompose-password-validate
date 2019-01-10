import React from 'react'
import Password from './Password'
import { render, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect'

afterEach(cleanup)

describe('Password', () => {
  it('should mount component', () => {
    const { getByText } = render(<Password />)
    expect(getByText('Ter no mínimo 6 caracteres')).toBeInTheDocument()
  })
}) 
