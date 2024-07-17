import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import './Satisfaccion.css'
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `SatisfaccionHome`.
 */
export type SatisfaccionHomeProps =
  SliceComponentProps<Content.SatisfaccionHomeSlice>;

/**
 * Component for "SatisfaccionHome" Slices.
 */
const SatisfaccionHome = ({ slice }: SatisfaccionHomeProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="satisfaccion-slice">
        <div className="satisfaccion-slice__container">
          <div className="satisfaccion-slice__title">
            <h2>
              <PrismicRichText field={slice.primary.title} />
            </h2>
          </div>
          <div className="satisfaccion-slice__subtitle">
            <>{slice.primary.subtitle}</>
          </div>
          <div className="satisfaccion-slice__list">
            <>
              {slice.primary.groupsatisfaccion.map((item) => (
                <>
                  <div className="satisfaccion-slice__list-data">
                    <div className="satisfaccion-slice_img">
                      <PrismicNextImage field={item.image} />
                    </div>
                    <div className="satisfaccion-slice__list-subtitle">
                      <>{item.subtitle}</>
                    </div>
                    <div className="satisfaccion-slice__list-description">
                      <>{item.description}</>
                    </div>

                  </div>
                </>
              ))}
            </>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SatisfaccionHome;
