import TableCell from "./TableCell";

function TableRow(props) {
  const { rowData } = props;

  // Conditionally assign the class to the row based on 'Type'
  const rowClass =
    rowData.Type === "Deposit" ? "deposit-row" : "withdrawal-row";

  return (
    <tr className={`table-row ${rowClass}`}>
      {Object.entries(rowData).map(([key, value], index) => {
        return <TableCell key={index}>{value}</TableCell>;
      })}
    </tr>
  );
}

export default TableRow;
