import React from 'react'
import Link from 'gatsby-link'
import Instafeed from 'instafeed.js'

const feed = new Instafeed({
  get: 'tagged',
  tagName: 'ryanandchristieswedding',
  accessToken: '535913.ba4c844.192b314d66e64b04bbe1939201af455d',
  sortBy: 'most-recent',
  resolution: 'thumbnail',
  limit: '25'
});
feed.run();

const feed_2 = new Instafeed({
  get: 'user',
  userId: 8110163990,
  target: 'instafeed_2',
  accessToken: '8110163990.1677ed0.e9eb7b9887e94cc0a0673992f632fd93',
  sortBy: 'most-recent',
  resolution: 'thumbnail',
  limit: '25'
});
feed_2.run();


const Photos = () => (
  <div>
    <div id="instafeed_2"></div>
    <h2>#ryanandchristieswedding</h2>
    <div id="instafeed"></div>
  </div>
)

export default Photos
