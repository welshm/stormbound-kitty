import React from 'react'
import { useFela } from 'react-fela'
import Link from '../Link'
import Page from '../Page'
import Icon from '../Icon'
import Image from '../Image'
import Row from '../Row'
import Spacing from '../Spacing'
import chunk from '../../helpers/chunk'
import videos from '../../data/videos'
import styles from './styles'

export default React.memo(function Videos(props) {
  const { css } = useFela()

  return (
    <Page
      title='Videos'
      description='Find here a list of popular and active Stormbound video content creators and their YouTube channels.'
      isEditorialContent
    >
      {chunk(videos, 2).map((row, index) => (
        <Row key={index} isDesktopOnly withWideGutter>
          {row.map((video, index, array) => (
            <React.Fragment key={video.author}>
              <Row.Column>
                <Spacing bottom='LARGER'>
                  <Row isDesktopOnly withWideGutter>
                    <Row.Column width='1/3' extend={styles.column}>
                      <Image
                        src={video.thumbnail}
                        alt={`${video.author}’s avatar`}
                        extend={styles.image}
                      />
                    </Row.Column>
                    <Row.Column
                      width='2/3'
                      extend={{ justifyContent: 'center' }}
                    >
                      <h2 className={css(styles.title)}>
                        <Link to={`/member/${video.author}`}>
                          {video.author}
                        </Link>
                      </h2>
                      {video.description}
                      <p>
                        <Icon icon='arrow-right' extend={styles.icon} />
                        <Link href={video.href} extend={styles.link}>
                          Visit {video.author}’s channel
                        </Link>
                      </p>
                    </Row.Column>
                  </Row>
                </Spacing>
              </Row.Column>
              {videos.length % 2 !== 0 && index === array.length - 1 && (
                <Row.Column />
              )}
            </React.Fragment>
          ))}
        </Row>
      ))}
    </Page>
  )
})
