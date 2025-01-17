import React from 'react'
import Teasers from '~/components/Teasers'
import Link from '~/components/Link'
import getExcerpt from '~/helpers/getExcerpt'
import getResolvedCardData from '~/helpers/getResolvedCardData'
import capitalize from '~/helpers/capitalize'

const StoryAuthor = React.memo(function StoryAuthor(props) {
  return (
    <>
      {capitalize(props.type || 'story')} by{' '}
      <Link to={'/members/' + props.author.toLowerCase()}>{props.author}</Link>{' '}
    </>
  )
})

const getStoryTeaser = story => {
  const id =
    story.id ||
    window.btoa(encodeURIComponent(story.title + '-' + story.author))
  const excerpt = getExcerpt(story.content, 150)
  const meta = <StoryAuthor {...story} />

  return {
    ...story,
    card: {
      ...getResolvedCardData({ id: story.cardId, level: 1 }),
      ...story.card,
    },
    meta: meta,
    excerpt: excerpt,
    to: `/stories/${story.slug || id}`,
  }
}

export default React.memo(function Stories(props) {
  return <Teasers items={props.stories.map(getStoryTeaser)} />
})
