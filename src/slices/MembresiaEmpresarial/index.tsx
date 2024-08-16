import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MembresiaEmpresarial`.
 */
export type MembresiaEmpresarialProps =
  SliceComponentProps<Content.MembresiaEmpresarialSlice>;

/**
 * Component for "MembresiaEmpresarial" Slices.
 */
const MembresiaEmpresarial = ({
  slice,
}: MembresiaEmpresarialProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for membresia_empresarial (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default MembresiaEmpresarial;
