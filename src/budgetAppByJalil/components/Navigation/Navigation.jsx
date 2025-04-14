import '../Navigation/Navigation.css'
import homeButton from '../Buttons/home.png'

function Navigation({ closeTracker }) {
    return (
        <div className="navigation-panel">
            <div className="home-button" onClick={closeTracker}>
                <img src={homeButton} alt='home icon' />
            </div>
        </div>
    )
}

export default Navigation