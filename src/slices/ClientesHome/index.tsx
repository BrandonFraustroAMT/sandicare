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
            <div className="clientes-slice__list-box">
              <div className="clientes-slice__img">
                <iframe src="https://drive.google.com/file/d/19fPnAiWfu67Ntmziq13CtlzN7S7KfjhJ/preview" allow="autoplay"></iframe>
              </div>
              <div className="clientes-slice__text">
                <span className="icon-test">
                    <svg fill="#C8123C" height="20px" width="20px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve" stroke="#C8123C">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" stroke-linejoin="round"/>
                      <g id="SVGRepo_iconCarrier"> <g> <path d="M13,11c0.6,0,1-0.4,1-1s-0.4-1-1-1c-5,0-9,4-9,9c0,2.8,2.2,5,5,5s5-2.2,5-5s-2.2-5-5-5c-0.3,0-0.7,0-1,0.1 C9.3,11.8,11,11,13,11z"/> <path d="M23,13c-0.3,0-0.7,0-1,0.1c1.3-1.3,3-2.1,5-2.1c0.6,0,1-0.4,1-1s-0.4-1-1-1c-5,0-9,4-9,9c0,2.8,2.2,5,5,5s5-2.2,5-5 S25.8,13,23,13z"/> </g> </g>
                    </svg>
                  </span><>Son espectaculares y siempre están buscando como hacer la diferencia</>
                  <span>
                    <svg fill="#C8123C" height="20px" width="20px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve" stroke="#C8123C">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                      <g id="SVGRepo_iconCarrier"> <g> <path d="M23,9c-2.8,0-5,2.2-5,5s2.2,5,5,5c0.3,0,0.7,0,1-0.1c-1.3,1.3-3,2.1-5,2.1c-0.6,0-1,0.4-1,1s0.4,1,1,1c5,0,9-4,9-9 C28,11.2,25.8,9,23,9z"/> <path d="M9,9c-2.8,0-5,2.2-5,5s2.2,5,5,5c0.3,0,0.7,0,1-0.1C8.7,20.2,7,21,5,21c-0.6,0-1,0.4-1,1s0.4,1,1,1c5,0,9-4,9-9 C14,11.2,11.8,9,9,9z"/> </g> </g>
                      </svg>
                  </span>
              </div>
            </div>
            <div className="clientes-slice__list-box">
              <div className="clientes-slice__img">
                <iframe src="https://drive.google.com/file/d/1UBC5kGPeRDBcLNQx5QfWdnT6cWSsPBNz/preview" allow="autoplay"></iframe>
              </div>
              <div className="clientes-slice__text">
                <span className="icon-test">
                    <svg fill="#C8123C" height="20px" width="20px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve" stroke="#C8123C">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" stroke-linejoin="round"/>
                      <g id="SVGRepo_iconCarrier"> <g> <path d="M13,11c0.6,0,1-0.4,1-1s-0.4-1-1-1c-5,0-9,4-9,9c0,2.8,2.2,5,5,5s5-2.2,5-5s-2.2-5-5-5c-0.3,0-0.7,0-1,0.1 C9.3,11.8,11,11,13,11z"/> <path d="M23,13c-0.3,0-0.7,0-1,0.1c1.3-1.3,3-2.1,5-2.1c0.6,0,1-0.4,1-1s-0.4-1-1-1c-5,0-9,4-9,9c0,2.8,2.2,5,5,5s5-2.2,5-5 S25.8,13,23,13z"/> </g> </g>
                    </svg>
                  </span><>Yo invitaría a las empresas a explorar todo lo que puede ofrecer SandiCare</>
                  <span>
                    <svg fill="#C8123C" height="20px" width="20px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve" stroke="#C8123C">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                      <g id="SVGRepo_iconCarrier"> <g> <path d="M23,9c-2.8,0-5,2.2-5,5s2.2,5,5,5c0.3,0,0.7,0,1-0.1c-1.3,1.3-3,2.1-5,2.1c-0.6,0-1,0.4-1,1s0.4,1,1,1c5,0,9-4,9-9 C28,11.2,25.8,9,23,9z"/> <path d="M9,9c-2.8,0-5,2.2-5,5s2.2,5,5,5c0.3,0,0.7,0,1-0.1C8.7,20.2,7,21,5,21c-0.6,0-1,0.4-1,1s0.4,1,1,1c5,0,9-4,9-9 C14,11.2,11.8,9,9,9z"/> </g> </g>
                      </svg>
                  </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientesHome;
