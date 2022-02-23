import { ImageProps } from "../types";
import classList from "../utils/classsList";

//image wrapper, gets classes, src and the active class.
export default function Image({ src, active, classess }: ImageProps) {
  const itemClassess = classList({
    active: active,
  });
  const imageClassess = classList({
    image: true,
  });
  return (
    <div className={classess + " " + itemClassess}>
      <img className={imageClassess} src={src} alt="slide"></img>
    </div>
  );
}
