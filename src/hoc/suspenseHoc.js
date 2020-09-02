import React, {Suspense} from 'react';

const suspenseHoc = (WrapComponent) => {
  function HocContent() {
    return (
      <Suspense fallback={<p>Loading</p>}>
        <WrapComponent />
      </Suspense>
    );
  }
  return HocContent;
};

export default suspenseHoc;
