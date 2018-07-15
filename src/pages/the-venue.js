import React from 'react'
import Link from 'gatsby-link'

const TheVenue = () => (
    <div>
        <div className="index-venue">
            <div>
                SVG Header goes here
            </div>
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
            <div>
                Image goes here | Donington Park Farmhouse
            </div>
        </div>
        <div className="venue-directions">
            <div>
                SVG Header goes here | Directions
            </div>
            <div className="venue-directions-body">
                <p>
                    Although in Leicestershire, we’re closest to the cities of Derby, Nottingham and Loughborough, with Leicester just half an hour away. You can reach us easily via the M1, M42 and A50, not to mention Nottingham East Midlands Airport, which is just 2.5 miles down the road.
                </p>
                <p>
                    We’re easy to find. From the A453 at Isley Walton, take the Melbourne turning. We’re half a mile along this road on the right; you can’t miss the beautiful black and white farmhouse. Click <a href="https://www.google.co.uk/maps/place/Donington+Park+Farmhouse+Hotel/@52.8248864,-1.3884704,17z/data=!3m1!4b1!4m7!3m6!1s0x4879e4e00aa09e9f:0xaef0d3403c3c3702!5m1!1s2018-07-17!8m2!3d52.8248864!4d-1.3862817">here</a> to get directions via Google Maps.
                </p>
            </div>
            <div>
                GoogleMaps Image here
            </div>
        </div>
        <div className="venue-nearby">
            <div>
                SVG Header goes here | Nearby Hotels
            </div>
            <div className="venue-nearby-body">
                <p>
                    Hotel 1
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
            <div>
                SVG Header goes here | Transport
            </div>
            <div className="venue-transport-body">
                <p>
                    Taxi Name
                </p>
                <p>
                    Contact No.
                </p>
            </div>
        </div>
    </div>
)

export default TheVenue
