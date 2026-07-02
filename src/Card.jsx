import profilePic from './assets/IMG_10812.jpg'

function Card() {
    return(
        <div className="card">
            <img className='card-image' alt="Profile Picture" src={ profilePic }></img>
            <h2 className='card-title'>Ryan Corson</h2>
            <p className='card-text'>I'm a recent Software Engineering graduate.</p>
        </div>
    );
}

export default Card