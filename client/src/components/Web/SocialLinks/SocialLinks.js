import React from 'react';

import YoutubeIcon from '../../../assets/img/svg/youtube';
import TwitterIcon from '../../../assets/img/svg/twitter';
import FacebookIcon from '../../../assets/img/svg/facebook';
import LinkedinIcon from '../../../assets/img/svg/linkedin';

import './SocialLinks.scss';

const SocialLinks = () => {
    return (
        <div className="social-links">
            <a 
                href="https://www.youtube.com/channel/UCycbs0XNBfdV390y6MrkyuA"
                className="youtube"   
                target="_blank"
                rel="noopener noreferrer"
            >    
                <YoutubeIcon />
            </a>
            <a 
                href="https://twitter.com/elonmusk"
                className="twitter"   
                target="_blank"
                rel="noopener noreferrer"
            >    
                <TwitterIcon />
            </a>
            <a 
                href="https://www.facebook.com/profile"
                className="facebook"   
                target="_blank"
                rel="noopener noreferrer"
            >    
                <FacebookIcon />
            </a>
            <a 
                href="https://www.facebook.com/profile"
                className="linkedin"   
                target="_blank"
                rel="noopener noreferrer"
            >    
                <LinkedinIcon />
            </a>
        </div>
    )
}

export default SocialLinks;
