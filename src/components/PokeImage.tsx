import { FC } from "react";
import { PokeImageProps } from "../model/PokeImageProps";
import "./PokeImage.css";

const PokeImage: FC<PokeImageProps> = (props) => {
  return (
    <div className="pokemon-image-container">
      <img src={props.src} alt="" width="300" />
    </div>
  );
};

export default PokeImage;
