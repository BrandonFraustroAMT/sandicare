import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import './CheckaOrg.css'

/**
 * Props for `CheckaTuSaludOrganizacion`.
 */
export type CheckaTuSaludOrganizacionProps =
  SliceComponentProps<Content.CheckaTuSaludOrganizacionSlice>;

/**
 * Component for "CheckaTuSaludOrganizacion" Slices.
 */
const CheckaTuSaludOrganizacion = ({
  slice,
}: CheckaTuSaludOrganizacionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="checkat-org">
        <div className="checkat-org__container">
          <div className="checkat-org__title"><h2><PrismicRichText field={slice.primary.title} /></h2></div>
        </div>
      </div>
    </section>
  );
};

export default CheckaTuSaludOrganizacion;
