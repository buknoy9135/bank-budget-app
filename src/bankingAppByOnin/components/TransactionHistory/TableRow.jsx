import TableCell from "./TableCell";

const TableRow = (props) => {
  const { rowData } = props;

  const rowClass =
    rowData.Type === "Deposit" ? "deposit-row" : "withdrawal-row";

  return (
    <tr className={`table-row ${rowClass}`}>
      {Object.entries(rowData).map(([key, value], index) => {
        return <TableCell key={index}>{value}</TableCell>;
      })}
    </tr>
  );
};

export default TableRow;
