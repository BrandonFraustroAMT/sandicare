import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import './Formulario.css'
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `FormularioHome`.
 */
export type FormularioHomeProps =
  SliceComponentProps<Content.FormularioHomeSlice>;

/**
 * Component for "FormularioHome" Slices.
 */
const FormularioHome = ({ slice }: FormularioHomeProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="formulario-slice">
        <div className="formulario-slice__container">
          <div className="formulario-slice__column1">
            <div className="formulario-slice__title">
              <h2>
                <PrismicRichText field={slice.primary.title} />
              </h2>
            </div>
            <div className="formulario-slice__subtitle">
              <>{slice.primary.subtitle}</>
            </div>
            <div className="formulario-slice__btn">
              <PrismicNextLink field={slice.primary.linkbutton} className="formulario-slice__link">
                <>{slice.primary.labelbutton}</>
              </PrismicNextLink>
            </div>
          </div>
          <div className="formulario-slice__column2">
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default FormularioHome;
