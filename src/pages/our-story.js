import React from 'react'
import Link from 'gatsby-link'
import HowWeMet from '../images/titles/how-we-met.svg'
import TheProposal from '../images/titles/the-proposal.svg'
import ProposalImage from '../images/proposal-image.jpg'

const OurStory = () => (
  <div className="our-story__container">
    <div className="our-story__body">
      <div>
        <img className="sec-med" src={HowWeMet} alt="Our Wedding" />
      </div>
      <div className="our-story__body-copy">
      <p>Over six years ago, a sparkly eyed and fresh faced Ryan Hunt staggered into his friend’s student housing where he was, as per usual, freeloading for the night and crashing on the sofa. It was his birthday, and at the ripe age of 24, Ryan was ready to hit the town and drink until his kidneys hurt. He could never have imagined that would be the night he’d meet the love of his life. Christie was sat in her pyjamas tolerating the football until she could watch Britain’s Got Talent.</p>
      <p>Cupid took the form of a mutual friend – Claire Seabridge – who said Ryan and Christie would be a good match because “you both overthink things”. So they exchanged numbers and after a good month of ducking his texts, Christie eventually gave into to Ryan’s barrage of charm and they agreed to go on a date.</p> 
      <p>They’ve been together ever since. Not even snails or lightning could tear them apart.</p>
      </div>
      <div>
        <img className="sec-med" src={TheProposal} alt="Our Wedding" />
      </div>
      <div className="our-story__body-copy">
        <p>In September 2017, Ryan and Christie went to Croatia. Unbeknownst to Christie, there was a diamond ring smuggled aboard the luggage and stashed into a particularly large bundle of socks. All Ryan had to do was bide his time and wait for the perfect romantic moment to strike. This took some time. Despite being known for his romantic ways, the opportunity never arose! A trip to the beautiful waterfalls of Krka National Park would surely provide the opportunity to propose...</p> 
        <p>But although the waterfalls were indeed beautiful, they were also very popular, and there was never a moment where Ryan and Christie were not surrounded by people. Knowing neither of them wanted public proposals, Ryan waited, biding his time, looking for quiet locations and nervously patting the gigantic cube-shaped bulge in his back pocket. Eventually, opportunity struck, and just after buying ice lollies, Ryan spotted a quiet path down to a lovely little river.</p>
      </div>
      <div className="our-story__quoteblock">
        <p className="our-story__ryan-quote">“Let’s go down there!”</p>
        <p className="our-story__christie-quote">“Why do you keep trying to go to these weird random places?”</p>
      </div>
      <div> 
        <p>Heading down steps, with an ice lolly in hand, Ryan and Christie stood by the river, awkwardly licking their melting twisters and looking at the river. It didn’t look as good now they were down here, and it didn’t smell too great either. There were a lot of flies and Ryan didn’t know what to do with his twister. His free hand nervously patted the ring box. This place wasn’t the right place.</p> 
      </div>
      <div className="our-story__quoteblock">
        <p className="our-story__ryan-quote">“Look at those reeds,”</p> 
        <p className="our-story__christie-quote">“We should probably get back to the bus,”</p> 
      </div>
      <div>
        <p>With the ring box feeling particularly heavy in his cream shorts, Ryan trudged back to the bus. Tomorrow was the last day of the holiday. If he didn’t do it then, he’d have to do it at East Midlands Airport or something.</p>  
        <p>The last day was a trip to Dubrovnik, with a tour of the Old Town. In a genius move, Ryan once again packed the most expensive piece of jewellery he’d ever bought into the back pockets of his shorts and headed to one of the pickpocket capitals of the world. The town was beautiful, and they were both having an incredible day – Christie even ate a fish! (Trust me, big deal) – But it was still busy everywhere they went. As the clock ticked by and they made their way to the bus, Ryan was considering his limited pool of options; propose on the bus, propose on the plane, propose in the dark, propose via skype.</p> 
        <p>Then, a miracle. As they passed over the main drawbridge into old town, Ryan glanced below and saw a pretty flower garden completely devoid of other human beings. Internally fist pumping, Ryan suggested they wander down and take a look at the setting sun. In a second miracle that proves love exists, Christie didn’t object because ‘her feet were tired’ or become alarmed that Ryan kept trying to lure her down dimly-lit alleys.</p> 
        <p>Dodging stray cats and admiring the glowing sun, the couple walked hand in hand towards the shore. It was the perfect place. Ryan fiddled with his phone and selected the song he’d downloaded and kept in a secret folder to play at this moment – ‘Lean on me’ by Bill Withers (A song Christie used to sing as badly as she could on purpose to make Ryan laugh and join in).</p> 
        <div className="our-story__quoteblock">
          <p className="our-story__christie-quote">“What the hell are you doing?”</p> 
        </div>
        <p>Ryan got down on one knee, and fumbled for the ring. As the tides rolled in, and the sun smothered the horizon, Christie said <strong>yes</strong>.</p> 
      </div>
      <img className="thanks-assistants" src={ProposalImage} alt="The Proposal" />
    </div>
  </div>
)

export default OurStory
