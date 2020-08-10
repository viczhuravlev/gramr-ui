/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/label-has-associated-control,jsx-a11y/no-noninteractive-element-interactions */

import React, { useState, useCallback } from 'react';
import { storiesOf } from '@storybook/react';

import { initTheme, turnOnTheme, getCurrentMode } from '../../utils/theme';

import { GlobalStyles } from './index';

initTheme();

storiesOf('GlobalStyles', module).add('Default', () => {
  const [mode, setMode] = useState(getCurrentMode());

  const getOnClick = useCallback((newMode) => {
    return () => {
      setMode(newMode);

      turnOnTheme(newMode);
    };
  }, []);

  return (
    <>
      <GlobalStyles />
      <p>Select a theme:</p>
      <br />
      <label onClick={getOnClick('auto')}>
        <input name="theme" type="radio" checked={mode === 'auto'} />
        <span> Auto</span>
      </label>
      <br />
      <br />
      <label onClick={getOnClick('light')}>
        <input name="theme" type="radio" checked={mode === 'light'} />
        <span> Light</span>
      </label>
      <br />
      <br />
      <label onClick={getOnClick('dark')}>
        <input name="theme" type="radio" checked={mode === 'dark'} />
        <span> Dark</span>
      </label>
    </>
  );
});
