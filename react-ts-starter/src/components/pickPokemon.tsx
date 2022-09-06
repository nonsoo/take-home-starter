import { FC, useState } from "react";
import Btn from "./btn";
import { MdArrowRightAlt } from "react-icons/md";

import PreviewPokemon from "./previewPokemon";

const Pickpokemon: FC = () => {
  const pokemon = {
    name: "Bulbasaur",
    types: ["Grass", "Posion"],
  };

  const [searchTerm, setSearchTerm] = useState<string>("");
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (searchTerm === "") return;
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
      <PreviewPokemon name={pokemon.name} types={pokemon.types} />
      <Btn btnName="Continue" />
    </section>
  );
};

export default Pickpokemon;
