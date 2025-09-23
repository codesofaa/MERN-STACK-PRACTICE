import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <div className="container">
                    <Link to="/">
                    <h1>Workout Buddy</h1>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar