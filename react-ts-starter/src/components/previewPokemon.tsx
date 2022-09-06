import { FC } from "react";

interface Props {
  name: string;
  types: string[];
  imgUrl?: string;
}

const PreviewPokemon: FC<Props> = ({ name, types }) => {
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
      <div className="previewPokemon_img"></div>
    </section>
  );
};

export default PreviewPokemon;
