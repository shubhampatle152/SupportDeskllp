// This file now explicitly re-exports from the .jsx version
// to ensure the correct Providers component is used.
// Ideally, this .tsx file should be deleted if your project is fully JavaScript.

import { Providers as ProvidersJsx } from './providers.jsx';

export function Providers(props) {
  return <ProvidersJsx {...props} />;
}
