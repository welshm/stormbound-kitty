const table = ({ isZebra }) => ({
  textAlign: 'center',
  tableLayout: 'fixed',
  maxWidth: '100%',
  width: '100%',
  borderCollapse: 'collapse',
  color: isZebra ? 'rgb(159, 212, 231)' : undefined,
  overflow: isZebra ? 'hidden' : undefined,
  position: isZebra ? 'relative' : undefined,

  /**
   * 1. Border allowing for seeing the zebra rows a few pixels all around the
   *    table, effectively an inner border.
   */
  '::before': {
    content: isZebra ? '""' : undefined /* 1 */,
    position: 'absolute',
    top: '3px',
    right: '3px',
    bottom: '3px',
    left: '3px',
    border: '1px solid var(--dark-beige)',
    pointerEvents: 'none',
  },

  /**
   * 1. Hide the table headers.
   */
  '> thead': {
    backgroundColor: isZebra ? 'var(--dark-blue)' : undefined,

    small: {
      display: 'block',
      position: 'absolute' /* 1 */,
      top: '-9999px' /* 1 */,
      left: '-9999px' /* 1 */,
    },

    '> tr > th': {
      color: isZebra ? 'var(--beige)' : undefined,
    },
  },

  '> tbody': {
    '> tr:nth-child(even)': {
      backgroundColor: isZebra ? 'rgb(30, 72, 88)' : undefined,
    },

    '> tr:nth-child(odd)': {
      backgroundColor: isZebra ? 'var(--light-blue)' : undefined /* 1 */,
    },

    small: { display: 'block' },
  },

  /**
   * 1. Avoid double borders on the top of the table.
   */
  '> * > tr': {
    small: {
      display: 'block',
      padding: '0.5em 0',
      border: '1px solid var(--dark-beige)',
      ':not(:first-child)': { borderTop: 0 /* 1 */ },
    },
  },

  '> * > tr > td': {
    small: {
      padding: '0.25em 1em',
      textAlign: 'left',

      '::before': {
        color: 'var(--beige)',
        width: '50%',
        display: 'inline-block',
        content: 'attr(data-label)',
        marginRight: '1ch',
      },
    },
  },

  '> * > tr > *': {
    padding: '0.75em 0.5em',
    textAlign: 'center',
    position: 'relative',

    ':not(:empty)': {
      border: isZebra ? undefined : '1px solid rgba(255, 255, 255, 0.2)',
      small: { border: 0 },
    },

    small: {
      display: 'block',
    },
  },

  small: {
    textAlign: 'left',
    display: 'block',

    /**
     * 1. Hide the fake border around the table since table rows are using borders
     *    on mobile.
     */
    '::before': {
      content: 'none' /* 1 */,
    },
  },
})

export default { table }