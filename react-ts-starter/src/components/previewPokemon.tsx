import { FC } from "react";

interface Props {
  name: string;
  types: string[];
  imgUrl?: string;
}

const PreviewPokemon: FC<Props> = ({ name, types, imgUrl }) => {
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
