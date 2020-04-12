import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import dark from './dark';
import light from './light';

import { useSelector } from 'react-redux';

const Theme = ({ children }) => {
  const theme = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      {children}
    </ThemeProvider>
  );
};

Theme.propTypes = { children: PropTypes.node };

export default Theme;
