'use client'; // Asegúrate de que este componente se ejecute del lado del cliente
import Link from "next/link";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import './style.css'
import Button from "@/components/Button";

/**
 * Props for `Menu`.
 */
export type MenuProps = SliceComponentProps<Content.MenuSlice>;

/**
 * Component for "Menu" Slices.
 */
const Menu = ({ slice }: MenuProps): JSX.Element => {

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="menu-background"
    >
      <div className="menu-slice">
        <header className="menu-slice__container">
          <div className="menu-slice__list">
            <div className="menu-slice__logo">
              <a href="#" className="menu-slice__img">
                <PrismicNextImage alt="" field={slice.primary.logo} />
              </a>
            </div>
            
            <div className="menu-slice__list-links">
              {slice.primary.groupmenu.map((item, index) => (
                item.linklabel ? (
                <Link key={index} href={item.linklabel} className="menu-slice__page">
                  {item.label}
                </Link>
                ) : null
              ))}
            </div>
            
            {/* Boton */}
            {/* <Button href={slice.primary.linkbutton} text={slice.primary.labelbutton}/> */}
            <div className="menu-slice__btn">
              <PrismicNextLink field={slice.primary.linkbutton} className="menu-slice__link">
                <>{slice.primary.labelbutton}</>
              </PrismicNextLink>
            </div>
          </div>
        </header>
      </div>

    </section>
  );
};

export default Menu;
