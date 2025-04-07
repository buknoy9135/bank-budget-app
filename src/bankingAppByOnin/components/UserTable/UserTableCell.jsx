function UserTableCell(props) {
  const { children, className } = props;
  return <td className={`user-table-cell ${className}`}>{children}</td>;
}

export default UserTableCell;
