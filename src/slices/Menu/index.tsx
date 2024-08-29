'use client'; // Asegúrate de que este componente se ejecute del lado del cliente
import Link from "next/link";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import './style.css'
import { useState } from "react";

/**
 * Props for `Menu`.
 */
export type MenuProps = SliceComponentProps<Content.MenuSlice>;

/**
 * Component for "Menu" Slices.
 */
const Menu = ({ slice }: MenuProps): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
              <Link href={"/"} className="menu-slice__page" onClick={closeMenu}>
                <PrismicNextImage alt="" field={slice.primary.logo} />
              </Link>
            </div>
            
            <div className={`menu-slice__links-container ${isMenuOpen ? 'open' : ''}`}>
              <div className="menu-slice__logo-mobile">
                <Link href={"/"} className="menu-slice__page" onClick={closeMenu}>
                  <PrismicNextImage alt="" field={slice.primary.logo} />
                </Link>
              </div>
              <div className="menu-slice__list-links">
                {slice.primary.groupmenu.map((item, index) => (
                  item.linklabel ? (
                  <Link key={index} href={item.linklabel} className="menu-slice__page" onClick={closeMenu}>
                    {item.label}
                  </Link>
                  ) : null
                ))}
              </div>
              
              <div className="menu-slice__btn">
                <PrismicNextLink field={slice.primary.linkbutton} className="menu-slice__link" onClick={closeMenu}>
                  <>{slice.primary.labelbutton}</>
                </PrismicNextLink>
              </div>
              <div className="menu-slice__icon" onClick={toggleMenu}>
                <Image src="/assets/images/icons8-eliminar.svg" alt={"icon"} width={30} height={30} />
              </div>
            </div>
            <div className="menu-slice__icon" onClick={toggleMenu}>
              <Image src="/assets/images/icons8-menú.svg" alt={"icon"} width={30} height={30} />
            </div>
          </div>
        </header>
      </div>
    </section>
  );
};

export default Menu;
