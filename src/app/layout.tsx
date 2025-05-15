// This file is superseded by layout.jsx
// Please remove this .tsx file.
import RootLayoutJsx, { metadata as metadataJsx } from './layout.jsx';

export const metadata = metadataJsx;

export default function RootLayout(props) {
  return <RootLayoutJsx {...props} />;
}
