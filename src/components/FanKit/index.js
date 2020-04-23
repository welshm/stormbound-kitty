import React from 'react'
import LazyLoad from 'react-lazyload'
import Column from '../Column'
import CTA from '../CTA'
import Dialog from '../Dialog'
import Icon from '../Icon'
import Image from '../Image'
import Loader from '../Loader'
import PageMeta from '../PageMeta'
import Row from '../Row'
import cards from '../../data/cards'
import chunk from '../../helpers/chunk'
import sortCards from '../../helpers/sortCards'
import useViewportWidth from '../../hooks/useViewportWidth'
import './index.css'

const Download = props => (
  <button
    className='FanKit__download'
    onClick={() => props.setActive(props.id)}
    title={'Download asset ' + props.name}
  >
    <Icon icon='download' />
  </button>
)

const DownloadDialog = props => {
  const { name, image } = props.activeCard || {}

  return (
    <Dialog
      id='dialog'
      dialogRef={props.dialogRef}
      close={props.close}
      title={name || 'Download image'}
      image={image}
    >
      {image ? (
        <>
          <p>
            <a href={image} target='_blank' rel='noopener noreferrer'>
              Open image in new tab
            </a>{' '}
            or download it as:
          </p>
          <Row>
            <Column>
              <CTA href={image} download>
                PNG
              </CTA>
            </Column>
            <Column>
              <CTA href={image.replace('.png', '.webp')} download>
                WebP
              </CTA>
            </Column>
          </Row>
        </>
      ) : (
        <p>An error has occurred.</p>
      )}
    </Dialog>
  )
}

const FanKit = props => {
  const dialogRef = React.useRef(null)
  const [active, setActive] = React.useState(null)
  const activeCard = active ? cards.find(card => card.id === active) : null
  const viewportWidth = useViewportWidth()
  const items = React.useMemo(
    () =>
      chunk(
        cards
          .filter(card => !card.token)
          .sort(sortCards())
          .concat(cards.filter(card => card.token)),
        3
      ),
    []
  )

  React.useEffect(() => {
    if (!dialogRef.current) return
    if (active) dialogRef.current.show()
    else dialogRef.current.hide()
  }, [active])

  return (
    <>
      <h1 className='VisuallyHidden'>Stormbound Fan-kit</h1>

      <DownloadDialog
        activeCard={activeCard}
        dialogRef={instance => {
          dialogRef.current = instance
          dialogRef.current.on('hide', () => setActive(null))
        }}
        close={() => dialogRef.current.hide()}
      />

      {items.map(([a, b, c]) => (
        <LazyLoad
          offset={150}
          resize
          placeholder={<Loader hideLabel />}
          height={viewportWidth > 700 ? 300 : 900}
          key={a.id}
        >
          <Row desktopOnly>
            <Column width={33}>
              <div className='FanKit__item'>
                <Download {...a} setActive={setActive} />
                <Image src={a.image} alt={a.name} className='FanKit__image' />
              </div>
            </Column>
            <Column width={33}>
              {b && (
                <div className='FanKit__item'>
                  <Download {...b} setActive={setActive} />
                  <Image src={b.image} alt={b.name} className='FanKit__image' />
                </div>
              )}
            </Column>
            <Column width={33}>
              {c && (
                <div className='FanKit__item'>
                  <Download {...c} setActive={setActive} />
                  <Image src={c.image} alt={c.name} className='FanKit__image' />
                </div>
              )}
            </Column>
          </Row>
        </LazyLoad>
      ))}

      <PageMeta
        title='Stormbound Fan Kit'
        description='All the assets from Stormbound used on Stormbound-Kitty'
      />
    </>
  )
}

export default FanKit
