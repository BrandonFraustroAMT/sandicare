'use client'; // Asegúrate de que este componente se ejecute del lado del cliente
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
    >
      <div className="breakpointUtils__DesktopTabletOnly-sc-90pxmk-3 navbar">
        <header className="DesktopTablet__Wrapper-sc-x1rrkn-0 iXruOj navbar-header">
          <div className="DesktopTablet__Inner-sc-x1rrkn-1 ihApXk">
            <div className="menu-slice__logo">
              <a href="#" className="Link__Wrapper-sc-ct3g9f-1 chXumO">
                <PrismicNextImage alt="" field={slice.primary.logo} />
              </a>
            </div>
            
            {slice.primary.groupmenu.map((item, index) => (
              <PrismicNextLink key={index} field={item.linklabel} className="menu-slice__link">
                {item.label}
              </PrismicNextLink>
            ))}
            
            {/* Boton */}
            <Button href={slice.primary.linkbutton} text={slice.primary.labelbutton}/>
          </div>
        </header>
      </div>

    </section>
  );
};

export default Menu;
