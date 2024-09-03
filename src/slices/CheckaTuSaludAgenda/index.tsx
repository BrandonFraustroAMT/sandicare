"use client"
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import './CheckatAgenda.css'
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `CheckaTuSaludAgenda`.
 */
export type CheckaTuSaludAgendaProps =
  SliceComponentProps<Content.CheckaTuSaludAgendaSlice>;

/**
 * Component for "CheckaTuSaludAgenda" Slices.
 */
const CheckaTuSaludAgenda = ({
  slice,
}: CheckaTuSaludAgendaProps): JSX.Element => {
  const handleClick = (label: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Button',
        event_label: label,
      });
    }
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="checkat-agenda">
        <div className="checkat-agenda__container">
          <div className="checkat-agenda__title"><h2><PrismicRichText field={slice.primary.title} /></h2></div>
          <div className="checkat-agenda__btn">
            <PrismicNextLink field={slice.primary.linkbutton} className="checkat-agenda__link" onClick={() => handleClick(slice.primary.labelbutton ?? 'Default Label')}>
              <>{slice.primary.labelbutton}</>
            </PrismicNextLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckaTuSaludAgenda;
