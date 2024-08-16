import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";


import './MembresiasHero.css'
/**
 * Props for `MembresiasHero`.
 */
export type MembresiasHeroProps =
  SliceComponentProps<Content.MembresiasHeroSlice>;

/**
 * Component for "MembresiasHero" Slices.
 */
const MembresiasHero = ({ slice }: MembresiasHeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="membresias-hero">
        <div className="membresias-container">
          <div className="membresias-title">
            <h2><PrismicRichText field={slice.primary.title} /></h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembresiasHero;
