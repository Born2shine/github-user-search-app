// import AVATAR from "../assets/images/avatar.png"
import LOCATION_ICON from "../assets/images/icon-location.svg"
import WEBSITE_ICON from "../assets/images/icon-website.svg"
import TWITTER_ICON from "../assets/images/icon-twitter.svg"
import COMPANY_ICON from "../assets/images/icon-company.svg"
import Moment from "react-moment"

const UserDetails = ({user}) => {
    return (
        <div className="user-profile">
            <aside className="left-aside">
                <img className="avatar" src={user.avatar_url} alt="avatar" />
            </aside>
         <aside className="right-aside">
            <article className="about-me">
                <div className="left">
                    <img className="avatar" src={user.avatar_url} alt="avatar" />
                </div>
                <div className="right">
                    <div className="title">
                        <div className="sub-info">
                            <h2 className="name">{user.name}</h2>
                            <span className="username">@{user.login}</span>
                        </div>
                        <span className="joined">Joined <Moment date={user.created_at} format="DD MMM Y"/> </span>
                    </div>
                </div>
            </article>
            <p className="some-text">
                {
                    user.bio ? user.bio : 'No bio'
                }
                
            </p>
            <article className="attributes">
                <ul>
                    <li>
                        <span className="title">Repos</span>
                        <h2 className="total">{user.public_repos}</h2>
                    </li>
                    <li>
                        <span className="title">Followers</span>
                        <h2 className="total">{user.followers}</h2>
                    </li>
                    <li>
                        <span className="title">Following</span>
                        <h2 className="total">{user.following}</h2>
                    </li>
                </ul>
            </article>
            <article className="contact-info">
                <ul>
                    <li>
                        <div className="contact-logo">
                            <img src={LOCATION_ICON} alt="contact-logo" />
                            <span className="info">{user.location ? user.location : 'Not Available'}</span>
                        </div>
                    </li>
                    <li>
                        <div className="contact-logo">
                            <img src={WEBSITE_ICON} alt="contact-logo" />
                            <a className="info" target="_blank" href={user.html_url}>view profile</a>
                        </div>
                    </li>
                    <li>
                        <div className="contact-logo">
                            <img src={TWITTER_ICON} alt="contact-logo" />
                            <span className="info">{user.twitter_username ? user.twitter_username : 'Not Available'}</span>
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