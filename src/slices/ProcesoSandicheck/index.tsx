"use client"
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useEmblaCarousel from 'embla-carousel-react'

import './Proceso.css';
import { useEffect } from "react";

/**
 * Props for `ProcesoSandicheck`.
 */
export type ProcesoSandicheckProps =
  SliceComponentProps<Content.ProcesoSandicheckSlice>;

/**
 * Component for "ProcesoSandicheck" Slices.
 */
const ProcesoSandicheck = ({ slice }: ProcesoSandicheckProps): JSX.Element => {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  useEffect(() => {
    /* 1er elemento */
    if(innerWidth > 1190) {
      gsap.timeline({
        scrollTrigger: {
          scrub: true,
          pin: "#first-col1",
          trigger: "#first-col1",
          start: "top 20%",
          end: "bottom bottom",
          toggleActions: "play pause none none",
          pinSpacing: false, // Para evitar el espacio adicional después del pin
          endTrigger: "#pin-markerPS",
          markers: false,
          onLeave: () => {
            gsap.set("#first-col1", { y: 900 });
          },
        },
      })
      .to('#first-col1', {
        y: 0,
      });
  
      gsap.timeline({
        scrollTrigger: {
          scrub: 2,
          trigger: "#second-col1",
          start: "top 60%",
          end: "top 20%",
          toggleActions: "play pause none none",
          markers: false,
        },
      })
      .to('#second-col1', {
        y: -200,
        duration: 3,
      });
  
      /* 2do elemento */
      gsap.timeline({
        scrollTrigger: {
          scrub: true,
          pin: true,
          trigger: "#first-col2",
          start: "top 35%",
          end: "bottom bottom",
          toggleActions: "play pause none none",
          pinSpacing: false, // Para evitar el espacio adicional después del pin
          endTrigger: "#pin-markerPS2",
          markers: false,
          onLeave: () => {
            gsap.set("#first-col2", { y: 1100 });
          },
        },
      })
      .to('#first-col2', {
        y: 0,
      });
  
      gsap.timeline({
        scrollTrigger: {
          scrub: 2,
          trigger: "#second-col2",
          start: "top 60%",
          end: "top 20%",
          toggleActions: "play pause none none",
          markers: false,
        },
      })
      .to('#second-col2', {
        y: -200,
        duration: 3,
      });
    }
  }, []);

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
            <div className="proceso-sandicheck__box-column1" id="first-col1">
              <div className="proceso-sandicheck__box-img">
                <PrismicNextImage field={slice.primary.groupprocesosandicheck[0]?.image} />
              </div>
            </div>
            <div className="proceso-sandicheck__box-column2" id="second-col1">
              <div className="proceso-sandicheck__box-subtitle">
                <>{slice.primary.groupprocesosandicheck[0]?.subtitle}</>
              </div>
              <div className="proceso-sandicheck__box-description">
                <>{slice.primary.groupprocesosandicheck[0]?.description}</>
              </div>
            </div>
          </div>
          <div id="pin-markerPS"></div>

          <div className="proceso-sandicheck__box">
            <div className="proceso-sandicheck__box-column1" id="first-col2">
              <div className="proceso-sandicheck__box-img">
                <PrismicNextImage field={slice.primary.groupprocesosandicheck[1]?.image} />
              </div>
            </div>
            <div className="proceso-sandicheck__box-column2" id="second-col2">
              <div className="proceso-sandicheck__box-subtitle">
                <>{slice.primary.groupprocesosandicheck[1]?.subtitle}</>
              </div>
              <div className="proceso-sandicheck__box-description">
                <>{slice.primary.groupprocesosandicheck[1]?.description}</>
              </div>
            </div>
          </div>
          <div id="pin-markerPS2"></div>

          
          <div className="carrusel-container-proceso embla">
            <div className="embla" ref={emblaRef}>
              <div className="embla__container">
                {slice.primary.groupprocesosandicheck.map((item, index) => (
                  <div className="carrusel-sandicheck__box embla__slide" key={index}>
                    <div className="carrusel-sandicheck__box-column1">
                      <div className="carrusel-sandicheck__box-img">
                        <PrismicNextImage field={item.image} />
                      </div>
                    </div>
                    <div className="carrusel-sandicheck__box-column2">
                      <div className="carrusel-sandicheck__box-subtitle">
                        <>{item.subtitle}</>
                      </div>
                      <div className="carrusel-sandicheck__box-description">
                        <>{item.description}</>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default ProcesoSandicheck;
