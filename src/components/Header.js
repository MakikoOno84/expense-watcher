import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/">Dashboard</NavLink></li>
                    <li><NavLink to="/graph">Graphs</NavLink></li>
                    <li><NavLink to="/table">Tables</NavLink></li>
                </ul>
            </nav>
        </header>
    )
};