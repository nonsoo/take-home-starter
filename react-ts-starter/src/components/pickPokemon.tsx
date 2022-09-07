import { FC, useState, useEffect } from "react";
import axios from "axios";

import { Pokemon, PokemonType } from "../utils/types/projectTypes";
import convertToTypesArray from "../utils/helper/convertToTypesArray";
import {
  savePokeStateToLocalStorage,
  loadPokeStateFromLocalStorage,
} from "../utils/helper/saveData";

import { useAppDispatch } from "../redux/hooks";
import { increaseCurrPage } from "../redux/slices/page";
import { pageTwoComplete } from "../redux/slices/submitForm";

import PreviewPokemon from "./previewPokemon";
import Btn from "./btn";

import { MdArrowRightAlt } from "react-icons/md";
import { CgPokemon } from "react-icons/cg";

const Pickpokemon: FC = () => {
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [pokemons, setPokemons] = useState<Pokemon | null>(null);
  const [pokemonTypeLst, setPokemonTypeLst] = useState<PokemonType[] | null>(
    null
  );
  const [invalidInput, setInvalidInput] = useState<boolean>(false);

  console.log(invalidInput);

  useEffect(() => {
    const savedData = loadPokeStateFromLocalStorage();

    if (savedData) {
      setPokemons(savedData);
    }
  }, []);

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
      .catch((err) => {
        setSearchTerm("");
        setInvalidInput(true);
        setTimeout(() => {
          setInvalidInput(false);
        }, 700);
        console.error(err);
      });
  };

  const getPokemonByType = (path: string) => {
    axios
      .get(`https://pokeapi.co/api/v2/type/${path}`)
      .then((res) => {
        const pokemonLst: PokemonType[] = res.data.pokemon;

        setPokemonTypeLst(pokemonLst);
      })
      .catch((err) => console.error(err));
  };

  const onSearchPokemonByType = (pokemon: PokemonType) => {
    axios
      .get(pokemon.pokemon.url)
      .then((res) => {
        const data: Pokemon = {
          name: res.data.name,
          types: convertToTypesArray(res.data.types),
          imgUrl: res.data.sprites.front_default,
        };

        setPokemons(data);
      })
      .catch((err) => console.error(err));
  };

  const onContinue = () => {
    if (!pokemons) return;

    savePokeStateToLocalStorage(pokemons);
    dispatch(increaseCurrPage());
    dispatch(pageTwoComplete());
  };

  const onSkip = () => {
    dispatch(increaseCurrPage());
  };

  return (
    <section className="pokemonSection mainContain">
      <p className="pokemonSection__Title">Who's that Pokémon?</p>
      <form className="pokemonSearch">
        <p className="sectionSubHeader">Search pokédex by pokémon</p>
        <div
          className={`pokemonSearch__Box ${
            invalidInput ? "ShakeAnimation" : ""
          } `}
        >
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
          <p
            className="searchType__Text"
            onClick={() => getPokemonByType("grass")}
          >
            Grass
          </p>
          <p
            className="searchType__Text"
            onClick={() => getPokemonByType("fire")}
          >
            Fire
          </p>
          <p
            className="searchType__Text"
            onClick={() => getPokemonByType("water")}
          >
            Water
          </p>
          <p
            className="searchType__Text"
            onClick={() => getPokemonByType("electric")}
          >
            Electric
          </p>
        </div>
      </div>

      <div className="pokemonTypeLstCon">
        {pokemonTypeLst &&
          pokemonTypeLst.map((pokemon) => (
            <div
              className="pokemonTypeLst"
              onClick={() => onSearchPokemonByType(pokemon)}
            >
              <CgPokemon />
              <span className="pokemonTypeLst__Text">
                {pokemon.pokemon.name}
              </span>
            </div>
          ))}
      </div>

      {pokemons && (
        <PreviewPokemon
          name={pokemons.name}
          types={pokemons.types}
          imgUrl={pokemons.imgUrl}
        />
      )}

      <div className="BtnsContainer">
        <Btn
          btnName="Skip"
          exCSS="btnContainer_SkipBtn"
          onToggle={() => onSkip()}
        />
        <Btn btnName="Continue" onToggle={() => onContinue()} />
      </div>
    </section>
  );
};

export default Pickpokemon;
