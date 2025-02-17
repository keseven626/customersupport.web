import React from "react";
import Event from "./Events.module.scss";

import filterIcon from "./assets/filter-icon.svg";
import comingSoon from "./assets/comming-soon.png";
import jim from "./assets/jim.svg";
import angela from "./assets/angela.svg";
import stanley from "./assets/stanley.svg";
import kelly from "./assets/kelly.svg";
import linkedin from "./assets/linkedin.svg";
import twitter from "./assets/twitter.svg";
import expect from "./assets/expect-icon.svg";

import communication from "./assets/communication.png";
import winingWay from "./assets/winning-way.png";
import business from "./assets/business.png";

import NavBar from "../../components/navBar/index";
import Footer from "../../components/footer/index";

const Events = () => {
  return (
    <div className="event-section">
      <NavBar />
      <div className={Event.headerSection}>
        <div className={Event.containers}>
          <div className={Event.eventFlex}>
            <h1>Events</h1>

            <button>
              Filter Events
              <img src={filterIcon} alt="filter" />
            </button>
          </div>

          <p>
            Join our events either in person or virtually, any where and on any
            device near you. Explore our upcoming events and save a date. You’ll
            be glad you did!
          </p>
          <button>view calender</button>
        </div>

        <div className={Event.comingsoon}>
          <div className={Event.containers}>
            <h1>Coming Soon</h1>
            <div className={Event.comingFlex}>
              <div className={Event.cominImg}>
                <img src={comingSoon} alt="commingSoon" />
              </div>
              <div className={Event.cominTxt}>
                <p>17th November, 2022</p>
                <div className={Event.line}></div>
                <p>Mom Civic Center, Maitama, Abuja</p>
                <button>Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={Event.missionSection}>
        <div className={Event.containers}>
          <h1>Our Mission</h1>
          <p>
            We understand the challenges young people looking to be
            professionals in their fields face- not being able to get the job
            because of lack of experience and not being able to get the
            experience because they can’t get the job. This career fest is
            designed to demystify the confusions surrounding landing your first
            job as a fresh graduate. We have put together an event that will
            leave you confident, empowered and emboldened at the end of the day.
          </p>

          <h1>Meet Our Speakers</h1>

          <div className={Event.speakerContainer}>
            <div className={Event.speaker}>
              <img src={jim} alt="jim" />
              <p>Jim Hampert</p>
              <span>
                <img src={linkedin} alt="linkedin" />
                <img src={twitter} alt="twitter" />
              </span>
            </div>
            <div className={Event.speaker}>
              <img src={angela} alt="angela" />
              <p>Angela Brume</p>
              <span>
                <img src={linkedin} alt="linkedin" />
                <img src={twitter} alt="twitter" />
              </span>
            </div>
            <div className={Event.speaker}>
              <img src={stanley} alt="stanley" />
              <p>Stanley Hudson</p>
              <span>
                <img src={linkedin} alt="linkedin" />
                <img src={twitter} alt="twitter" />
              </span>
            </div>
            <div className={Event.speaker}>
              <img src={kelly} alt="kelly" />
              <p>Kelly Kapoor</p>
              <span>
                <img src={linkedin} alt="linkedin" />
                <img src={twitter} alt="twitter" />
              </span>
            </div>
          </div>

          <div className={Event.expectContainer}>
            <h2>What To Expect?</h2>
            <div className={Event.expectTalk}>
              <div className={Event.expect}>
                <img src={expect} alt="expect" />
                <p>Expert Talks </p>
              </div>
              <div className={Event.expect}>
                <img src={expect} alt="expect" />
                <p>Interactive Sessions</p>
              </div>
              <div className={Event.expect}>
                <img src={expect} alt="expect" />
                <p>Networking</p>
              </div>
            </div>

            <button>Learn More</button>
          </div>
        </div>
      </div>

      <div className={Event.otherEvent}>
        <div className={Event.containers}>
          <h2>Other Events In The Month Of November</h2>

          <div className={Event.contentContainer}>
            <div className={Event.eventContent}>
              <div className={Event.imgContent}>
                <img src={winingWay} alt="winning" />
              </div>

              <div className={Event.txtContent}>
                <h4>Winning Ways</h4>
                <p>
                  Bridging the gulf between businesses and stakeholders in a
                  dynamic business atmosphere.
                </p>
                <p>November 18th, 2022 | Virtual</p>
                <button>Register</button>
              </div>
            </div>
            <div className={Event.eventContent}>
              <div className={Event.imgContent}>
                <img src={communication} alt="communication" />
              </div>

              <div className={Event.txtContent}>
                <h4>Communicating Effectively With Clients</h4>
                <p>
                  Customer support act as the bridge between your business and
                  clients.Find out how productivity can be maximized through
                  effective communication on your end.
                </p>
                <p>November 22nd, 2022 | Virtual</p>
                <button>Register</button>
              </div>
            </div>
            <div className={Event.eventContent}>
              <div className={Event.imgContent}>
                <img src={business} alt="communication" />
              </div>

              <div className={Event.txtContent}>
                <h4>A Good Day To Do Business</h4>
                <p>
                  Every party to a business transaction has a crucial part to
                  play toward the success of that venture. Find out what and
                  how.
                </p>
                <p>November 29th, 2022 | Virtual</p>
                <button>Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={Event.pastEvent}>
        <div className={Event.containers}>
          <h1>Past Events</h1>

          <div className={Event.pastContent}>
            <div className={Event.pastContainer}>
              <h2>07/02</h2>
              <div className={Event.pastCard}>
                <p className={Event.right}>Highlights</p>
                <h3>A Word From Our Founder</h3>
                <p>
                  Every party to a business transaction has a crucial part to
                  play toward the success of that venture. Find out what and
                  how.
                </p>
                <button>Explore</button>
              </div>
            </div>
            <div className={Event.pastContainer}>
              <h2>08/04</h2>
              <div className={Event.pastCard}>
                <p className={Event.right}>Highlights</p>
                <h3>The Scrybe Story</h3>
                <p>
                  Every party to a business transaction has a crucial part to
                  play toward the success of that venture. Find out what and
                  how.
                </p>
                <button>Explore</button>
              </div>
            </div>
            <div className={Event.pastContainer}>
              <h2>07/02</h2>
              <div className={Event.pastCard}>
                <p className={Event.right}>Highlights</p>
                <h3>Building The Future Of</h3>
                <p>
                  Every party to a business transaction has a crucial part to
                  play toward the success of that venture. Find out what and
                  how.
                </p>
                <button>Explore</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
