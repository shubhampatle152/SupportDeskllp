// This file now explicitly re-exports from the .jsx version
// to ensure the correct Header component is used.
// Ideally, this .tsx file should be deleted if your project is fully JavaScript.

import HeaderJsx from './Header.jsx';

export default function Header(props) {
  return <HeaderJsx {...props} />;
}
