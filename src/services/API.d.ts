import React from 'react';

declare module 'API' {
  //export function API(): any
  export default { get(): any };
  export default { save(): any };
  export default { update(): any };
  export default { remove(): any };
} 