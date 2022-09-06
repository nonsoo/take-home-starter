import { FC, useState } from "react";
import axios from "axios";

import { Pokemon } from "../utils/types/projectTypes";
import convertToTypesArray from "../utils/helper/convertToTypesArray";
import { savePokeStateToLocalStorage } from "../utils/helper/saveData";

import { useAppDispatch } from "../redux/hooks";
import { increaseCurrPage } from "../redux/slices/page";

import PreviewPokemon from "./previewPokemon";
import Btn from "./btn";

import { MdArrowRightAlt } from "react-icons/md";

const Pickpokemon: FC = () => {
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [pokemons, setPokemons] = useState<Pokemon | null>(null);

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (searchTerm === "") return;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}/`)
      .then((res) => {
        const data: Pokemon = {
          name: res.data.name,
          types: convertToTypesArray(res.data.types),
          imgUrl: res.data.sprites.front_default,
        };

        setPokemons(data);
      })
      .catch((e) => console.log(e));
  };

  const onContinue = () => {
    if (!pokemons) return;

    savePokeStateToLocalStorage(pokemons);
    dispatch(increaseCurrPage());
  };

  return (
    <section className="pokemonSection mainContain">
      <p className="pokemonSection__Title">Who's that Pokémon?</p>
      <form className="pokemonSearch">
        <p className="sectionSubHeader">Search pokédex by pokémon</p>
        <div className="pokemonSearch__Box">
          <input
            type="text"
            className="pokemonSeearch__Text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="pokemonSearch__Btn" onClick={(e) => onSubmit(e)}>
            <MdArrowRightAlt />
          </button>
        </div>
      </form>
      <div className="searchType">
        <p className="sectionSubHeader">Search by type</p>
        <div className="searchType__Group">
          <p className="searchType__Text">Grass</p>
          <p className="searchType__Text">Fire</p>
          <p className="searchType__Text">Water</p>
          <p className="searchType__Text">Electric</p>
        </div>
      </div>

      {pokemons && (
        <PreviewPokemon
          name={pokemons.name}
          types={pokemons.types}
          imgUrl={pokemons.imgUrl}
        />
      )}

      <Btn btnName="Continue" onToggle={() => onContinue()} />
    </section>
  );
};

export default Pickpokemon;
