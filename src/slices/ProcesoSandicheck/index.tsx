"use client"
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
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
    if(innerWidth > 1190) {
      /* 1er elemento */
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
          start: "top 20%",
          end: "bottom bottom",
          toggleActions: "play pause none none",
          pinSpacing: false, // Para evitar el espacio adicional después del pin
          endTrigger: "#pin-markerPS2",
          markers: false,
          onLeave: () => {
            gsap.set("#first-col2", { y: 900 });
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

      /* 3er elemento */
      gsap.timeline({
        scrollTrigger: {
          scrub: true,
          pin: true,
          trigger: "#first-col3",
          start: "top 20%",
          end: "bottom bottom",
          toggleActions: "play pause none none",
          pinSpacing: false, // Para evitar el espacio adicional después del pin
          endTrigger: "#pin-markerPS3",
          markers: false,
          onLeave: () => {
            gsap.set("#first-col3", { y: 900 });
          },
        },
      })
      .to('#first-col3', {
        y: 0,
      });
  
      gsap.timeline({
        scrollTrigger: {
          scrub: 2,
          trigger: "#second-col3",
          start: "top 60%",
          end: "top 20%",
          toggleActions: "play pause none none",
          markers: false,
        },
      })
      .to('#second-col3', {
        y: -200,
        duration: 3,
      });

      /* 4er elemento */
      gsap.timeline({
        scrollTrigger: {
          scrub: true,
          pin: true,
          trigger: "#first-col4",
          start: "top 20%",
          end: "bottom bottom",
          toggleActions: "play pause none none",
          pinSpacing: false, // Para evitar el espacio adicional después del pin
          endTrigger: "#pin-markerPS4",
          markers: false,
          onLeave: () => {
            gsap.set("#first-col4", { y: 900 });
          },
        },
      })
      .to('#first-col4', {
        y: 0,
      });
  
      gsap.timeline({
        scrollTrigger: {
          scrub: 2,
          trigger: "#second-col4",
          start: "top 60%",
          end: "top 20%",
          toggleActions: "play pause none none",
          markers: false,
        },
      })
      .to('#second-col4', {
        y: -200,
        duration: 3,
      });

      /* 5to elemento */
      gsap.timeline({
        scrollTrigger: {
          scrub: true,
          pin: true,
          trigger: "#first-col5",
          start: "top 20%",
          end: "bottom bottom",
          toggleActions: "play pause none none",
          pinSpacing: false, // Para evitar el espacio adicional después del pin
          endTrigger: "#pin-markerPS5",
          markers: false,
          onLeave: () => {
            gsap.set("#first-col5", { y: 900 });
          },
        },
      })
      .to('#first-col5', {
        y: 0,
      });
  
      gsap.timeline({
        scrollTrigger: {
          scrub: 2,
          trigger: "#second-col5",
          start: "top 60%",
          end: "top 20%",
          toggleActions: "play pause none none",
          markers: false,
        },
      })
      .to('#second-col5', {
        y: -200,
        duration: 3,
      });

      /* 6to elemento */
      gsap.timeline({
        scrollTrigger: {
          scrub: true,
          pin: true,
          trigger: "#first-col6",
          start: "top 20%",
          end: "bottom bottom",
          toggleActions: "play pause none none",
          pinSpacing: false, // Para evitar el espacio adicional después del pin
          endTrigger: "#pin-markerPS6",
          markers: false,
          onLeave: () => {
            gsap.set("#first-col6", { y: 900 });
          },
        },
      })
      .to('#first-col6', {
        y: 0,
      });
  
      gsap.timeline({
        scrollTrigger: {
          scrub: 2,
          trigger: "#second-col6",
          start: "top 60%",
          end: "top 20%",
          toggleActions: "play pause none none",
          markers: false,
        },
      })
      .to('#second-col6', {
        y: -200,
        duration: 3,
      });

      /* 7mo elemento */
      gsap.timeline({
        scrollTrigger: {
          scrub: true,
          pin: true,
          trigger: "#first-col7",
          start: "top 20%",
          end: "bottom bottom",
          toggleActions: "play pause none none",
          pinSpacing: false, // Para evitar el espacio adicional después del pin
          endTrigger: "#pin-markerPS7",
          markers: false,
          onLeave: () => {
            gsap.set("#first-col7", { y: 900 });
          },
        },
      })
      .to('#first-col7', {
        y: 0,
      });
  
      gsap.timeline({
        scrollTrigger: {
          scrub: 2,
          trigger: "#second-col7",
          start: "top 60%",
          end: "top 20%",
          toggleActions: "play pause none none",
          markers: false,
        },
      })
      .to('#second-col7', {
        y: -200,
        duration: 3,
      });
    }
  }, []);

  const handleClick = (label: string) => {
    gtag('event', 'click', {
      event_category: 'Button',
      event_label: label,
    });
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="proceso-sandicheck">
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
              {
                slice.primary.groupprocesosandicheck[0]?.descarga === true ?
                (
                  <div className="proceso-sandicheck__buttons">
                    <PrismicNextLink field={slice.primary.groupprocesosandicheck[0]?.link_descarga_ios} className="proceso-sandicheck__link" onClick={() => handleClick(item.labelbutton)}>
                      <>{slice.primary.groupprocesosandicheck[0]?.label_descarga_ios}</>
                    </PrismicNextLink>
                    <PrismicNextLink field={slice.primary.groupprocesosandicheck[0]?.link_descarga_android} className="proceso-sandicheck__link" onClick={() => handleClick(item.labelbutton)}>
                      <>{slice.primary.groupprocesosandicheck[0]?.label_descarga_android}</>
                    </PrismicNextLink>
                  </div>
                )
                :
                (
                  <div></div>
                )
              }
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

          <div className="proceso-sandicheck__box">
            <div className="proceso-sandicheck__box-column1" id="first-col3">
              <div className="proceso-sandicheck__box-img">
                <PrismicNextImage field={slice.primary.groupprocesosandicheck[2]?.image} />
              </div>
            </div>
            <div className="proceso-sandicheck__box-column2" id="second-col3">
              <div className="proceso-sandicheck__box-subtitle">
                <>{slice.primary.groupprocesosandicheck[2]?.subtitle}</>
              </div>
              <div className="proceso-sandicheck__box-description">
                <>{slice.primary.groupprocesosandicheck[2]?.description}</>
              </div>
            </div>
          </div>
          <div id="pin-markerPS3"></div>

          <div className="proceso-sandicheck__box">
            <div className="proceso-sandicheck__box-column1" id="first-col4">
              <div className="proceso-sandicheck__box-img">
                <PrismicNextImage field={slice.primary.groupprocesosandicheck[3]?.image} />
              </div>
            </div>
            <div className="proceso-sandicheck__box-column2" id="second-col4">
              <div className="proceso-sandicheck__box-subtitle">
                <>{slice.primary.groupprocesosandicheck[3]?.subtitle}</>
              </div>
              <div className="proceso-sandicheck__box-description">
                <>{slice.primary.groupprocesosandicheck[3]?.description}</>
              </div>
            </div>
          </div>
          <div id="pin-markerPS4"></div>

          <div className="proceso-sandicheck__box">
            <div className="proceso-sandicheck__box-column1" id="first-col5">
              <div className="proceso-sandicheck__box-img">
                <PrismicNextImage field={slice.primary.groupprocesosandicheck[4]?.image} />
              </div>
            </div>
            <div className="proceso-sandicheck__box-column2" id="second-col5">
              <div className="proceso-sandicheck__box-subtitle">
                <>{slice.primary.groupprocesosandicheck[4]?.subtitle}</>
              </div>
              <div className="proceso-sandicheck__box-description">
                <>{slice.primary.groupprocesosandicheck[4]?.description}</>
              </div>
            </div>
          </div>
          <div id="pin-markerPS5"></div>

          <div className="proceso-sandicheck__box">
            <div className="proceso-sandicheck__box-column1" id="first-col6">
              <div className="proceso-sandicheck__box-img">
                <PrismicNextImage field={slice.primary.groupprocesosandicheck[5]?.image} />
              </div>
            </div>
            <div className="proceso-sandicheck__box-column2" id="second-col6">
              <div className="proceso-sandicheck__box-subtitle">
                <>{slice.primary.groupprocesosandicheck[5]?.subtitle}</>
              </div>
              <div className="proceso-sandicheck__box-description">
                <>{slice.primary.groupprocesosandicheck[5]?.description}</>
              </div>
            </div>
          </div>
          <div id="pin-markerPS6"></div>

          <div className="proceso-sandicheck__box">
            <div className="proceso-sandicheck__box-column1" id="first-col7">
              <div className="proceso-sandicheck__box-img">
                <PrismicNextImage field={slice.primary.groupprocesosandicheck[6]?.image} />
              </div>
            </div>
            <div className="proceso-sandicheck__box-column2" id="second-col7">
              <div className="proceso-sandicheck__box-subtitle">
                <>{slice.primary.groupprocesosandicheck[6]?.subtitle}</>
              </div>
              <div className="proceso-sandicheck__box-description">
                <>{slice.primary.groupprocesosandicheck[6]?.description}</>
              </div>
            </div>
          </div>
          <div id="pin-markerPS7"></div>

          
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
                        {
                          item.descarga === true ?
                          (
                            <div className="proceso-sandicheck__buttons">
                              <PrismicNextLink field={slice.primary.groupprocesosandicheck[0]?.link_descarga_ios} className="proceso-sandicheck__link" onClick={() => handleClick(item.labelbutton)}>
                                <>{slice.primary.groupprocesosandicheck[0]?.label_descarga_ios}</>
                              </PrismicNextLink>
                              <PrismicNextLink field={slice.primary.groupprocesosandicheck[0]?.link_descarga_android} className="proceso-sandicheck__link" onClick={() => handleClick(item.labelbutton)}>
                                <>{slice.primary.groupprocesosandicheck[0]?.label_descarga_android}</>
                              </PrismicNextLink>
                            </div>
                          )
                          :
                          (
                            <div></div>
                          )
                        }
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcesoSandicheck;
