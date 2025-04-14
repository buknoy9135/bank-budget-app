import "./Table.css";
import TableRow from "./TableRow";

const Table = (props) => {
  const { data, headers } = props;

  return (
    <div className="th-table-div">
      <table className="th-table">
        <thead>
          <tr className="th-table-header">
            {headers.map((header, index) => (
              <th key={index} className="th-table-header-cell">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((rowData, index) => (
            <TableRow key={index} rowData={rowData} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
