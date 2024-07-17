import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import './Empresas.css'

/**
 * Props for `EmpresasHome`.
 */
export type EmpresasHomeProps = SliceComponentProps<Content.EmpresasHomeSlice>;

/**
 * Component for "EmpresasHome" Slices.
 */
const EmpresasHome = ({ slice }: EmpresasHomeProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="empresas-slice">
        <div className="empresas-slice__container">
          <div className="empresas-slice__title">
            <h2>
              <PrismicRichText field={slice.primary.title} />
            </h2>
          </div>
          <div className="empresas-slice__images">
            <>
              {slice.primary.groupempresashome.map((item, index) => (
                  <PrismicNextLink key={index} field={item.linkimage}> 
                    <div className="empresas-slice__img">
                      <PrismicNextImage field={item.image} />
                    </div>
                  </PrismicNextLink>
              ))}
            </>

          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpresasHome;
