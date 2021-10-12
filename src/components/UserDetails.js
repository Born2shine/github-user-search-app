import AVATAR from "../assets/images/avatar.png"
import LOCATION_ICON from "../assets/images/icon-location.svg"
import WEBSITE_ICON from "../assets/images/icon-website.svg"
import TWITTER_ICON from "../assets/images/icon-twitter.svg"
import COMPANY_ICON from "../assets/images/icon-company.svg"

const UserDetails = () => {
    return (
        <div className="user-profile">
            <aside className="left-aside">
                <img className="avatar" src={AVATAR} alt="avatar" />
            </aside>
         <aside className="right-aside">
            <article className="about-me">
                <div className="left">
                    <img className="avatar" src={AVATAR} alt="avatar" />
                </div>
                <div className="right">
                    <div className="title">
                        <div className="sub-info">
                            <h2 className="name">The Octocat</h2>
                            <span className="username">@octocat</span>
                        </div>
                        <span className="joined">Joined 25 Jan 2021</span>
                    </div>
                </div>
            </article>
            <p className="some-text">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
                Quisque volutpat mattis eros.
            </p>
            <article className="attributes">
                <ul>
                    <li>
                        <span className="title">Repos</span>
                        <h2 className="total">8</h2>
                    </li>
                    <li>
                        <span className="title">Followers</span>
                        <h2 className="total">3423</h2>
                    </li>
                    <li>
                        <span className="title">Following</span>
                        <h2 className="total">9</h2>
                    </li>
                </ul>
            </article>
            <article className="contact-info">
                <ul>
                    <li>
                        <div className="contact-logo">
                            <img src={LOCATION_ICON} alt="contact-logo" />
                            <span className="info">San Francisco</span>
                        </div>
                    </li>
                    <li>
                        <div className="contact-logo">
                            <img src={WEBSITE_ICON} alt="contact-logo" />
                            <span className="info">https:github.com.blog</span>
                        </div>
                    </li>
                    <li>
                        <div className="contact-logo">
                            <img src={TWITTER_ICON} alt="contact-logo" />
                            <span className="info">Not Available</span>
                        </div>
                    </li>
                    <li>
                        <div className="contact-logo">
                            <img src={COMPANY_ICON} alt="contact-logo" />
                            <span className="info">@github</span>
                        </div>
                    </li>
                </ul>
            </article>
        </aside>
    </div>
    )
}

export default UserDetails