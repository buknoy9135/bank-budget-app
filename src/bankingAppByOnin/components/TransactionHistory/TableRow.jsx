import TableCell from "./TableCell";

const TableRow = (props) => {
  const { rowData } = props;

  const rowClass =
    rowData.Type === "Deposit"
      ? "deposit-row"
      : rowData.Type === "Send Money"
      ? "send-money-row"
      : "withdrawal-row";

  return (
    <tr className={`table-row ${rowClass}`}>
      {Object.entries(rowData).map(([key, value], index) => {
        return <TableCell key={index} children={value} />;
      })}
    </tr>
  );
};

export default TableRow;
