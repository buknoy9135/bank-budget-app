import UserTableCell from "./UserTableCell";

const formatNumberWithCommas = (num) => {
  if (typeof num === "number") {
    return num.toLocaleString();
  }
  return num;
};

const UserTableRow = (props) => {
  const { rowData } = props;

  return (
    <tr className="user-table-row">
      {Object.entries(rowData)
        .filter(([key]) => key !== "Password" && key !== "Id")
        .map(([key, value], index) => {
          let formattedValue =
            key === "Balance" ? formatNumberWithCommas(value) : value;

          return <UserTableCell key={index} children={formattedValue} />;
        })}
    </tr>
  );
};

export default UserTableRow;
