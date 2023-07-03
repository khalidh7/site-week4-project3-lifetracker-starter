import React from "react";
import Api from "../../../utilities/api";
import "./SleepPage.css";
import { useState, useEffect } from "react";
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import SleepGrid from "../SleepGrid/SleepGrid";

export default function SleepPage() {
    const [sleep, setSleep] = useState([]);

    useEffect(() => {
        const fetchSleep = async () => {
            const { data } = await apiClient.listSleep();
            if (data?.sleep) {
                data.sleep = Array.from(data.sleep).reverse();
                setSleep(data.sleep);
            }
        };
        fetchSleep();
    }, []);

    const cardList = event => {
        let newSleep = Array.from(sleep).reverse();
        setSleep(newSleep);
    };

    return (
        <div className="sleep">
            <div className="sleep-header">
                <h1>Sleep</h1>
            </div>
            <div className="sleep-body">
                <Link>
                    <Button variant="contained" color="primary" className="sleep-button">
                        Add Sleep
                    </Button>
                </Link>
                <Button variant="contained" color="primary" className="sleep-button" onClick={cardList}>
                    Sort 
                </Button>
                <SleepGrid sleep={sleep}/>
            </div>
        </div>
    )
}