import profilePic from '../assets/pfp.jpg';
import { FaLinkedin, FaPhoneAlt, FaEnvelope, FaGlobe, FaGithub } from 'react-icons/fa'


export default function Info() {
    return (
        <>
            <div className='info'>
                <img className='profile-pic' src={profilePic} alt="Profile Picture of Laksh Jairam" />
                <h2>Laksh Jairam</h2>
                <h3>Full-Stack Developer | Velos Digital Founder</h3>
                <div className='social-links'>
                    <a href="mailto:laksh.jairam@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
                    <a href="https://www.linkedin.com/in/lakshman-jairam/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://github.com/Lakshmanj" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://www.velosdigital.netlify.app" target="_blank" rel="noopener noreferrer"><FaGlobe /></a>
                </div>
            </div>
        </>
    )
}