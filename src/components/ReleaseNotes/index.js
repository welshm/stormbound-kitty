import React from 'react'
import Article from '../Article'
import indexArray from '../../helpers/indexArray'
import releases from '../../data/releases'

const RELEASES_INDEX = indexArray(releases)

export default React.memo(function ReleaseNotes(props) {
  const release = RELEASES_INDEX[props.id]

  return (
    <Article
      title={release.title}
      description={release.excerpt}
      author='Kitty'
      image={release.background}
      action={{ to: '/releases', children: 'Back to releases' }}
      meta={'Official · ' + release.date}
      background={release.background}
      ratio={release.ratio}
      withAvif={typeof props.withAvif === 'undefined' ? true : props.withAvif}
      isEditorialContent
      withDropCap
    >
      {props.children}
    </Article>
  )
})
