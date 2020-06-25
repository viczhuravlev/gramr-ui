import React from 'react';
import { storiesOf } from '@storybook/react';

import { getColors } from './utils/helpers';
import { colors, themeColors } from './styles/theme';

storiesOf('Getting Started', module).add('Colors', () => (
  <>
    <h2>Theme colors</h2>
    <br />
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '900px',
      }}
    >
      {Object.keys(themeColors).map((color) => (
        <div
          style={{
            display: 'inline-block',
            width: '75px',
            height: '75px',
            borderRadius: '50%',
            backgroundColor: themeColors[color],
            color: color === 'white' ? '#000' : '#fff',
            textAlign: 'center',
            lineHeight: '75px',
            fontSize: '14px',
            border: `1px solid ${
              color === 'white' ? '#000' : themeColors[color]
            }`,
          }}
        >
          {themeColors[color]}
        </div>
      ))}
    </div>
    <br />
    <h2>Colors</h2>
    <br />
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '900px',
      }}
    >
      {getColors().map((color) => (
        <div
          style={{
            display: 'inline-block',
            width: '75px',
            height: '75px',
            borderRadius: '50%',
            backgroundColor: colors[color],
            color: 'rgb(255, 255, 255)',
            textAlign: 'center',
            lineHeight: '75px',
            fontSize: '14px',
          }}
        >
          {colors[color]}
        </div>
      ))}
    </div>
  </>
));
