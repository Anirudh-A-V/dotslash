import React from 'react'
import '../App.css'
import { Button } from './Button'
import ReactTypingEffect from 'react-typing-effect'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            {/* <div class="tenor-gif-embed" data-postid="17761682" data-share-method="host" data-aspect-ratio="2" data-width="100%"><a href="https://tenor.com/view/coding-kira-lena-urzendowsky-how-to-sell-drugs-online-fast-hacking-gif-17761682">Coding Kira GIF</a>from <a href="https://tenor.com/search/coding-gifs">Coding GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script> */}
            {/* <div class="tenor-gif-embed" data-postid="17761583" data-share-method="host" data-aspect-ratio="2" data-width="100%"><a href="https://tenor.com/view/coding-how-to-sell-drugs-online-fast-typing-code-hacker-gif-17761583">Coding How To Sell Drugs Online Fast GIF</a>from <a href="https://tenor.com/search/coding-gifs">Coding GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
            <h1>DOT SLASH</h1> */}
            {/* <p>College of Engineering Trivandrum</p>
            <p>June 2, 3</p> */}
            <div className='wrapper'>
                <div className='typing-sequence'>
                    {/* <h2>College of Engineering Trivandrum</h2> */}
                    {/* <br /> */}
                    College of Engineering Trivandrum
                           June 2,3 2022
                </div>
            </div>
            {/* <div className='wrapper'>
                <div className='typing-sequence'>
                    <h3>June 2,3 2022</h3>
                </div>
            </div> */}
                
            <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large' >
                Competition <i className="fa-solid fa-swords" />
            </Button>
            <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large' >
                Gaming <i className="fa-solid fa-alien-8bit" />
            </Button>
            <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large' >
                Workshops <i className="fa-solid fa-chalkboard-user" />
            </Button>

        </div>
    )
}

export default HeroSection