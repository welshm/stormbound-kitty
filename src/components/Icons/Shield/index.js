import React from 'react'

export default React.memo(function Shield(props) {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 32 32'
      {...props}
    >
      <path d='M30 0l-14 4-14-4c0 0-0.141 1.616 0 4l14 4.378 14-4.378c0.141-2.384 0-4 0-4zM2.256 6.097c0.75 7.834 3.547 21.007 13.744 25.903 10.197-4.896 12.995-18.069 13.744-25.903l-13.744 5.167-13.744-5.167z'></path>
    </svg>
  )
})