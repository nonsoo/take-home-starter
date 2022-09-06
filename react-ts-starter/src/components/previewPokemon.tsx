import { FC } from "react";

import { Pokemon } from "../utils/types/projectTypes";
const PreviewPokemon: FC<Pokemon> = ({ name, types, imgUrl }) => {
  return (
    <section className="previewPokemon">
      <p className="previewPokemon__Name">{name}</p>
      <div className="previewPokemon__TypeGroup">
        {types.map((type, index) => (
          <p className="previewPokemon__Type" key={index}>
            {type}
          </p>
        ))}
      </div>
      <img src={imgUrl} alt={name} className="previewPokemon_img" />
    </section>
  );
};

export default PreviewPokemon;
