import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import './Orgullo.css'
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `OrgulloHome`.
 */
export type OrgulloHomeProps = SliceComponentProps<Content.OrgulloHomeSlice>;

/**
 * Component for "OrgulloHome" Slices.
 */
const OrgulloHome = ({ slice }: OrgulloHomeProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="orgullo-slice">
        <div className="orgullo-slice__container">
          <div className="orgullo-slice__title">
            <h2>
              <PrismicRichText field={slice.primary.title} />
            </h2>
          </div>
          <div className="orgullo-slice__subtitle">
            <>{slice.primary.subtitle}</>
          </div>
          <div className="orgullo-slice__list">
            <>
              {slice.primary.grouporgullo.map((item) => (
                <>
                  <div className="orgullo-slice__img">
                    <PrismicNextImage field={item.image} />
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

export default OrgulloHome;
