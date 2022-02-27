import { FC } from "react";
import { PokeImageProps } from "../model/PokeImageProps";

const PokeImage: FC<PokeImageProps> = (props) => {
  return <img className="pokemon-image" src={props.src} alt="" width="300" />;
};

export default PokeImage;
