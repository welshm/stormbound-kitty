import React from 'react'
import { Link } from 'react-router-dom'
import guides from '../../data/guides'
import BattleSimApp from '../BattleSimApp'
import CardLink from '../CardLink'
import Column from '../Column'
import DeckStatsChart from '../DeckStatsChart'
import FeaturedDeck from '../FeaturedDeck'
import Info from '../Info'
import Guide from '../Guide'
import Notice from '../Notice'
import { Stones } from '../Resource'
import Row from '../Row'
import Sparkles from '../Sparkles'
import Title from '../Title'
import serialisation from '../../helpers/serialisation'
import getResolvedCardData from '../../helpers/getResolvedCardData'
import './index.css'

const guide = guides.find(g => g.id === 'RECKLESS_RUSH_GUIDE')

const Board = props => (
  <Guide.FullWidth>
    <BattleSimApp environment='swarm' mode='DISPLAY' simId={props.id} />
    {props.caption ? (
      <p className='GuideRecklessRush__caption'>{props.caption}</p>
    ) : null}
  </Guide.FullWidth>
)

export default React.memo(function GuideRecklessRush(props) {
  return (
    <Guide {...guide}>
      <p>
        So you want to learn the hidden arts of Reckless Rush (
        <abbr title='Reckless Rush'>RR</abbr>)? Well who better to teach you
        then Reckless Rush himself. In this guide you will learn how to play a
        super aggressive playstyle which can be applied to all rush deck
        archetypes as well as how to play RR at a very effective level.
      </p>
      <p>
        For those not familiar with the RR deck, it is a hyper-aggressive Swarm
        rush deck that focuses on closing out games as fast as possible to
        prevent card level differences between you and your opponent from
        influencing the game heavily. In other words, if you’re looking for a
        deck that can get you to high ranks with relatively low levels, this is
        the perfect deck for you.
      </p>

      <ol style={{ columns: '16em' }}>
        <li>
          <a href='#the-decks'>The decks</a>
        </li>
        <li>
          <a href='#how-to-play'>How to play</a>
        </li>
        <li>
          <a href='#prioritisation'>Prioritisation</a>
        </li>
        <li>
          <a href='#cycling'>Cycling</a>
        </li>
        <li>
          <a href='#order'>Order</a>
        </li>
      </ol>

      <Guide.FullWidth padding='120px'>
        <Title id='the-decks'>The Decks</Title>

        <Row desktopOnly wideGutter>
          <Column>
            <FeaturedDeck
              id='2n13n23s14n32s243s23n632n671s64n151s84s11'
              name='Reckless Rush'
              author='RecklessRush'
              category='REGULAR'
              staticLevels
            />
          </Column>
          <Column>
            <p>This is the main Reckless Rush deck in all its glory.</p>
            <p>
              These were my exact card levels when I reached Diamond 5. Note
              that <CardLink id='N63' /> costed 2 mana at that time instead of
              3. That being said, even at 3 mana, it is still very viable.
            </p>
          </Column>
        </Row>

        <Row desktopOnly wideGutter>
          <Column>
            <p>
              If you play in Gold or in lower leagues, I would recommend a small
              variation of the deck with <CardLink id='N26' /> instead of{' '}
              <CardLink id='S24' />
              —which are pretty fantastic at lower levels. These were my exact
              card levels when I reached Platinum at 12 base health.
            </p>
            <p>
              Another swap that can be considered would be <CardLink id='N2' />{' '}
              for <CardLink id='N66' />, especially since they now cost 2 mana
              only. It’s a 1-mana trade-off for more control and movement, and
              most importantly less random.
            </p>
          </Column>
          <Column>
            <FeaturedDeck
              id='2n11n663s12n32s21n672s62n151s82n632s112n26'
              name='Reckless Rush (Snowmasons)'
              author='RecklessRush'
              category='REGULAR'
              staticLevels
            />
          </Column>
        </Row>
      </Guide.FullWidth>

      <Guide.FullWidth padding='120px'>
        <Row desktopOnly wideGutter>
          <Column>
            <p>
              As you might have noticed by now, Reckless Rush decks consist of
              an extremely low mana curve, with the most expensive card peaking
              at a cost of 4 mana.
            </p>
            <p>
              Now some of you are probably wondering, “why should I even play
              this?” Apart from it being one of the highest win rate decks to
              ever exist, RR is great for players who are looking for quick
              games (possibly to grind gold or finish quests) or looking to
              climb high ranks with relatively low level cards. In fact these
              were my levels upon reaching plat 5 with base health 12.
            </p>
          </Column>
          <Column>
            <DeckStatsChart
              deck={serialisation.deck
                .deserialise('2n13n23s14n32s243s23n632n671s64n151s84s11')
                .map(getResolvedCardData)}
              modifier='NONE'
            />
          </Column>
        </Row>
      </Guide.FullWidth>

      <p>
        Additionally, I’d like to quickly point out that this deck is amazing
        for grinding quick gold on ladder since games are short and it also
        makes for a very well rounded deck in most Brawls allowing you to
        achieve the <Stones amount={10} /> milestone. Now that you’re all caught
        up on the introduction, let’s dive into the specifics of this guide.
      </p>

      <Title id='how-to-play'>How to play</Title>

      <p>
        Before jumping into this concept I like to call “prioritisation”, the
        very first thing I’d like you to do is take a good look at the deck.
        Take some time to understand it, analyse it (find which cards mix
        together well) and most importantly{' '}
        <span className='Highlight'>memorise</span> it!
      </p>
      <p>
        I cannot stress this part enough because if you are going into a match
        without knowing all the cards in your deck, you’re essentially trying to
        cook a recipe without knowing its ingredients. To play any Stormbound
        deck at a competitive level, the first step is to analyse the deck.
      </p>
      <p>So let’s get right into a brief overview of all its cards.</p>

      <h3>Green Prototypes</h3>
      <p>
        <CardLink id='N1' /> are amazing, especially for 1 mana. It is the only
        1 mana unit card with movement that currently exists in the game. It is
        great for setting up combos (since it’s so cheap), moving frontline up
        so you can deploy more units closer to the enemy base, great for trading
        into enemy units in last resort defenses, and overall it is just an
        extra unit on the board the enemy has to deal with.
      </p>

      <p>
        This card is mostly used for baiting the enemy to attack it, defend a
        stronger unit that is tucked in the corner, or just to move frontline
        up/keep frontline. It is perfect for Trinity Openers which will be
        discussed later on in the guide.
      </p>

      <Info icon='compass' title='Green Prototypes guide'>
        For more reasons to love Green Prototypes as a card, refer to the{' '}
        <Link to='/guides/green-prototypes'>
          Green Prototypes guide by Stratadox
        </Link>
        .
      </Info>

      <h3>Summon Militia</h3>
      <p>
        <CardLink id='N2' /> is not the greatest card in the deck so you should
        not be actively looking to play it. In fact, it is typically cycled
        quite often as its main purpose is to use up any excess 1 mana you have
        and speed up your deck cycle. Remember, the more cards you play, the
        faster you will draw back cards you played previously.
      </p>

      <p>
        Look to only use play it on turns where you will have 1 mana in excess.
        In regards to the actual value of the card, it’s only expected to be
        used to hold your frontline, otherwise it’s not a really great.
      </p>

      <h3>Doppelbocks</h3>
      <p>
        <CardLink id='S1' /> is an amazing 2 mana card—so unique and can serve
        so many purposes. Since the token unit spawns forward, it behaves
        similarly to a movement card since it can be used to push the frontline
        forward. Additionally, since it provides 2 units, it is amazing for
        keeping frontline because your opponent will likely have to spend extra
        mana to deal with two units rather than one. Finally, this card can push
        the frontline forward in cases no other movement cards can. It is
        perfect for protecting your stronger units.
      </p>

      <h3>Gifted Recruits</h3>
      <p>
        <CardLink id='N3' /> is a staple 2 mana unit card in almost every deck
        and a Swarm rush essential. This card does it all, it pushes frontline
        forward; it’s a relatively strong unit as well (and only gets better as
        it levels up); it’s cheap and as a last resort can be used to defend.
      </p>

      <p>
        The card is typically used as a high strength unit for dishing out
        damage on the opponent, you will likely want to play it in corners and
        defend it using other weaker cards like <CardLink id='S1' />
        . On turn mana 5 and if you have a strong board, you can typically
        afford to play
        <CardLink id='N3' /> + <CardLink id='N15' /> to πut pressure on your
        opponent and force out cards.
      </p>

      <h3>Headstart</h3>
      <p>
        The main reason to include <CardLink id='S24' /> is because the typical
        Swarm rush deck gets countered by many control cards, specifically cards
        that deal AoE (Area of Effect). This is because many rush decks follow
        the idea of cheap, weak units and therefore get easily countered by some
        control cards like <CardLink id='N36' /> or <CardLink id='N29' />.
        Headstart is a very strong card in regards to the{' '}
        <Link to='/calculators/value?cards=S24'>mana to strength ratio</Link>,
        as it is +1 strength above <CardLink id='N4' /> at every level.
      </p>
      <p>
        That being said it has a slight drawback of not offering full control of
        where to place it, therefore it can never be used defensively. Since you
        decide when to play this card, look to control where the token is going
        to land by playing out your other cards first.
      </p>
      <p>
        It is important to note that if your Lawless Herd is ever +1 level
        higher than your Headstart, then you should use Lawless Herd over
        Headstart since it is virtually the same card except you get the added
        benefit of controlling where to play it.
      </p>
      <p>
        This card is meant to be played at times where you want to keep
        frontline since it is one of the highest strength units in this deck and
        very cheap in mana for what it’s worth. It is great to play when you aim
        to do massive pushes in future turns, however since it will take two
        turns before going into the enemy base, this might not always be the
        best card when the game is in its final turns (unless you aim to use
        Forgotten Souls to push it into the base next turn).
      </p>

      <h3>Restless Goats</h3>
      <p>
        Despite all the negative opinions about <CardLink id='S2' />, they are
        actually great at all levels and get much better as they level up. On
        paper, it seems very low in value and even has negative value attached
        to it (since you deal 1 damage in exchange for 2 base health at level
        1), but specifically in this deck, it absolutely shines.
      </p>
      <p>
        When playing Swarm rush, your focus is to close out the game as soon as
        possible and that being said, you should be willing to trade any base
        health you can to get a lead over your opponent. Since you are expected
        to win the game before the enemy can even deal high amounts of damage to
        your base, the self base damage attached to Restless Goats is
        negligible.
      </p>
      <p>
        This card serves two main purposes in this deck: a) for Trinity Openers
        (discussed later) and b) to finish off the enemy since it is one of the
        few 2-movement units in the deck.
      </p>
      <p>
        It is not expected to be played in the mid-game because there are other
        cards that can substitute for the same niche, specifically Gifted
        Recruits can generally do the same job as Restless Goats outside of the
        two main purposes listed above. In the mid-game if you have the
        opportunity to send this card into the enemy base, it’s generally better
        to keep it on board and make it behave like a Gifted Recruits where it
        can be used in the corners or to defend a stronger unit.
      </p>

      <h3>Unhealthy Hysteria</h3>
      <p>
        <CardLink id='N63' /> has been put into question quite a few times (even
        from me). Since its change to make it 3 mana instead of 2, it actually
        started seeing less playrate in the RR decks. This was mainly due to the
        fact that 3 mana in this deck is fairly expensive and you were usually
        better off playing other cards instead of this one.
      </p>
      <p>
        That being said, it is still a very powerful card. The main reasons to
        play it is to stall the enemy out by making two units attack one
        another, deal early chip damage if they play a strong unit bordering
        their base, or in the late game where you can pressure the enemy into
        defending their base, and use hysteria to make that unit attack it.
        Since this card is a spell, it does not rely on the frontline to be
        played, and it can be used to come up with some very sneaky lethals.
      </p>

      <h3>Wild Saberpaws</h3>
      <p>
        <CardLink id='N67' /> should be played for similar reasons as Restless
        Goats. They can substitute for one another in many cases. One notable
        difference is that you can manipulate its movement which can prove to be
        very useful at times. In cases the enemy is doing a good job at
        defending and it’s impossible to play any movement card since they would
        just attack into the enemy units, this card can be played as a 0
        movement unit and fill the same niche as Head Start.
      </p>
      <p>
        To reiterate, this card is great in the early and late game: for Trinity
        Openers in the early game and as a finisher in the late game. In cases
        where it can be used to fill the same function as Restless Goats, it’s
        preferable to use this card instead since there is no self base damage
        drawback.
      </p>

      <h3>Forgotten Souls</h3>
      <p>
        <CardLink id='S6' /> serve only one purpose in the entire deck and
        should never see any play for any other reason. In regards to its{' '}
        <Link to='/calculators/value?cards=S6'>mana-to-strength ratio</Link>, it
        is the weakest in the entire deck. Since the focus of this deck is to
        get lots of damage fast this card should really only be played once in
        the entire match and it should be the last card played.
      </p>
      <p>
        The only reason to ever play it is to win the match, whether that means
        to use it to push a weak unit into the base, perhaps combo’d with Potion
        of Growth or most remarkably with Devastators. At 7 mana, the
        Devastators + Forgotten Souls combo is a deadly one.
      </p>

      <h3>Potion of Growth</h3>
      <p>
        Since this deck mostly runs on the basis of cheap and weak units which
        generally are very susceptible to area of effect cards, we need to find
        a way to make more obstacles for the opponent to deal with. This is
        where <CardLink id='N15' /> steps in.
      </p>
      <p>
        This card is great for applying instant pressure on the board since you
        can buff a unit that is bordering the enemy base. Instead of playing
        three weak units, consider playing two units instead, one weak and the
        other buffed with Potion of Growth.
      </p>
      <p>
        It is especially great for baiting out enemy cards that would have been
        able to counter Devastators. Playing Potion of Growth one turn before
        you plan on playing a Devastators at the enemy base, is perfect for
        baiting out spells like <CardLink id='N21' /> or <CardLink id='I18' />.
      </p>
      <p>
        In summary, Potion of Growth should generally be used for three
        purposes:
      </p>
      <ol>
        <li>
          To distribute strength around your units making it difficult for your
          opponent to clear your frontline.
        </li>
        <li>
          To apply instant pressure by buffing a unit at the enemy base/baiting
          resources.
        </li>
        <li>
          As a finisher when combo’d with Forgotten Souls in the late game.
        </li>
      </ol>

      <h3>Shady Ghoul</h3>
      <p>
        <CardLink id='S8' /> is the third and last card that is capable of
        performing a Trinity Opener. You might have noticed that I still have
        this card at level 1—it’s because I do not think this card should be
        played often in your games.
      </p>
      <p>
        Similar to the Wild Saberpaws treatment, this card behaves very closely
        to both Restless Goats and Wild Saberpaws. All three of these cards are
        your go-to early game options for Trinity Openers, as well as your late
        game cards because they are the only runners in the deck. What separates
        Shady Ghoul from the other two is that it doesn’t make for the greatest
        finisher since it has only 1 strength at all levels.
      </p>
      <p>
        However, one additional niche this card brings is the ability to keep
        the frontline. Much like how Doppelbocks acts like two units making it
        difficult for the enemy to reset your frontline, Shady Ghoul does this
        job even better because the token spawns{' '}
        <span className='Highlight'>after</span> Shady Ghoul dies, and in a
        sense the token is being “protected” as it is invulnerable to Area of
        Effect damages (unlike Doppelbocks’).
      </p>
      <p>
        To reiterate, this card should only be played in the early game for
        Trinity Openers and in the late game specifically when you are in
        desperate need of keeping the frontline.
      </p>

      <h3>Devastators</h3>
      <p>
        The one that makes your victories feel cheap, the one that puts Winter
        players to sleep, the one that makes structure players weep,{' '}
        <CardLink id='S11' />, Devastators, Devastators. Undoubtedly the best
        card in the deck. This will be your go-to card that should be played as
        soon as possible depending on how fast you can set up your board.
      </p>
      <p>
        On its own, Devastators is a fairly weak card because it can get cleared
        easily, however with the help of other units and proper{' '}
        <a href='#positioning'>positioning</a>, this card can deal absurd
        amounts of damage to the enemy base. Think of Devastators like the egg
        of a beast. All alone, Devastators will get eaten up by all the other
        cards in the game but with proper care and consideration, a beast will
        hatch and deal massive damage to the enemy. Devastators’ favourite tiles
        are both top corners on the left and right, as these tiles are the most
        difficult for the opponent to reach.
      </p>
      <p>
        Although tearing down structures might look so satisfying, there are
        actually many cases where it’s better to leave up the enemy structure
        for a few turns. If the enemy structure is played on a centre tile
        bordering the enemy base, you can take advantage of the enemy corner and
        drop Devastators there instead. In cases where the structure is in the
        corner, you may want to leave it up so that on your 7 mana turn, your
        Devastators + Forgotten Souls has a clear path into the enemy base. In
        the early game however, if you have the ability to play Devastators
        safely (meaning it is protected by one or more units) and also destroy a
        structure, then this is generally the best play.
      </p>
      <p>
        There is quite a lot to expand on the formula behind Devastators which
        will be explained later but for now just be sure to almost never cycle
        this card as it is almost always better played than cycled especially in
        the lower ranks where you are able to pull off sneaky Devastator plays
        much more frequently.
      </p>

      <h3>Snowmasons</h3>
      <p>
        I want to include a quick overview on this card for those that decide to
        run the Snowmasons variation. <CardLink id='N26' /> can act as a healthy
        substitute for Potion of Growth when using it as a finisher or simply to
        make a unit stronger. Generally, you do not want to self-activate
        Snowmasons by making it attack into enemy units because every bit of
        strength counts and you want to utilise Snowmasons weak body to protect
        one of your stronger units.
      </p>
      <p>
        Due to the order of attacking (left-to-right), Snowmasons will always
        prefer being placed to the left of any friendly unit. The best tile for
        Snowmasons is one tile to the left of the top-right corner. This is
        because you can place a strong unit in the top right corner defended by
        a Snowmasons to the left, which will significantly pressure the
        opponent. If they want to defend they will have to attack into
        Snowmasons which will further increase the other unit’s strength.
        Otherwise if they leave it alone, Snowmasons will walk into the enemy
        base first, buffing the unit to the right and therefore dealing massive
        damage to the enemy base. This setup does NOT work if Snowmasons is
        bordering the friendly unit to the right which is why you should never
        play Snowmasons in the far right column.
      </p>
      <p>
        In situations where you don’t have Devastators in hand, you can use both
        Snowmasons and a unit to stimulate pressure by using Snowmasons as a
        guardian and the other unit to act like Devastators.
      </p>

      <Title id='prioritisation'>Prioritisation</Title>

      <p>
        The RR prioritisation refers to being able to distinguish which cards
        you should aim at playing over others in any given situation. This idea
        can extend to which enemy units/structures you should focus on killing
        as well. Which and how you prioritize cards will vary depending on each
        and every unique turn given a new board state. However, while
        prioritisation differs largely, there are some rules you can apply to
        your gameplay to produce the most value/best results for each given
        turn. We can start by exploring Trinity Openers.
      </p>

      <p>
        Within the RR decks, there exists a total of three 2-movement units:{' '}
        <CardLink id='S2' />, <CardLink id='N67' /> (although not always
        2-movement) and <CardLink id='S8' />. Each of these cost three mana or
        less and are necessary for preforming any{' '}
        <span className='Highlight'>Trinity Opener</span>. Simply put, a Trinity
        Opener is pushing your frontline to three tiles forward on your very
        first turn. In doing so you open up the entire board and give yourself
        the ability to play a unit on any tile. By maintaining this frontline
        you give yourself a huge advantage over your opponent.
      </p>

      <p>Here are all the possible Trinity Openers at 3 mana:</p>
      <ul>
        <li>
          <CardLink id='S2' /> + <CardLink id='N1' />
        </li>
        <li>
          <CardLink id='N67' /> + <CardLink id='N1' />
        </li>
      </ul>

      <p>And at 4 mana:</p>
      <ul>
        <li>
          <CardLink id='S2' /> + <CardLink id='N1' />
        </li>
        <li>
          <CardLink id='S2' /> + <CardLink id='N3' />
        </li>
        <li>
          <CardLink id='S2' /> + <CardLink id='S1' />
        </li>
        <li>
          <CardLink id='N67' /> + <CardLink id='N1' />
        </li>
        <li>
          <CardLink id='N67' /> + <CardLink id='N3' />
        </li>
        <li>
          <CardLink id='N67' /> + <CardLink id='S1' />
        </li>
        <li>
          <CardLink id='S2' /> + <CardLink id='N67' /> (either way)
        </li>
        <li>
          <CardLink id='S8' /> + <CardLink id='N1' />
        </li>
      </ul>

      <Board
        id='LDJOMTBSMSwsLDNOMUIzLCwsLCwsMVM4QjMsLCwsLCwsLCw7UjEwTi1CMTBTOzNNMDszTjEzTjIzUzEzTjMzUzI0M1MyM042MzNONjczUzYzTjE1M1M4M1MxMTs='
        caption='Trinity opener example 1: Shady Ghoul + Green Prototypes'
      />
      <Board
        id='LCwsLCwsM04xQjMsLCwzUzJCMywsLCwsLCwsLCw7UjEwTi1CMTBTOzNNMDszTjEzTjIzUzEzTjMzUzI0M1MyM042MzNONjczUzYzTjE1M1M4M1MxMTs='
        caption='Trinity opener example 2: Restless Goats + Green Prototypes'
      />
      <Board
        id='LCwsLCwsM04xQjMsLCwzTjY3QjMsLCwsLCwsLCwsO1IxME4tQjEwUzszTTA7M04xM04yM1MxM04zM1MyNDNTMjNONjMzTjY3M1M2M04xNTNTODNTMTE7'
        caption='Trinity opener example 2: Wild Saberpaws + Green Prototypes'
      />

      <Info icon='equalizer' title='Best value'>
        When given multiple options, you should prioritise the Trinity Opener
        that grants you the most value based off your card levels. Therefore,
        there is no one absolute best opener, it depends on the value of your
        cards.
      </Info>
      <p>
        Trinity Openers are the best turn 1 openers for RR because it is very
        hard for the opponent to match them. Generally speaking you should still
        be able to maintain this frontline for the duration of the match.
      </p>
      <p>
        It’s important to note that semi-Trinity Openers exist where you push
        your frontline only two tiles forward, however (instead of one) you have
        two units controlling the same row, preferably centre-left and
        centre-right.
      </p>
      <p>
        Since they move up at the start of your next turn, you still have good
        frontline over the board. However, there are far too many semi-Trinity
        Openers for me to list in this guide, just know that each requires at
        least one of the Trinity cards (Restless Goats, Wild Saberpaws or Shady
        Ghoul).
      </p>

      <Board id='LCwsLCwsLCwzVDNCMSwzUzJCMywsLCwsLCwsLCw7UjEwTi1CMTBTOzNNMDszTjEzTjIzUzEzTjMzUzI0M1MyM042MzNONjczUzYzTjE1M1M4M1MxMTs=' />

      <p>Two reasons as to why Trinity Openers are so important:</p>
      <ol>
        <li>
          You get immediate frontline which you can take advantage of in your
          following turns.
        </li>
        <li>
          You give yourself the opportunity to get extremely early and well
          defended Devastators.
        </li>
      </ol>

      <p>
        Devastators is one of the most impactful cards in RR. It is considered a
        high-risk/high-reward card because for 4 mana you can get away with
        dealing up to 12 damage to the enemy base (at level 5, up to 6 at level
        1) but at the same time you’re only playing a 6 strength unit—in this
        case, you’re better off playing other alternatives like Gifted Recruits
        and Wild Saberpaws.
      </p>
      <p>
        Playing Devastators without Forgotten Souls is a bit of a gamble. If the
        enemy doesn’t have the cards to counter it, you can win the game simply
        from this play. But you can also lose the game if the enemy is able to
        defend against it and delay your rush.
      </p>
      <p>
        Devastators is also great for removing structures, and when enemies play
        buildings in the corners, you can leave them up until late game for an
        easy Devastators + Forgotten Souls combo straight into the enemy base.
      </p>

      <Board
        id='NFczUjMsM1MyQjMsM04xQjMsMlMxQjMsLCwsLCwsLCwsLCwsLCwsO1IxMFctQjEwUzszTTA7Ow=='
        caption='Using the enemy’s structure as a way to baselock them.'
      />
      <Board
        id='NFczUjMsLCwsNFMxMUIzLDNOMVIzLDRXMTJSMywzVDNCMSwsLDNTMkIzLCwsLCwsLCwsO1IxMFctQjEwUzszTTA7M04xM04yM1MxM04zM1MyNDNTMjNONjMzTjY3M1M2M04xNTNTODNTMTE7'
        caption='In this case, Devastators would usually attack towards the centre, but because the structure is in front, Devastators will attack forward instead. With boards exactly like this in the late game, Devastators + Forgotten Souls combo is brutal because the enemy does not expect the Devastators to go through the structure.'
      />

      <p>
        Since a large portion of the extra damage comes from its effect, you can
        take advantage of it by keeping Devastators alive even with just a
        sliver of health. Although a full strength Devastators at the enemy
        baseline is quite threatening, even a one strength Devastators can be
        the enemies highest priority target on the board. Sometimes your enemies
        may even be forced to play an Execution on a one strength Devastators to
        prevent the damage.
      </p>
      <p>
        In lower leagues, since players don’t typically play decks with good
        removal, aim to play Devastators as much as possible because you are
        generally rewarded in most of these exchanges.
      </p>
      <p>
        Although Devastators is a high-risk/high-reward card, there are ways to
        minimise the risks when playing this card. By expanding on what we have
        already learned, Trinity Openers are amazing for setting up an early
        Devastators. It is important to note that the earlier into the match you
        set down Devastators, the harder it is for your enemy to deal with it
        because of mana constraints. After a turn 1 Trinity opener, assuming the
        enemy was unsuccessful in clearing both units, you can get an early
        Devastators tucked into either the top left or top right corner. These
        are Devastators’ two favourite tiles on the board.
      </p>

      <Board
        id='NFMxMUIzLDNOMUIzLCwsLCwzUzJCMywsLCwsLDRGM1IzLCwsLCwsLDtSMTBXLUIxMFM7M00wOzNOMTNOMjNTMTNOMzNTMjQzUzIzTjYzM042NzNTNjNOMTUzUzgzUzExOw=='
        caption='Extremely aggressive second turn swing with 5 mana.'
      />

      <p>
        In a situation like above, the enemy needs to find a way to clear the
        Devastators. This can only be done in a limited number of ways due to
        mana constraints. A fair trade in mana for the enemy would be using
        Execution in exchange to kill the Devastators. However, it is important
        to realize that if the enemy does not have a way to use up the excess
        mana, the Execution is effectively costing more than 4 mana and you
        automatically win in this exchange.
      </p>
      <p>
        In the case that the enemy is able to use up the excess mana, if your
        defending unit is still alive, you will be able to use it to defend
        another high priority unit. During your next turn, it will move forward
        allowing you to pull off yet another top corner tuck play, generally
        this is best accomplished with a unit + Potion of Growth, once again
        setting down a high priority target for the enemy to deal with.
      </p>

      <Board
        id='OE4zQjMsLDNTMkIzLCwsLCwzVDNCMSwsLCwsLCwsLDRGM1IzLDNOMVIzLCw7UjEwVy1CMTBTOzNNMDszTjEzTjIzUzEzTjMzUzI0M1MyM042MzNONjczUzYzTjE1M1M4M1MxMTs='
        caption='In most cases, playing Gifted Recruits top right would have been the better play, but I specifically played Gifted Recruits top left here to avoid 2 movement units from defending. The Restless Goats from last turn is still acting as a defender for another high priority target.'
      />

      <p>
        By applying pressure every turn you snowball your early game lead in
        hopes to close out the game fast. This deck doesn’t fare well into the
        late game so you really want to squeeze in any advantages you can. The
        biggest takeaway from prioritisation is you want to really focus on
        playing Devastators as much as possible and as early as possible.
        Especially in the lower ranks, this strategy works exceptionally well
        because opponents do not have many ways to defend against it.
      </p>

      <Title id='cycling'>Cycling</Title>
      <p>
        Cycling is the most wrongfully used mechanic in the game. In basic
        terms, cycling refers to the “flow of cards” in your deck and by
        definition reflects which cards you will draw in your future turns. The
        cards you draw each turn are NOT at random, instead there is a certain
        pattern the cards follow. Therefore, you can actually predict which will
        be your next cards drawn with rather high accuracy.
      </p>

      <Info icon='stack' title='Drawing Guide'>
        Refer to the <Link to='/guides/drawing'>drawing guide</Link> to learn
        more about drawing mechanics. You can also practice cycling and see all
        how drawing works by going to Tools &gt; Deck Builder, then in the
        sub-menu <span className='Highlight'>Practice</span>.
      </Info>

      <p>
        What’s special about cycling is that it is actually a controllable
        mechanic to some degree. Each turn you are given an opportunity to trade
        1 card in your hand in exchange for another one in your deck.
        Additionally, the order in which you play your cards will greatly affect
        which ones will be drawn back sooner.
      </p>
      <p>
        Since this deck is a rush deck, you will be cycling through your deck
        very fast, meaning you will be given multiple options of cards to play
        each turn. Linking this back to prioritisation, you need to use the
        cards that create the best play for that turn and cycle out the cards
        that aren’t useful in this turn and the next few.
      </p>
      <p>
        The biggest trouble players find with this mechanic is not knowing when
        to cycle, and how to cycle. In this rush deck where the value of cards
        changes depending on the state of the match (early-, mid-, late-game),
        you need to really cycle out the useless ones so you have better chances
        of drawing the best cards in your deck.
      </p>
      <p>
        As a basic rule, you generally want to cycle one card every turn. This
        is mostly because Devastators is the best card in the deck, and after
        playing it, you should be fishing to draw and play it again. Given the
        nature of this complex game, this rule is not always the correct play.
      </p>
      <p>
        You should be aiming to maximise your usage of Devastators and on the
        other side of the spectrum, minimise your usage of Forgotten Souls. Bear
        in mind that these two cards put together make an amazing combo, so the
        next question you should be asking is, how do I properly set up this
        combo? Ideally you want to play this combo exactly when it is available
        (at the 7-mana turn) and this requires a bit of timing, thinking and
        luck.
      </p>
      <p>
        Forgotten Souls is in fact the highest priority cycle for the majority
        of the game. The only time this card should stay in your hand for more
        than 1 turn is when you are really sure that the game will be closing
        out very soon and it would be unwise to cycle this card out as it could
        be needed for winning.
      </p>
      <p>
        Additionally, if you really suspect you will pull off a Devastators +
        Forgotten Souls combo next turn, you should keep it in your hand.
        Outside of those two reasons, this card should be cycled and never stay
        in your hand for more than one turn. Once you master cycling, it just
        becomes natural to know which cards to cycle and when.
      </p>

      <p>Standard cycling rules:</p>
      <ul>
        <li>
          You want to be cycling more often than not. This rule is true for
          every RR match.
        </li>
        <li>
          As far as cycling prioritisation goes, Forgotten Souls has the highest
          priority, Unhealthy Hysteria is second and Summon Militia is third.
          This rule is not always true as it really depends on the state of the
          board and your expectations for which card you will receive after
          cycling.
        </li>
        <li>
          By playing Devastators in the early game, and cycling Forgotten Souls
          in the early game, you can expect to draw them both back around the
          same time for a combo.
        </li>
        <li>
          Since your card levels will differ, aim to play out your best/higher
          level cards, and cycle out your worst/lowest level cards.
        </li>
        <li>
          Almost never cycle Devastators, and it’s okay to keep this card in
          your hand for many turns because each turn you should be looking to
          make a Devastators play setup.
        </li>
      </ul>

      <p>
        At face value you can only see 4 cards in your deck every turn. Once you
        master cycling you can actually see a 5th card in your hand every turn
        and cycling for lethal no longer becomes luck, but instead a skillful
        trait.
      </p>

      <Title id='order'>Order</Title>

      <p>
        Now that we have covered cycling, we can start learning about{' '}
        <span className='Highlight'>order</span>
        which refers to the order in which you play your cards.
      </p>

      <p>
        Outside of prioritisation and cycling, order plays a very significant
        role that usually goes unnoticed to the inexperienced player. At the
        basic level players start developing an idea behind how to properly
        utilise order to their advantage because it is the most logical play.
      </p>
      <p>
        For instance if the enemy has a unit placed near their base for defense,
        you will play out the cards to remove that enemy unit first before
        playing your 2 movement unit in hand that can be used for lethal. In
        more complex cases, order starts becoming debatable between which cards
        should be played first, second, third or fourth.
      </p>

      <Board
        id='LCwsLCwsM04zUjMsM1QzQjEsLCwsLCwsLCwsLCw7UjZOLUIxMFM7Nk0wOzNOMTNOMjNTMTNOMzNTMjQzUzIzTjYzM042NzNTNjNOMTUzUzgzUzExO04xLE42NyxTNixTMTE='
        caption='In this case, there is only one proper order for lethal: Wild Saberpaws > Green Prototypes > Forgotten Souls.'
      />

      <Board
        id='LCwxUzhCMywyUzFCMywsLCwsM04zUjMsLCwsLDNOMVIzLCwsLCwsO1I2Ti1CMTBTOzZNMDszTjEzTjIzUzEzTjMzUzI0M1MyM042MzNONjczUzYzTjE1M1M4M1MxMTtOMSxONjcsUzIsUzI0'
        caption='In this case, Green Prototypes need to clear Gifted Recruits first so Wild Saberpaws can have 2-movement.'
      />
      <p>There are two parts behind the concept of order:</p>
      <ol>
        <li>
          The Present Value of Order (
          <abbr title='Present Value of Order'>PVO</abbr>),
        </li>
        <li>
          The Future Value of Order (
          <abbr title='Future Value of Order'>FVO</abbr>).
        </li>
      </ol>

      <p>
        The aforementioned situations are illustrating the present value of
        order (PVO) because the order in which I play my cards this turn, will
        determine the state of the board/game for this turn and the next turn.
        The PVO has everything to do with prioritisation—for instance do you
        want the Doppelbock token to be more forward than the Green Prototypes
        or vice versa?
      </p>

      <p>
        As demonstrated earlier however, sometimes the order in which you play
        your cards will have an affect on the PVO. This becomes more obvious
        during turns where you want to play{' '}
        <abbr title='Random Number Generator'>RNG</abbr> (luck-based) cards like
        Summon Militia, Head Start and Unhealthy Hysteria.
      </p>

      <Board
        id='MVQ4UjEsN1Q3QjEsMVQ4UjEsLDFUOFIxLDJTMUIzLDNUM0IxLCwxVDhSMSwsLDFUOFIxLCwsLCwsLCw7UjEwVy1CMTBTOzZNMDszTjEzTjIzUzEzTjMzUzI0M1MyM042MzNONjczUzYzTjE1M1M4M1MxMTtTMTEsUzI0'
        caption='Devastators must be played first, before playing Head Start, otherwise Head Start token will block off access to the top right corner tile.'
      />

      <p>
        Since RNG-based cards like Summon Militia and Head Start have a certain
        amount of available tiles they can land on, you can adjust your play
        depending on where you want these tokens to land. For instance, if I
        want these tokens to land on specific tiles, I can increase the chance
        of them landing there by occupying the other tiles.
      </p>

      <Board
        id='LCwzVDNCMSwsM04zUjMsLCw3VDdSMSwsLCwsLCwsLCwsLDtSNk4tQjEwUzs2TTA7M04xM04yM1MxM04zM1MyNDNTMjNONjMzTjY3M1M2M04xNTNTODNTMTE7TjY3LFMyNA=='
        caption='I want the Head Start token to land on the left, so I play Wild Saberpaws on the right first.'
      />

      <p>
        You don’t always want to play your RNG cards last—sometimes your move
        will be dependent on how the RNG plays out and thus you may want to play
        them first.
      </p>

      <p>
        In the following example, I want to be as aggressive as possible. To
        increase the chances of the Summon Militia token to spawn hopefully on
        the furthest row possible, I play it first followed by Head Start.
        Depending on where these tokens land I will determine which unit I want
        to buff with Potion of Growth.
      </p>

      <Board id='M04xQjMsLCwzTjNCMywsLCwsLDNOMVIzLDNXMlIzLCwsLCwsLCwsO1I2Vy1CMTBTOzlNMDszTjEzTjIzUzEzTjMzUzI0M1MyM042MzNONjczUzYzTjE1M1M4M1MxMTtTMjQsTjE1LFM4LE4y' />
      <Board
        id='OE4xQjMsLCwzTjNCMywsLCw1VDdCMSwsM04xUjMsM1cyUjMsLCwsLCwsM1QzQjEsLDtSNlctQjEwUzszTTA7M04xM04yM1MxM04zM1MyNDNTMjNONjMzTjY3M1M2M04xNTNTODNTMTE7Uzg='
        caption='The Summon Militia token did not land where I wanted it to, however this order was still correct. Since my right hand column is pretty powerful, I want to distribute the strength evenly across the board so I use Potion of Growth on the Green Prototypes.'
      />

      <p>
        Now that PVO has been covered, let’s talk about FVO which has everything
        to do with cycling. In cases where the PVO does not change depending on
        order, the next step in regards to order is the FVO.
      </p>
      <p>
        Although the order in which two cards are played does not affect the
        state of the board, the order does affect which one I am more likely to
        draw back first. This is referred to as the FVO and it largely depends
        on which cards you prioritise having later on in the match. For
        instance, in the case where I prioritise having Restless Goats in the
        late game for lethal over Gifted Recruits, I will play Restless Goats
        first to increase my chances of drawing it back faster.
      </p>
      <p>
        Put simply, the cards you play first will have a higher chance to be
        drawn back, therefore during Devastator turns, it is always better to
        play Devastators first (if possible) and any other defenders should be
        played afterwards. However, it is important to note that PVO takes
        priority over FVO, if order does not impact PVO, you should start
        thinking about how order impacts FVO.
      </p>
      <p>
        Next lies the question, what about cycling? When should I cycle the card
        in my hand? Since cycling plays an impact on both PVO and FVO, you need
        to really consider numerous factors before cycling (PVO because you
        could draw a better card in your hand which results in better play, and
        FVO because you can cycle after playing a card to increase the chances
        of drawing both of them back around the same time). First let’s talk
        about how it impacts PVO.
      </p>
      <p>
        Haven’t you ever experienced turns where you have a bad hand so you
        cycle before playing anything and the best play becomes clear? This is
        exactly how cycling affects PVO and in cases where you have a mediocre
        or simply bad hand, you will always want to cycle first just for a
        chance that you can draw a better card which makes for a better play.
      </p>

      <Board
        id='M1QzUjEsM1QzUjEsMlMxQjMsLCwsM04zQjMsLCw1TjU5UjMsLDROMTZSMywsLCwsLCwsO1IxME4tQjEwUzszTTA7M04xM04yM1MxM04zM1MyNDNTMjNONjMzTjY3M1M2M04xNTNTODNTMTE7TjEsTjE1LFM4LFMyNA=='
        caption='Shady Ghoul does not see any play here and therefore is a liability and is worth cycling first to see if I can draw for a better play. For example a Devastators or Gifted Recruits draw here is much better than Shady Ghoul.'
      />

      <p>
        In cases where your hand is relatively good and the chances to draw an
        even better hand is extremely low, then it's safe to ignore PVO and
        focus on FVO. Now you want to cycle in such a way that the cycle either
        cuts in between the order you play your cards or is used up at the end.
      </p>

      <Board
        id='M04zQjMsNlc4UjMsNE4xNFIzLDZXOVIzLCwsLCwsLDNUM0IxLCwsLCwsLCwsO1IxMFctQjEwUzs2TTA7M04xM04yM1MxM04zM1MyNDNTMjNONjMzTjY3M1M2M04xNTNTODNTMTE7TjEsUzI0LFMxMSxONjc='
        caption='Since Devastators is such a high priority card here, it’s worth playing first before cycling. Afterwards I can determine whether I want to play Head Start first and then cycle, or cycle first to see if I can draw a better play. The chances of me drawing an even better play than this is low, so I cycle last specifically because I would rather draw back Head Start sooner than Wild Saberpaws.'
      />

      <p>
        When using cycling to impact the FVO, you can use it to “link” cards
        together. Linking cards is great for future combo setups like
        Devastators + Forgotten Souls. In the following example I want to link
        Devastators and Forgotten Souls together, so I cycle Forgotten Souls
        right after playing Devastators and before I play Green Prototypes. In
        doing so I have a relatively high chance of drawing both of them back
        around the same time for the future.
      </p>

      <Board id='NFczUjMsLCwsLDNOMVIzLDRXMTJSMywzVDNCMSwsLDNTMkIzLCwsLCwsLCwsO1IxMFctQjEwUzs1TTA7M04xM04yM1MxM04zM1MyNDNTMjNONjMzTjY3M1M2M04xNTNTODNTMTE7UzYsUzExLE4xLE42Nw==' />

      <p>
        The most important takeaway from this section is to look at how the
        order you play out your turn affects PVO and FVO, and always remember
        that PVO takes priority over FVO. There should always be a pattern in
        your gameplay and a reason to your plays. Without rhyme or reason, your
        plays become significantly worse.
      </p>
      <p>
        One last thing to remember regarding order is the order in which your
        units will move forward at the start of your turn: top row to bottom row
        and from left to right. The top left unit will move up first and the
        bottom right unit will move up last. This is a very important
        consideration for both order and positioning.
      </p>

      <Title id='positioning'>Positioning</Title>

      <p>
        If it wasn’t obvious already, positioning refers to how you position
        your units on the board. I think this is one of the most difficult
        things to master and even at higher level gameplay, players struggle
        with it. Positioning depends on two things:
      </p>
      <ol>
        <li>What do you plan to do with your units,</li>
        <li>What does the opponent plan to do with your units.</li>
      </ol>
      <p>
        As a rush deck, you generally want to ignore the enemy units unless you
        need to attack them to make space for your other units, takeover certain
        tiles or just to defend as a last resort.
      </p>
      <p>
        We’ve already discussed Trinity Openers, and they are a great
        demonstration of how the center tiles are high priority cells that you
        want to occupy as well as both of the corner tiles.
      </p>
      <p>
        As mentioned earlier regarding order, there are many synergies that
        exist in Stormbound because of this. Specifically for the RR deck, there
        are about three cards you want to keep in mind when playing. Restless
        Goats, Snowmasons and Shady Ghoul.
      </p>

      <h3>Restless Goats</h3>

      <p>
        If you have 2 health or less but you have lethal with Restless Goats,
        you will win this match (since defense gets resolved first, which is the
        opponent during your turn). That being said, since the order of
        attacking goes from left to right, Restless Goats is better played
        right-side over left-side. This matters in situations where you have
        multiple units lined up at the enemy base—you want Restless Goats to be
        towards the right if possible otherwise you risk taking 2 damage before
        the rest of your units go forward and lose the match.
      </p>

      <h3>Snowmasons</h3>

      <p>
        The positioning of these two cards only matter in the Snowmasons
        variation. Due to the movement order, Snowmasons love the centre right
        column more than any other since it allows you to guard a high priority
        unit on the top right corner. By clearing the Snowmasons, the opponent
        essentially buffs the next unit, needing more mana to take care of it.
      </p>

      <Board id='LCwyTjI2QjMsM04zQjMsLCwsLCwsLCwsLCwsLCwsO1IxME4tQjEwTjszTTA7Ow==' />

      <p>
        If, on the other hand, we recreate this situation on the left side of
        the board, the high priority top left corner unit will move into the
        enemy base before the Snowmasons and thus the Snowmasons buff goes to
        waste. This is why Snowmasons is better played to the left of any unit.
      </p>

      <h3>Shady Ghoul</h3>

      <p>
        If used as a Trinity Opener, always aim to use Shady Ghoul centre left
        rather than centre right. Let’s say your opponent plays a 1 movement in
        the same column as Shady Ghoul—IF (and this works only in this RNG
        situation) the token bounces back meaning it stays in the same column
        but one tile separating the enemy unit, you could play snowmasons on
        centre right and then on your opponent's turn, the board looks like
        this:
      </p>

      <Board id='LCwsLCwsLCwsNE4xOFIzLDJOMjZCMywsLDNUN0IxLCwsLCwsO1IxME4tQjEwTjszTTA7Ow==' />

      <p>
        With this setup the opponent might have a lot of trouble thinking of the
        best play. Either they clear the Snowmasons and buff the token, or don’t
        and loose board control—not to mention giving you a nice top right
        corner setup for you next round. Assuming the same situation only
        difference is that you played Shady Ghoul centre right, you end up with
        Snowmasons center-left, which is less valuable as we’ve previously
        discussed.
      </p>

      <h3>General tips</h3>

      <p>
        Outside of these very particular cases, positioning is one of the most
        important aspects of the game. We know that Devastators is one of the
        best cards in our deck, and if defended properly, it can deal some
        massive damage to the enemy base.
      </p>
      <p>
        Therefore we need to position our units in the best way possible to
        defend our Devastators. This is why Devastators are better played in the
        top corners (indifferently) because it makes it very difficult for the
        enemy to access that tile with proper defense.
      </p>

      <div className='GuideRecklessRush__placement'>
        <Board
          id='LCwsLCwsLCwsLCwsLCwsLCwsLDtSMTBOLUIxME47M00wOzs='
          caption={
            <>
              Simple analysis of where to best put{' '}
              <span className='GuideRecklessRush__legend'>Devastators</span>,
              <span className='GuideRecklessRush__legend'>Snowmasons</span> and{' '}
              <span className='GuideRecklessRush__legend'>guardians</span> (any
              units that can be used to protect enemy units from attacking
              Devastators).
            </>
          }
        />
      </div>

      <p>
        One pattern you don’t want to fall into is blocking off tiles that would
        be great for other units like Devastators. Aim to avoid blocking off the
        corner tiles with weak units, instead use those weak units as guardians
        for stronger units.
      </p>
      <p>
        Positioning is also dependent on which faction the enemy is playing.
        Against Shadowfen which has a lot of AOE and bordering damage cards, you
        should aim to make a square formation so that it’s difficult to access
        the rest of the units, the square formation renders bordering damage
        cards nearly useless.
      </p>

      <Board
        id='NFMxMUIzLDJUN0IxLCwsM1MyQjMsMlMxQjMsLCwsLCwsLCwsLCwsLDtSMTBOLUIxMFM7Nk0wOzNOMTNOMjNTMTNOMzNTMjQzUzIzTjYzM042NzNTNjNOMTUzUzgzUzExOw=='
        caption='Example of a square attack formation, particularly efficient against Shadowfen.'
      />

      <p>
        On the other hand, you have line formation which is also very good at
        stopping bordering effects but is even better to counter 1 movement unit
        defenses. The weakness to the line formation is it falls weak to 2
        movement or more unit defenses, especially against Twilight Prowlers and
        Windmakers.
      </p>

      <Board
        id='NFMxMUIzLDJTMUIzLDNTMkIzLCw0VDdCMSwsLCwsLCwsLCwsLCwsLDtSMTBXLUIxMFM7Nk0wOzNOMTNOMjNTMTNOMzNTMjQzUzIzTjYzM042NzNTNjNOMTUzUzgzUzExOw=='
        caption='Example of a horizontal attack formation, effecient against decks without too many runners.'
      />

      <p>
        Next we have the traditional diagonal formation, this will be your most
        used formation as it usually follows the turn after a Trinity Opener.
        The opponent has to spend a lot of resources dealing with this setup. If
        used in the early game, the mana constraint makes it even more difficult
        for them.
      </p>

      <Board
        id='NFMxMUIzLCwsLCwzUzJCMywsLCwsM042N1IzLCwsLCwsLCwsO1IxMFctQjEwUzs2TTA7M04xM04yM1MxM04zM1MyNDNTMjNONjMzTjY3M1M2M04xNTNTODNTMTE7'
        caption='Example of a typical early on diagonal attack formation.'
      />

      <p>
        Positioning plays a key role in how the board will look in the future. I
        generally play off this idea of left-side vs right-side, you want to
        pressure one side and force your enemy to defend that side only to start
        pressuring the other side until they can’t keep up.
      </p>
      <p>
        Always try to make openings for your own cards, the last thing you want
        is to block yourself off from potential tiles and even potential
        lethals. Additionally, if you plan on doing a Devastators + Forgotten
        Souls combo for next turn, you want to make sure you find ways to leave
        an open space for them, even if that means clogging up all your units on
        one side to leave the other side open.
      </p>

      <hr />

      <p>
        That about sums up the Reckless Rush guide, I hope you were able to read
        up until the very end, hope you learned some things you can apply not
        only to this deck but also your own decks. Hope you enjoyed reading this
        guide—if you liked what you saw, feel free to subscribe to{' '}
        <a
          href='https://www.youtube.com/channel/UCqc9ONUhTVQ3WnTRci3dYXQ'
          target='_blank'
          rel='noopener noreferrer'
        >
          my Youtube channel
        </a>{' '}
        to see how I actually play the deck and see what you can improve on.
      </p>

      <Notice icon='sword'>
        <Sparkles>Rush to victory!</Sparkles>
      </Notice>
    </Guide>
  )
})
