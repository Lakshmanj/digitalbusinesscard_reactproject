// This file will be for making the digital card itself, on the page.
import Interests from './Interests';
import Info from './Info';
import Skills from './Skills'
import profilePic from '../assets/pfp.jpg';



export default function Card() {
    return (
        <main className='card-layout'>

            {/* this component covers the left side */}
            <Info />       


            {/* this component covers the right side */}
            <div className='card-details'>
                <Interests />
                <Skills />
            </div>
        </main>
    )
}