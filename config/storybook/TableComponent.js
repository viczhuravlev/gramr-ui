import React from 'react';

import { colors } from '../../src/styles/theme';

const spanStyles = { color: colors.red };

const tableStyles = {
  marginTop: '10px',
  borderCollapse: 'collapse',
};

const cellStyles = {
  border: `1px solid ${colors.grey}`,
  padding: '5px 10px',
  textAlign: 'left',
};

const Red = (props) => <span style={spanStyles} {...props} />;

export function TableComponent(props) {
  const { propDefinitions } = props;

  return (
    <table style={tableStyles}>
      <thead>
        <tr>
          <th style={cellStyles}>Name</th>
          <th style={cellStyles}>Type</th>
          <th style={cellStyles}>Default</th>
          <th style={cellStyles}>Required</th>
          <th style={cellStyles}>Description</th>
        </tr>
      </thead>
      <tbody>
        {propDefinitions.map((propDefinition) => {
          const {
            property,
            propType,
            required,
            description,
            defaultValue,
          } = propDefinition;

          return (
            <tr key={property}>
              <td style={cellStyles}>
                <code>{property}</code>
                {required ? <Red>*</Red> : null}
              </td>
              <td style={cellStyles}>
                <code>{propType && propType.name}</code>
              </td>
              <td style={cellStyles}>
                <code>{defaultValue && defaultValue.toString()}</code>
              </td>
              <td style={cellStyles}>{required && 'true'}</td>
              <td style={cellStyles}>{description}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
