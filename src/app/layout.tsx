// This file now explicitly re-exports from the .jsx version
// to ensure the correct RootLayout is used.
// Ideally, this .tsx file should be deleted if your project is fully JavaScript.

import RootLayoutJsx, { metadata as metadataJsx } from './layout.jsx';

export const metadata = metadataJsx;

export default function RootLayout(props) {
  return <RootLayoutJsx {...props} />;
}
