import { PropsWithChildren } from "react";

export const PropsTable: React.FC<PropsWithChildren<{ table: { props: object } }>> = ({ table }) => {
  return (
    <table className="blox-props-table">
      <tr><th>Prop</th><th>Type</th><th>Default</th></tr>
      {
        Object.entries(table['props']).map(([key, value]) => (
          <tr><td>{key}{!value.required && '?'}</td><td className="blox-props-table-type">{value.type.name}</td><td>{value.defaultValue?.value || '-'}</td></tr>
        ))
      }
    </table>
  );
};