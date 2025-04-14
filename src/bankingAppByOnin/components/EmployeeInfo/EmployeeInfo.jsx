import "./EmployeeInfo.css";
import employeeInfo from "../../assets/EmployeeData.json";

const EmployeeInfo = () => {
  const empName = employeeInfo[0].Name;
  const empEmail = employeeInfo[0].Email;
  const empId = employeeInfo[0].EmployeeId;

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
