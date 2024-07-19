import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import './CheckaHero.css'

/**
 * Props for `CheckaTuSaludHero`.
 */
export type CheckaTuSaludHeroProps =
  SliceComponentProps<Content.CheckaTuSaludHeroSlice>;

/**
 * Component for "CheckaTuSaludHero" Slices.
 */
const CheckaTuSaludHero = ({ slice }: CheckaTuSaludHeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="checkat-hero">
        <div className="checkat-hero__container">
          <div className="checkat-hero__box">
            <div className="checkat-hero__column1">
              <div className="checkat-hero__title"><h2><PrismicRichText field={slice.primary.title} /></h2></div>

              <div className="checkat-hero__description"><>{slice.primary.description}</></div>

              <div className="checkat-hero__btn">
                <>
                  {slice.primary.grouphero.map((item) => (
                    // Render the item
                    <>
                      <PrismicNextLink field={item.linkbutton} className="checkat-hero__link">
                        <>{item.labelbutton}</>
                      </PrismicNextLink>
                    </>
                  ))}
                </>
              </div>
            </div >

            {/* VIDEO */}
            <div className="checkat-hero__column2">
                <div className="checkat-hero__video-container"></div>
            </div>
          </div>
        </div>
      </div>
      
      
    </section>
  );
};

export default CheckaTuSaludHero;
