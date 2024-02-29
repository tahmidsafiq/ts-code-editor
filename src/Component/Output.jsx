import React from 'react';

const Output = ({ srcCode }) => {
  return (
    <div>
      <div className='bg-pink-50 shadow-md mt-4'>
        <iframe
          className='w-full h-60'
          srcDoc={srcCode}
          title='output'
          sandbox='allow-scripts'
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default Output;
