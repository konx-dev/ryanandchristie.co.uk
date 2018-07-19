import React from 'react'
import Link from 'gatsby-link'
import Instafeed from 'instafeed.js'
import OurPhotos from '../images/titles/our-photos.svg'

const feed = new Instafeed({
  get: 'tagged',
  tagName: 'ryanandchristieswedding',
  accessToken: '535913.ba4c844.192b314d66e64b04bbe1939201af455d',
  sortBy: 'random',
  resolution: 'low_resolution',
  limit: '25'
});
feed.run();

const feed_2 = new Instafeed({
  get: 'user',
  userId: 8110163990,
  target: 'instafeed_2',
  accessToken: '8110163990.1677ed0.e9eb7b9887e94cc0a0673992f632fd93',
  sortBy: 'most-recent',
  resolution: 'low_resolution',
});
feed_2.run();


const Photos = () => (
  <div className="photo-container">
    <div className="sec-container">
      <img className="sec-med" src={OurPhotos} alt="The Venue" />
    </div>
    <div id="instafeed_2"></div>
    <div className="photo-text">Upload your photos to your instagram with the hashtag <a href="https://www.instagram.com/explore/tags/ryanandchristieswedding/?hl=en"><strong>#ryanandchristieswedding</strong></a> and see them all here</div>
    <div id="instafeed"></div>
    <div className="photo-text">You can always email the pictures to us <a href="mailto:ryanandchristiewedding2018@gmail.com">here</a>, we can't wait to see everyones moments captured from the day!</div>
  </div>
)

export default Photos
