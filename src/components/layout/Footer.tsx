// This file now explicitly re-exports from the .jsx version
// to ensure the correct Footer component is used.
// Ideally, this .tsx file should be deleted if your project is fully JavaScript.

import FooterJsx from './Footer.jsx';

export default function Footer(props) {
  return <FooterJsx {...props} />;
}
