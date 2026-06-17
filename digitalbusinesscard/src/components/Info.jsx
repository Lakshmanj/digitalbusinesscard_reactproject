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
                    <a href=""><FaEnvelope /></a>
                    <a href=""><FaLinkedin /></a>
                    <a href=""><FaGithub /></a>
                    <a href=""><FaGlobe /></a>
                </div>
            </div>
        </>
    )
}