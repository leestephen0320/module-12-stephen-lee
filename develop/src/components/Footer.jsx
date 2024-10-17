import './UI/Logo/ImageHover.css';
import githubLogo from './UI/Images/github-logo.png';
import linkedInLogo from './UI/Images/linkedin-logo.png';
import aniListLogo from './UI/Images/anilist-logo.png';

export default function Footer() {
    return (
        <footer>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '20px',
          }}>
            <div className='image-container'>
                <a href = "https://github.com/leestephen0320" target='_blank' rel='noopener noreferrer'>
                    <img src={githubLogo} width="100" height="auto" className='hover-image' 
                    style={{
                        padding:'10px',
                    }}
                    />
                </a>
            </div>
            <div className='image-container'>
                <a href = "https://www.linkedin.com/in/stephen-lee-a6b634194/" target='_blank' rel='noopener noreferrer'>
                    <img src={linkedInLogo} width="100" height="auto"  className='hover-image' 
                    style={{
                        padding:'10px',
                    }}
                    />
                </a>
            </div>
            <div className='image-container'>
                <a href = "https://anilist.co/user/IcyMcSpicy/" target='_blank' rel='noopener noreferrer'>
                    <img src={aniListLogo} width="100" height="auto"  className='hover-image' 
                    style={{
                        padding:'10px',
                    }}
                    />
                </a>
            </div>
        </div>
        </footer>
    );
}