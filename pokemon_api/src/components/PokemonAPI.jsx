import React , {useEffect , useState} from "react";
import "bootstrap/dist/css/bootstrap.css";

const PokemonAPI = () => {

    const [pokemons,setPokemons] = useState([])

    const startApi = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
            .then(response => response.json())
            .then(response => setPokemons(response.results))
    };

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

export default PokemonAPI;

