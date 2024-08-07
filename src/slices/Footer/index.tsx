import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

import './Footer.css';

/**
 * Props for `Footer`.
 */
export type FooterProps = SliceComponentProps<Content.FooterSlice>;

/**
 * Component for "Footer" Slices.
 */
const Footer = ({ slice }: FooterProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="footer-slice">
        <div className="footer-slice__container">
          <div className="footer-slice__column1">
            <PrismicNextLink field={slice.primary.linklogo} className="footer-slice__link-img">
              <PrismicNextImage field={slice.primary.logo} />
            </PrismicNextLink>
            <div className="footer-slice__text"><>{slice.primary.text}</></div>
            <div className="footer-slice__socialmedia">
              <>
                {slice.primary.groupredes.map((item) => (
                  // Render the item
                  <>
                    <PrismicNextLink field={item.linkicon} className="footer-slice__link-icon">
                      <PrismicNextImage field={item.icon} />
                    </PrismicNextLink>
                  </>
                ))}
              </>
            </div>
          </div>
          <div className="footer-slice__column2">
            <div className="footer-slice__list">
              <div className="footer-slice__list-col">
                <div className="footer-slice__list-title">
                  <h3>{slice.primary.label1}</h3>
                </div>
                <>
                  {slice.primary.grouplabel1.map((item) => (
                    <>
                      <div className="footer-slice__links">
                        <PrismicNextLink field={item.linktext} className="footer-slice__list-link">
                          <>{item.text}</>
                        </PrismicNextLink>
                      </div>
                    </>
                  )
                  )}
                </>
              </div>
              <div className="footer-slice__list-col">
                <div className="footer-slice__list-title">
                  <h3>{slice.primary.label2}</h3>
                </div>
                <>
                  {slice.primary.grouplabel2.map((item) => (
                    <>
                      <div className="footer-slice__links">
                        <PrismicNextLink field={item.linktext} className="footer-slice__list-link">
                          <>{item.text}</>
                        </PrismicNextLink>
                      </div>
                    </>
                  )
                  )}
                </>
              </div>
              <div className="footer-slice__list-col">
                <div className="footer-slice__list-title">
                  <h3>{slice.primary.label3}</h3>
                </div>
                <>
                  {slice.primary.grouplabel3.map((item) => (
                    <>
                      <div className="footer-slice__links">
                        <PrismicNextLink field={item.linktext} className="footer-slice__list-link">
                          <>{item.text}</>
                        </PrismicNextLink>
                      </div>
                    </>
                  )
                  )}
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Footer;
