import React , { useState  , useEffect} from "react";
import { useParams } from "react-router";
import axios from "axios";

export default () => {
    const { id } = useParams();
    const [data , setData] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}/?format=json`)
            .then(res => {setData(res.data)})
            .catch(err => console.log(err))
    })
    return (
        <div className="container mt-5">
            <h1>{data.name}</h1>
            <p>Climate: {data.climate}</p>
            <p>Terrain: {data.terrain}</p>
            <p>Surface Water: {data.surface_water}</p>
            <p>Population:{data.population}</p>
        </div>
    )
}