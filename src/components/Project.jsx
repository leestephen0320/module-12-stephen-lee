import React from "react";
import githubLogo from './UI/Images/github-logo.png'
import PropTypes from 'prop-types';

const Card = ({title, link, imgSrc}) => {
    return (
        <div className="card text-white w-50">
            <img className="card-img" src={imgSrc} alt={`Image for ${title}`}/>
            <div className="card-img-overlay">
                <h5 className="card-title">{title}</h5>
                <a href = {link} target='_blank' rel='noopener noreferrer'>
                    <img src={githubLogo} width="90" height="auto" className='hover-image' 
                    style={{
                        padding:'10px',
                    }}
                    />
                </a>
        </div>
</div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
};

export default Card;