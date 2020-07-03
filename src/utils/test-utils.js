import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';

import i18n from "i18n";

const AllTheProviders = ({ children }) => {
  return (
    <Router>
      <I18nextProvider i18n={i18n}>
        {children}
      </I18nextProvider>
    </Router>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
