import React from "react";
import "./NutritionPage.css";
import NutritionGrid from "../NutritionGrid/NutritionGrid";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Api from "../../../utilities/api";

export default function NutritionPage({ user, setUserGlobal }) {
  const [nutrition, setNutrtion] = useState();
  const [userid, setUserid] = useState(user?.id);

  useEffect(() => {
    const fetchData = async () => {
      setUserid(user.id);
      let data = await Api.nutrition({ userid: userid });
      if (data?.nutrition) {
        data = Array.from(data.nutrition).reverse();
        setNutrtion(data);
      }
    };
    fetchData();
  }, [user]);

  const sortCards = (event) => {
    let newNutrition = Array.from(nutrition).reverse();
    setNutrtion(newNutrition);
  };

  return (
    <>
      {user ? (
        <div className="nutrition">
          <div className="nutrition-header">
            <h1>Nutrition</h1>
          </div>
          <div className="nutrition-body">
            <Link to="/nutrition/add" className="nutrition-button">
              <button variant="contained" color="primary">
                Add Meal
              </button>
            </Link>
            <Link className="nutrition-button">
              <button variant="contained" color="primary" onClick={sortCards}>
                Sort
              </button>
            </Link>
            {nutrition?.length > 0 ? (
              <NutritionGrid nutrition={nutrition} />
            ) : (
              <h2>No Meals yet!</h2>
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
