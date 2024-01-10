import { render, screen } from '@testing-library/react'
import {describe, expect, it} from 'vitest';

import Page from ".";

describe("Home Page component test suites", () => {
  it('should display Bonjour tout le monde !', async () => {
    render(<Page />)

    expect(screen.getByTestId('title').textContent).toEqual('Bonjour tout le monde !')
  })
})

