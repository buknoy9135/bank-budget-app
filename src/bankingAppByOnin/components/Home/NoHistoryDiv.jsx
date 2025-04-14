import "./Home.css";
import { useEffect } from "react";

const NoHistoryDiv = (props) => {
  const { loading, setLoading } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [loading, setLoading]);

  return (
    <div className="no-history-div">
      {loading ? (
        <div className="spinner" />
      ) : (
        <>
          <h1 className="no-history">NO HISTORY TO SHOW</h1>
        </>
      )}
    </div>
  );
};

export default NoHistoryDiv;
