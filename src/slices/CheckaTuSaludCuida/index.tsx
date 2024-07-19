import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import './CheckaCuida.css'

/**
 * Props for `CheckaTuSaludCuida`.
 */
export type CheckaTuSaludCuidaProps =
  SliceComponentProps<Content.CheckaTuSaludCuidaSlice>;

/**
 * Component for "CheckaTuSaludCuida" Slices.
 */
const CheckaTuSaludCuida = ({
  slice,
}: CheckaTuSaludCuidaProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="checkat-cuida">
        <div className="checkat-cuida__container">
          <div className="checkat-cuida__title"><h2><PrismicRichText field={slice.primary.title} /></h2></div>
        </div>
      </div>
    </section>
  );
};

export default CheckaTuSaludCuida;
