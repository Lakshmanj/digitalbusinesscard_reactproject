import profilePic from '../assets/pfp.jpg';


export default function Info(){
    return(
        <>
        <div className='info'>
            <img className='profile-pic' src={profilePic} alt="Profile Picture of Laksh Jairam" />
            <h2>Laksh Jairam</h2>
            <h3>Full-Stack Developer | Velos Digital Founder</h3>

        </div>
        </>
    )
}