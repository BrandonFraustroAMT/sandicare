import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";


import './Nosotrosmapa.css'
/**
 * Props for `NosotrosMapa`.
 */
export type NosotrosMapaProps = SliceComponentProps<Content.NosotrosMapaSlice>;

/**
 * Component for "NosotrosMapa" Slices.
 */
const NosotrosMapa = ({ slice }: NosotrosMapaProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="nosotrosmapa">
        <div className="nosotrosmapa-container">
          <div className="nosotrosmapa-subtitle"><>{slice.primary.subtitle}</></div>
          <div className="nosotrosmapa-text"><>{slice.primary.text}</></div>
          
          <div className="nosotrosmapa-image">
            <PrismicNextImage field={slice.primary.imagemapa} />
            <div className="nosotrosmapa-list">
              <>
                {slice.primary.groupmapa.map((item, index) => (
                  // Render the item
                  <div className="nosotrosmapa-list__data" key={index}>
                    <>
                      <div className="nosotrosmapa-list__cantidad">+<>{item.cantidad}</></div>
                      <div className="nosotrosmapa-list__texto-cantidad"><>{item.textocantidad}</></div>
                    </>
                  </div>
                ))}
              </>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default NosotrosMapa;
