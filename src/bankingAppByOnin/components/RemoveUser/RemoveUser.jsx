import "./RemoveUser.css";
import { useState } from "react";
import ButtonComp from "../Buttons/ButtonComp";
import remove from "../../assets/icons/remove-user.png";
import CloseButton from "../Buttons/CloseButton";

const RemoveUser = (props) => {
  const {
    setShowDeposit,
    setShowWithdraw,
    setShowSendMoney,
    setShowAddUser,
    setShowRemoveUser,
    usersInfo,
    setUsersInfo,
  } = props;

  const [selectedUser, setSelectedUser] = useState("");

  const [isErrorShow, setShowError] = useState(false);

  const handleSelectedUser = (event) => {
    setSelectedUser(event.target.value);
  };

  const removeUser = (event) => {
    event.preventDefault();

    if (selectedUser) {
      const updateUsers = usersInfo.filter((user) => user.Id !== selectedUser);

      console.log(updateUsers);

      setUsersInfo(updateUsers);
      setShowRemoveUser(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="remove-user-div">
      <form className="remove-user-form" onSubmit={removeUser}>
        <CloseButton
          setShowDeposit={setShowDeposit}
          setShowWithdraw={setShowWithdraw}
          setShowSendMoney={setShowSendMoney}
          setShowAddUser={setShowAddUser}
          setShowRemoveUser={setShowRemoveUser}
        />

        <h3 className="remove-user-header">REMOVE USER</h3>

        <label className="select-user-label">Select User:</label>

        <div className="dropdown-div">
          <select value={selectedUser} onChange={handleSelectedUser} required>
            <option>Select User:</option>
            {usersInfo.map((user, index) => (
              <option key={index} value={user.Id}>
                {user.Name}
              </option>
            ))}
          </select>
        </div>

        <div className="deposit-error">{isErrorShow && <p>SELECT USER</p>}</div>

        <div className="remove-user-button">
          <ButtonComp iconSrc={remove} label="Delete" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default RemoveUser;
