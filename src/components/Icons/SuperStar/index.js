import React from 'react'

export default React.memo(function SuperStar(props) {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      width='72'
      height='72'
      viewBox='0 0 72 72'
      {...props}
    >
      <polygon points='35.9248,6.0368 27.7233,22.6704 9.3713,25.3441 22.6564,38.2843 19.5282,56.5642 35.9403,47.928 52.3589,56.552 49.2171,38.2744 62.4926,25.3244 44.1387,22.6643' />
      <polygon points='35.932,56.9779 33.4484,65.9632 38.4155,65.9632' />
      <polygon points='57.8156,41.0785 65.5937,46.2171 67.1286,41.4932' />
      <polygon points='14.1758,41.4594 4.8714,42.0365 6.4885,46.7329' />
      <polygon points='50.4125,16.0862 57.9972,10.6662 54.1371,7.5403' />
      <polygon points='22.0843,15.5917 18.6602,6.9211 14.6934,9.9103' />
    </svg>
  )
})
