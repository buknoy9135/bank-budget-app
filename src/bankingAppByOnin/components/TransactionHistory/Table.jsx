import "./Table.css";
import TableRow from "./TableRow";

const Table = (props) => {
  const { data, headers } = props;

  return (
    <div className="table-div">
      <table className="table">
        <thead>
          <tr className="table-header">
            {headers.map((header, index) => (
              <th key={index} className="table-header-cell">
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
