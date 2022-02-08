import React, { useEffect, useState } from 'react';
import {SideNavbar} from "./SideNavbar";
import axios from "axios";
const Home = () => {
    const [data, setData] = useState({});
    const URL = "https://assessment-edvora.herokuapp.com/";

    useEffect(() => {
        axios.get(`${URL}`)
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            console.log("Error", err);
        })
    }, [])

    return (
        <>
            <SideNavbar fetchedData={data}/>
        </>
    )
}

export default Home;