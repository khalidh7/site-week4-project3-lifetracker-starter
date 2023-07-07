import React from "react";
import "./SleepPage.css";
import SleepGrid from "../SleepGrid/SleepGrid";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Api from "../../../utilities/api";

export default function SleepPage({ user, setUserGlobal }) {
  const [sleep, setSleep] = useState();
  const [userid, setUserid] = useState(user?.id);

  useEffect(() => {
    const fetchData = async () => {
      setUserid(user.id);
      let data = await Api.sleep({ userid: userid });
      if (data?.sleep) {
        data = Array.from(data.sleep).reverse();
        setSleep(data);
      }
    };
    fetchData();
  }, [user]);

  const sortCards = (event) => {
    let newSleep = Array.from(sleep).reverse();
    setSleep(newSleep);
  };

  return (
    <>
      {user ? (
        <div className="sleep">
          <div className="sleep-header">
            <h1>Sleep</h1>
          </div>
          <div className="sleep-body">
            <Link to="/sleep/add" className="sleep-button">
              <button variant="contained" color="primary">
                Add Sleep
              </button>
            </Link>
            <Link className="sleep-button">
              <button variant="contained" color="primary" onClick={sortCards}>
                Sort
              </button>
            </Link>
            {sleep?.length > 0 ? (
              <SleepGrid sleep={sleep} />
            ) : (
              <h2>No Sleep yet!</h2>
            )}
          </div>
        </div>
      ) : (
        <div className="notlogged">
          <h1>Welcome</h1>
          <h2>Please Login in to Access</h2>
          <button href="/login" color="primary" variant="contained">
            Login
          </button>
        </div>
      )}
    </>
  );
}
