import { NavLink } from 'react-router-dom'
import Logo from '../assets/b.tech-tutor-logo.avif';

const Navbar = () => (
    <nav className=' w-full px-10 flex justify-between items-center mx-auto cursor-pointer shadow-[0px_15px_12px_-20px_#111]'>
        <div className=''>
            <NavLink to='/'>
                <img
                    src={Logo}
                    alt="B.Tech Tutor Logo"
                    className="w-full h-24 sm:h-28 md:h-32 mt-[-20px]"
                />
            </NavLink>
        </div>
        <div>
            <ul className='hidden sm:flex gap-3 md:gap-10 sm:gap-4 justify-between font-body font-normal text-sm sm:text-lg text-tertiary'>
                <li>
                    <NavLink
                        className={`hover:text-secondary ${location.pathname === '/' || location.pathname === '/btech' ? 'text-secondary' : ''}`}
                        to='/btech'
                    >
                        BTech
                    </NavLink>
                </li>
                <li>
                    <NavLink className='hover:text-secondary [&.active]:text-secondary' to='/gate'>Gate</NavLink>
                </li>
                <li>
                    <NavLink className='hover:text-secondary [&.active]:text-secondary' to='/bundle'>Bundle</NavLink>
                </li>
                <li>
                    <NavLink className='hover:text-secondary [&.active]:text-secondary' to='/internship'>Internship</NavLink>
                </li>
                <li>
                    <a className='hover:text-secondary [&.active]:text-secondary' href='/project'>Project</a>
                </li>
            </ul>
        </div>
    </nav>
)

export default Navbar;