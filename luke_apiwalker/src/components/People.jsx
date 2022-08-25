import React , { useState  , useEffect} from "react";
import { useParams } from "react-router";
import axios from "axios";

export default () => {
    const { id } = useParams();
    const [data , setData] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}/?format=json`)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    })

    return (
        <div className="container mt-5">
            <h1>{data.name}</h1>
            <p>Height: {data.height}</p>
            <p>Mass: {data.mass}</p>
            <p>Hair Color: {data.hair_color}</p>
            <p>Skin Color: {data.skin_color}</p>
        </div>
    )
}