import { Link } from 'react-router-dom'
// import log from '../assets/icon.png'


export default function NavBar() {

    const lists = [
        { lk: '/', tle: 'Accueil' },
        { lk: '/contact', tle: 'Contactez-nous' },
        { lk: '/about', tle: 'Apropos' },

    ];

    return (
        <div className='nav-bar'>
            <div className='container'>
                {/* <div className='logo'>
                    <img src={log} alt="" />
                </div> */}
                <ul className='nav-bat-list-item'>
                    {
                        lists.map((l, i) =>
                            <Link
                                to={l.lk}
                                key={i}
                                className='link'>
                                <li className='menu-item'>
                                    <span>{l.tle}</span>
                                </li>
                            </Link>)
                    }
                </ul>
            </div>
        </div>
    )
}
