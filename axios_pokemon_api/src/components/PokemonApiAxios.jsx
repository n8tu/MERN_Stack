import React , { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css"

const PokemonApiAxios = () => {

    const [pokemons,setPokemons] = useState([]);

    const startApi = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000")
            .then(res => setPokemons(res.data.results));
    }

    return(
        <div className="container w-50 text-center">
            <button onClick={startApi} className="btn btn-dark mt-4">Fetch Pokemon</button>
            <ul className={"list-group my-2"}>
                {pokemons.map((item,i)=> {
                    return(
                        <li className={"list-group-item"} key={i}>{item.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default PokemonApiAxios;