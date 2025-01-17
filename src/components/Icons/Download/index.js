import React from 'react'

export default React.memo(function Download(props) {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 32 32'
      {...props}
    >
      <path d='M18 8l-4-4h-14v26h32v-22h-14zM16 27l-7-7h5v-8h4v8h5l-7 7z'></path>
    </svg>
  )
})
