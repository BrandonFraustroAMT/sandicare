'use client'
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { useRef, useEffect } from 'react';
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './CheckatSlider.css';

gsap.registerPlugin(ScrollTrigger);
/**
 * Props for `CheckaTuSaludSlider`.
 */
export type CheckaTuSaludSliderProps =
  SliceComponentProps<Content.CheckaTuSaludSliderSlice>;

/**
 * Component for "CheckaTuSaludSlider" Slices.
 */


const CheckaTuSaludSlider = ({
  slice,
}: CheckaTuSaludSliderProps): JSX.Element => {

  useEffect(() => {
    /* 1er elemento */
    gsap.timeline({
      scrollTrigger: {
        scrub: true,
        pin: "#first-column1",
        trigger: "#first-column1",
        start: "top 35%",
        end: "bottom bottom",
        toggleActions: "play pause none none",
        pinSpacing: false, // Para evitar el espacio adicional después del pin
        endTrigger: "#pin-marker",
        markers: false,
        onLeave: () => {
          gsap.set("#first-column1", { y: 1100 });
        },
      },
    })
    .to('#first-column1', {
      y: 0,
    });

    gsap.timeline({
      scrollTrigger: {
        scrub: 2,
        trigger: "#second-column1",
        start: "top 60%",
        end: "top 20%",
        toggleActions: "play pause none none",
        markers: false,
      },
    })
    .to('#second-column1', {
      y: -200,
      duration: 3,
    });

    /* 2do elemento */
    gsap.timeline({
      scrollTrigger: {
        scrub: true,
        pin: true,
        trigger: "#first-column2",
        start: "top 35%",
        end: "bottom bottom",
        toggleActions: "play pause none none",
        pinSpacing: false, // Para evitar el espacio adicional después del pin
        endTrigger: "#pin-marker2",
        markers: false,
        onLeave: () => {
          gsap.set("#first-column2", { y: 1100 });
        },
      },
    })
    .to('#first-column2', {
      y: 0,
    });

    gsap.timeline({
      scrollTrigger: {
        scrub: 2,
        trigger: "#second-column2",
        start: "top 60%",
        end: "top 20%",
        toggleActions: "play pause none none",
        markers: false,
      },
    })
    .to('#second-column2', {
      y: -200,
      duration: 3,
    });

    /* 3er elemento */
    gsap.timeline({
      scrollTrigger: {
        scrub: true,
        pin: true,
        trigger: "#first-column3",
        start: "top 35%",
        end: "bottom bottom",
        toggleActions: "play pause none none",
        pinSpacing: false, // Para evitar el espacio adicional después del pin
        endTrigger: "#pin-marker3",
        markers: false,
        onLeave: () => {
          gsap.set("#first-column3", { y: 1100 });
        },
      },
    })
    .to('#first-column3', {
      y: 0,
    });

    gsap.timeline({
      scrollTrigger: {
        scrub: 2,
        trigger: "#second-column3",
        start: "top 60%",
        end: "top 20%",
        toggleActions: "play pause none none",
        markers: false,
      },
    })
    .to('#second-column3', {
      y: -200,
      duration: 3,
    });

    /* 4to elemento */
    gsap.timeline({
      scrollTrigger: {
        scrub: true,
        pin: true,
        trigger: "#first-column4",
        start: "top 35%",
        end: "bottom bottom",
        toggleActions: "play pause none none",
        pinSpacing: false, // Para evitar el espacio adicional después del pin
        endTrigger: "#pin-marker4",
        markers: false,
        onLeave: () => {
          gsap.set("#first-column4", { y: 1100 });
        },
      },
    })
    .to('#first-column4', {
      y: 0,
    });

    gsap.timeline({
      scrollTrigger: {
        scrub: 2,
        trigger: "#second-column4",
        start: "top 60%",
        end: "top 20%",
        toggleActions: "play pause none none",
        markers: false,
      },
    })
    .to('#second-column4', {
      y: -200,
      duration: 3,
    });
    /* 5to elemento */
    gsap.timeline({
      scrollTrigger: {
        scrub: true,
        pin: true,
        trigger: "#first-column5",
        start: "top 35%",
        end: "bottom bottom",
        toggleActions: "play pause none none",
        pinSpacing: false, // Para evitar el espacio adicional después del pin
        endTrigger: "#pin-marker5",
        markers: false,
        onLeave: () => {
          gsap.set("#first-column5", { y: 1100 });
        },
      },
    })
    .to('#first-column5', {
      y: 0,
    });

    gsap.timeline({
      scrollTrigger: {
        scrub: 2,
        trigger: "#second-column5",
        start: "top 60%",
        end: "top 20%",
        toggleActions: "play pause none none",
        markers: false,
      },
    })
    .to('#second-column5', {
      y: -200,
      duration: 3,
    });

    /* 6to elemento */
    gsap.timeline({
      scrollTrigger: {
        scrub: true,
        pin: true,
        trigger: "#first-column6",
        start: "top 35%",
        end: "bottom bottom",
        toggleActions: "play pause none none",
        pinSpacing: false, // Para evitar el espacio adicional después del pin
        endTrigger: "#pin-marker6",
        markers: false,
        onLeave: () => {
          gsap.set("#first-column6", { y: 1100 });
        },
      },
    })
    .to('#first-column6', {
      y: 0,
    });

    gsap.timeline({
      scrollTrigger: {
        scrub: 2,
        trigger: "#second-column6",
        start: "top 60%",
        end: "top 20%",
        toggleActions: "play pause none none",
        markers: false,
      },
    })
    .to('#second-column6', {
      y: -200,
      duration: 3,
    });
    /* 7mo elemento */
    gsap.timeline({
      scrollTrigger: {
        scrub: true,
        pin: true,
        trigger: "#first-column7",
        start: "top 35%",
        end: "bottom bottom",
        toggleActions: "play pause none none",
        pinSpacing: false, // Para evitar el espacio adicional después del pin
        endTrigger: "#pin-marker7",
        markers: false,
        onLeave: () => {
          gsap.set("#first-column7", { y: 1100 });
        },
      },
    })
    .to('#first-column7', {
      y: 0,
    });

    gsap.timeline({
      scrollTrigger: {
        scrub: 2,
        trigger: "#second-column7",
        start: "top 60%",
        end: "top 20%",
        toggleActions: "play pause none none",
        markers: false,
      },
    })
    .to('#second-column7', {
      y: -200,
      duration: 3,
    });
  }, []);


  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="checkat-slider">
        <div className="checkat-slider__container">
          <div className="checkat-slider__column">
            {/* item1 */}
            <div className="checkat-slider__box">
              <div className="checkat-slider__columns-list">
                <div className="checkat-slider__column1" id="first-column1">
                  <div className="checkat-slider__list1">
                    <div className="checkat-slider__icon">
                      <PrismicNextImage field={slice.primary.groupslider[0]?.icon} />
                    </div>
                    <div className="checkat-slider__number">
                      <>{slice.primary.groupslider[0]?.number}</>
                    </div>
                  </div>
                  <div className="checkat-slider__list2">
                    <div className="checkat-slider__title">
                      <h2><PrismicRichText field={slice.primary.groupslider[0]?.title} /></h2>
                    </div>
                    <div className="checkat-slider__description">
                      <>{slice.primary.groupslider[0]?.description}</>
                    </div>
                  </div>
                </div>
                <div className="checkat-slider__column2" id="second-column1">
                  <div className="checkat-slider__img">
                    <PrismicNextImage field={slice.primary.groupslider[0]?.image} />
                  </div>
                </div>
              </div>
            </div>
            <div id="pin-marker"></div>

            {/* item2 */}
            <div className="checkat-slider__box">
              <div className="checkat-slider__columns-list">
                <div className="checkat-slider__column1" id="first-column2">
                  <div className="checkat-slider__list1">
                    <div className="checkat-slider__icon">
                      <PrismicNextImage field={slice.primary.groupslider[1]?.icon} />
                    </div>
                    <div className="checkat-slider__number">
                      <>{slice.primary.groupslider[1]?.number}</>
                    </div>
                  </div>
                  <div className="checkat-slider__list2">
                    <div className="checkat-slider__title">
                      <h2><PrismicRichText field={slice.primary.groupslider[1]?.title} /></h2>
                    </div>
                    <div className="checkat-slider__description">
                      <>{slice.primary.groupslider[1]?.description}</>
                    </div>
                  </div>
                </div>
                <div className="checkat-slider__column2" id="second-column2">
                  <div className="checkat-slider__img">
                    <PrismicNextImage field={slice.primary.groupslider[1]?.image} />
                  </div>
                </div>
              </div>
            </div>
            <div id="pin-marker2"></div>

            {/* item3 */}
            <div className="checkat-slider__box">
              <div className="checkat-slider__columns-list">
                <div className="checkat-slider__column1" id="first-column3">
                  <div className="checkat-slider__list1">
                    <div className="checkat-slider__icon">
                      <PrismicNextImage field={slice.primary.groupslider[2]?.icon} />
                    </div>
                    <div className="checkat-slider__number">
                      <>{slice.primary.groupslider[2]?.number}</>
                    </div>
                  </div>
                  <div className="checkat-slider__list2">
                    <div className="checkat-slider__title">
                      <h2><PrismicRichText field={slice.primary.groupslider[2]?.title} /></h2>
                    </div>
                    <div className="checkat-slider__description">
                      <>{slice.primary.groupslider[2]?.description}</>
                    </div>
                  </div>
                </div>
                <div className="checkat-slider__column2" id="second-column3">
                  <div className="checkat-slider__img">
                    <PrismicNextImage field={slice.primary.groupslider[2]?.image} />
                  </div>
                </div>
              </div>
            </div>
            <div id="pin-marker3"></div>

            {/* item4 */}
            <div className="checkat-slider__box">
              <div className="checkat-slider__columns-list">
                <div className="checkat-slider__column1" id="first-column4">
                  <div className="checkat-slider__list1">
                    <div className="checkat-slider__icon">
                      <PrismicNextImage field={slice.primary.groupslider[3]?.icon} />
                    </div>
                    <div className="checkat-slider__number">
                      <>{slice.primary.groupslider[3]?.number}</>
                    </div>
                  </div>
                  <div className="checkat-slider__list2">
                    <div className="checkat-slider__title">
                      <h2><PrismicRichText field={slice.primary.groupslider[3]?.title} /></h2>
                    </div>
                    <div className="checkat-slider__description">
                      <>{slice.primary.groupslider[3]?.description}</>
                    </div>
                  </div>
                </div>
                <div className="checkat-slider__column2" id="second-column4">
                  <div className="checkat-slider__img">
                    <PrismicNextImage field={slice.primary.groupslider[3]?.image} />
                  </div>
                </div>
              </div>
            </div>
            <div id="pin-marker4"></div>

            {/* item5 */}
            <div className="checkat-slider__box">
              <div className="checkat-slider__columns-list">
                <div className="checkat-slider__column1" id="first-column5">
                  <div className="checkat-slider__list1">
                    <div className="checkat-slider__icon">
                      <PrismicNextImage field={slice.primary.groupslider[4]?.icon} />
                    </div>
                    <div className="checkat-slider__number">
                      <>{slice.primary.groupslider[4]?.number}</>
                    </div>
                  </div>
                  <div className="checkat-slider__list2">
                    <div className="checkat-slider__title">
                      <h2><PrismicRichText field={slice.primary.groupslider[4]?.title} /></h2>
                    </div>
                    <div className="checkat-slider__description">
                      <>{slice.primary.groupslider[4]?.description}</>
                    </div>
                  </div>
                </div>
                <div className="checkat-slider__column2" id="second-column5">
                  <div className="checkat-slider__img">
                    <PrismicNextImage field={slice.primary.groupslider[4]?.image} />
                  </div>
                </div>
              </div>
            </div>
            <div id="pin-marker5"></div>

            {/* item6 */}
            <div className="checkat-slider__box">
              <div className="checkat-slider__columns-list">
                <div className="checkat-slider__column1" id="first-column6">
                  <div className="checkat-slider__list1">
                    <div className="checkat-slider__icon">
                      <PrismicNextImage field={slice.primary.groupslider[5]?.icon} />
                    </div>
                    <div className="checkat-slider__number">
                      <>{slice.primary.groupslider[5]?.number}</>
                    </div>
                  </div>
                  <div className="checkat-slider__list2">
                    <div className="checkat-slider__title">
                      <h2><PrismicRichText field={slice.primary.groupslider[5]?.title} /></h2>
                    </div>
                    <div className="checkat-slider__description">
                      <>{slice.primary.groupslider[5]?.description}</>
                    </div>
                  </div>
                </div>
                <div className="checkat-slider__column2" id="second-column6">
                  <div className="checkat-slider__img">
                    <PrismicNextImage field={slice.primary.groupslider[5]?.image} />
                  </div>
                </div>
              </div>
            </div>
            <div id="pin-marker6"></div>

            {/* item7 */}
            <div className="checkat-slider__box">
              <div className="checkat-slider__columns-list">
                <div className="checkat-slider__column1" id="first-column7">
                  <div className="checkat-slider__list1">
                    <div className="checkat-slider__icon">
                      <PrismicNextImage field={slice.primary.groupslider[6]?.icon} />
                    </div>
                    <div className="checkat-slider__number">
                      <>{slice.primary.groupslider[6]?.number}</>
                    </div>
                  </div>
                  <div className="checkat-slider__list2">
                    <div className="checkat-slider__title">
                      <h2><PrismicRichText field={slice.primary.groupslider[6]?.title} /></h2>
                    </div>
                    <div className="checkat-slider__description">
                      <>{slice.primary.groupslider[6]?.description}</>
                    </div>
                  </div>
                </div>
                <div className="checkat-slider__column2" id="second-column7">
                  <div className="checkat-slider__img">
                    <PrismicNextImage field={slice.primary.groupslider[6]?.image} />
                  </div>
                </div>
              </div>
            </div>
            <div id="pin-marker7"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckaTuSaludSlider;
