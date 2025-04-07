import UserTableCell from "./UserTableCell";

function UserTableRow(props) {
  const { rowData } = props;

  return (
    <tr className="user-table-row">
      {Object.entries(rowData).map(([key, value], index) => {
        let cellClass = "";

        if (key === "Status") {
          cellClass = value === "Active" ? "active-status" : "inactive-status";
        }

        return (
          <UserTableCell key={index} className={cellClass}>
            {value}
          </UserTableCell>
        );
      })}
    </tr>
  );
}

export default UserTableRow;
