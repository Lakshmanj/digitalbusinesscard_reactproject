// This file will be for making the digital card itself, on the page.
import Interests from './Interests';
import Info from './Info';



export default function Card(){
    return(
        <main className='card-layout'>
            <img />
            <h1>Laksh Jairam</h1>
            <Interests />
            <Info />
        </main>
    )
}