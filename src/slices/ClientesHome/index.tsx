import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import './Clientes.css'
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `ClientesHome`.
 */
export type ClientesHomeProps = SliceComponentProps<Content.ClientesHomeSlice>;

/**
 * Component for "ClientesHome" Slices.
 */
const ClientesHome = ({ slice }: ClientesHomeProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="clientes-slice">
        <div className="clientes-slice__container">
          <div className="clientes-slice__title">
            <h2>
              <PrismicRichText field={slice.primary.title} />
            </h2>
          </div>
          <div className="clientes-slice_list">
            <>
              {slice.primary.groupclientes.map((item) => (
                <>
                  <div className="clientes-slice__list-box">
                    <div className="clientes-slice__img">
                      <PrismicNextImage field={item.image} />
                    </div>
                    <div className="clientes-slice__text">
                      <>{item.text}</>
                    </div>
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

export default ClientesHome;
