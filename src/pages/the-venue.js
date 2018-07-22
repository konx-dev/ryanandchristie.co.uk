import React from 'react'
import Link from 'gatsby-link'
import TheVenue_2 from '../images/titles/venue.svg'
import Directions from '../images/titles/directions.svg'
import ParkImg from '../images/park-farmhouse-outside.jpg'
import ParkMap from '../images/park-farmhouse-gmap.png'
import Transport from '../images/titles/Transport.svg'
import Hotels from '../images/titles/hotels.svg'
import OnTheDay from '../images/titles/on-the_day.svg'

const TheVenue = () => (
    <div className="venue-container">
        <div className="sec-container-sml">
            <img className="sec-sml" src={TheVenue_2} alt="The Venue" />
        </div>
        <div className="index-venue">
            <div className="index-venue-header">
                Wedding &amp; Reception
            </div>
            <div className="index-venue-address">
                Donington Park Farmhouse<br></br>
                Melbourne Road<br></br>
                Isley Walton<br></br>
                Castle Donington<br></br>
                DE74 2RN<br></br>
            </div>
            <div className="sec-container-padding">
                <img className="" src={ParkImg} alt="Gift Ideas" />
            </div>
        </div>
        <div className="sec-container">
            <img className="sec-sml-l" src={Directions} alt="Directions" />
        </div>
        <div className="venue-directions">
            <div className="venue-directions-body">
                <p>
                    Although in Leicestershire, we’re closest to the cities of Derby, Nottingham and Loughborough, with Leicester just half an hour away. You can reach the venue easily via the M1, M42 and A50, not to mention Nottingham East Midlands Airport, which is just 2.5 miles down the road.
                </p>
                <p>
                    From the A453 at Isley Walton, take the Melbourne turning. The venue is half a mile along this road on the right; you can’t miss the beautiful black and white farmhouse. Click <a href="https://www.google.co.uk/maps/place/Donington+Park+Farmhouse+Hotel/@52.8248864,-1.3884704,17z/data=!3m1!4b1!4m7!3m6!1s0x4879e4e00aa09e9f:0xaef0d3403c3c3702!5m1!1s2018-07-17!8m2!3d52.8248864!4d-1.3862817">here</a> to get directions via Google Maps.
                </p>
            </div>
            <div className="sec-container">
                <a target="_blank" href="https://www.google.co.uk/maps/place/Donington+Park+Farmhouse+Hotel/@52.8248864,-1.3884704,17z/data=!3m1!4b1!4m7!3m6!1s0x4879e4e00aa09e9f:0xaef0d3403c3c3702!5m1!1s2018-07-17!8m2!3d52.8248864!4d-1.3862817"><img className="" src={ParkMap}  alt="Park Farmhouse Googlemaps" /></a>
            </div>
        </div>
        <div className="venue-on-the-day">
        <div className="sec-container-sml">
                <img className="sec-med" src={OnTheDay} alt="On The Day" />
            </div>
            <div>
                <div className="rc-subheader">Day Guests</div>
                <div>Arrive at <strong>1pm</strong> for the Wedding Ceremony to take place at 2pm. Food, speeches and festivities to follow!</div>
            </div>
            <div>
                <div className="rc-subheader">Evening Guests</div>
                <div>Arrive at <strong>7:30pm</strong> for Hog Roast, First Dance and Celebrations through the night!</div>
            </div>
            <div>
                <div className="rc-subheader">Important Information</div>
                <div>Bring cash! The venue bar <strong>accepts cash only</strong>. There is a cash machine but there is a small charge for withdrawals.</div>
            </div>
            <div>
                <div className="rc-subheader">Special Guest</div>
                <div>There will be a V.I.P (very important pooch) in attendance and will surely be eager to see so many of your familiar faces!</div>
            </div>
            
        </div>
        <div className="venue-nearby">
            <div className="sec-container-sml">
                <img className="sec-xsml" src={Hotels} alt="Hotels" />
            </div>
            <div className="venue-nearby-body">
                <p>
                    Hotel Name
                </p>
                <p>
                    Address
                </p>
                <p>
                    Website | contact details
                </p>
            </div>
        </div>
        <div className="venue-transport">
            <div className="sec-container-sml">
                <img className="sec-sml" src={Transport} alt="The Venue" />
            </div>
            <div className="venue-transport-body">
                <p>
                    Arrow (Airport) - <strong>01332</strong> 814 000<br></br>
                    Warrens (Breedon) - <strong>01332</strong> 864 440<br></br>
                    Malcars (Melbourne) - <strong>01332</strong> 865 865<br></br>
                    Shardlow Cars - <strong>01332</strong> 793 173<br></br>
                    K C Cars (Long Eaton) - <strong>01159</strong> 464 161<br></br>
                    Western Cars (Derby) - <strong>01332</strong> 331 331<br></br>
                    Village Cars - <strong>01332</strong> 706 020<br></br>
                    Jones of Melbourne - <strong>01332</strong> 865 598<br></br>
                    Ace Taxis (CD) - <strong>01332</strong> 811 123<br></br>
                    M Cars - <strong>01332</strong> 862 525<br></br>
                </p>
            </div>
        </div>
    </div>
)

export default TheVenue
