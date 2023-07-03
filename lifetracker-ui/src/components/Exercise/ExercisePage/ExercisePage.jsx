import React from "react";
import "./ExercisePage.css"
import ExerciseGrid from "../ExerciseGrid/ExerciseGrid"; 
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Api from "../../../utilities/api";

export default function ExercisePage() {
    const [exercise, setExercise] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await Api.listExercise();

            if (data?.exercise) {
                data.exercise = Array.from(data.exercise).reverse();
                setExercise(data.exercise);
            }

        };
        fetchData();
    }, []);

    const sortCards = event => {
        let newExercise = Array.from(exercise).reverse();
        setExercise(newExercise);
    }

    return(
        <div className="exercise">
            <div className="exercise-header">
                <h1>Exercise</h1>
            </div>
            <div className="exercise-body">
                <Link to="/exercise/add">
                    <Button variant="contained" color="primary" className="exercise-button">
                        Add Exercise
                    </Button>
                </Link>
                <Button variant="contained" color="primary" className="exercise-button" onClick={sortCards}>
                    Sort
                </Button>
                <ExerciseGrid exercise={exercise}/>
            </div>
        </div>
    )
}