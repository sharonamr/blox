import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledTable = styled.table.attrs((props) => ({
    className: 'blox-props-table',
}))`
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  font-family: Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: 100%;
  color: rgb(40 49 115 / 1);
`;

const StyledHeader = styled.th`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: left;
  width: 33.333333%;
`;

const StyledRow = styled.tr`
  border-bottom-width: 1px;
`;

const StyledData = styled.td`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const StyledType = styled(StyledData)`
  color: #8d0e40;
`;

export const PropsTable: React.FC<
  PropsWithChildren<{ table: { props: object } }>
> = ({ table }) => {
  return (
    <StyledTable>
      <StyledRow>
        <StyledHeader>Prop</StyledHeader>
        <StyledHeader>Type</StyledHeader>
        <StyledHeader>Default</StyledHeader>
      </StyledRow>
      {Object.entries(table['props']).map(([key, value]) => (
        <StyledRow key={key}>
          <StyledData>
            {key}
            {!value.required && '?'}
          </StyledData>
          <StyledType>{value.type.name}</StyledType>
          <StyledData>{value.defaultValue?.value || '-'}</StyledData>
        </StyledRow>
      ))}
    </StyledTable>
  );
};
