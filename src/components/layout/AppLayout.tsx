// This file now explicitly re-exports from the .jsx version
// to ensure the correct AppLayout component is used.
// Ideally, this .tsx file should be deleted if your project is fully JavaScript.

import AppLayoutJsx from './AppLayout.jsx';

export default function AppLayout(props) {
  return <AppLayoutJsx {...props} />;
}
