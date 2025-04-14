import "./EmployeeInfo.css";

const EmployeeInfo = (props) => {
  const { loggedInEmployee } = props;

  const empName = loggedInEmployee.Name;
  const empEmail = loggedInEmployee.Email;
  const empId = loggedInEmployee.EmployeeId;

  return (
    <div className="emp-info-div">
      <div className="info-title">
        <p className="employee-info-title">EMPLOYEE INFO</p>
      </div>

      <div className="employee-info">
        <p className="emp-name">
          <span className="for-span">NAME: </span>
          {empName}
        </p>
        <p className="emp-id">
          <span className="for-span">EMPLOYEE ID: </span>
          {empId}
        </p>
        <p className="emp-email">
          <span className="for-span">EMAIL: </span>
          {empEmail}
        </p>
      </div>
    </div>
  );
};

export default EmployeeInfo;
