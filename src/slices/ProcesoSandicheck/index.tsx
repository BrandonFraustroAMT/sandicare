import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import './Proceso.css';
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `ProcesoSandicheck`.
 */
export type ProcesoSandicheckProps =
  SliceComponentProps<Content.ProcesoSandicheckSlice>;

/**
 * Component for "ProcesoSandicheck" Slices.
 */
const ProcesoSandicheck = ({ slice }: ProcesoSandicheckProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* <div className="proceso-sandicheck">
        <div className="proceso-sandicheck__container">
          <div className="proceso-sandicheck__title">
            <h2><PrismicRichText field={slice.primary.title} /></h2>
          </div>
          <div className="proceso-sandicheck__subtitle">
            <>{slice.primary.subtitle}</>
          </div>
          <div className="proceso-sandicheck__box">
            <div className="proceso-sandicheck__box-column1">
              <div className="proceso-sandicheck__box-img">
                <PrismicNextImage field={slice.primary.image} />
              </div>
            </div>
            <div className="proceso-sandicheck__box-column2">
              <div className="proceso-sandicheck__box-subtitle">
                <>{slice.primary.subtittle2}</>
              </div>
              <div className="proceso-sandicheck__box-description">
                <>{slice.primary.description}</>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default ProcesoSandicheck;
