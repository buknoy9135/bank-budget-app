const TableCell = (props) => {
  const { children } = props;
  return <td className="th-table-cell">{children}</td>;
};

export default TableCell;
