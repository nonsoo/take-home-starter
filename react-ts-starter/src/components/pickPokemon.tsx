import { FC } from "react";
import Btn from "./btn";

const Pickpokemon: FC = () => {
  return (
    <section className="pokemonSection mainContain">
      <p className="pokemonSection__Title">Who's that Pokémon?</p>
      <form className="pokemonSearch">
        <p className="sectionSubHeader">Search pokédex by pokémon</p>
        <div className="pokemonSearch__Box">
          <input type="text" className="pokemonSeearch__Text" />
          <button className="pokemonSearch__Btn">g</button>
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
      <Btn btnName="Continue" />
    </section>
  );
};

export default Pickpokemon;
