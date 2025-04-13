import "./Home.css";
import ButtonComp from "../Buttons/ButtonComp";
import addUser from "../../assets/icons/add-user.png";

import { useEffect } from "react";

const NoUserDiv = (props) => {
  const { setShowAddUser, loading, setLoading } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [loading, setLoading]);

  const showAddUser = () => {
    setShowAddUser(true);
  };

  return (
    <div className="no-user-div">
      {loading ? (
        <div className="spinner" />
      ) : (
        <>
          <h1 className="no-user">NO USER TO SHOW</h1>
          <ButtonComp
            iconSrc={addUser}
            label="Add User"
            onClick={showAddUser}
          />
        </>
      )}
    </div>
  );
};

export default NoUserDiv;
