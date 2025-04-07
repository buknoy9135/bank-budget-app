import "./UserTable.css";
import UserTableRow from "./UserTableRow";

function UserTable(props) {
  const { data, headers } = props;

  return (
    <div className="user-table-div">
      <table className="user-table">
        <thead>
          <tr className="user-table-header">
            {headers.map((header, index) => (
              <th key={index} className="user-table-header-cell">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((rowData, index) => (
            <UserTableRow key={index} rowData={rowData} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
