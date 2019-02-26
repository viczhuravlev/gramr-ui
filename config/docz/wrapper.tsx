import React, { FC } from 'react';
import { Global } from '@emotion/core';

import globalStyles from '../../src/styles/global';

const DoczWrapper: FC<{}> = ({ children }) => (
  <>
    {children}
    <Global styles={globalStyles} />
  </>
);

export default DoczWrapper;
