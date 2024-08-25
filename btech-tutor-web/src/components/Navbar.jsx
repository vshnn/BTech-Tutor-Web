import { NavLink } from 'react-router-dom'
import Logo from '../assets/b.tech-tutor-logo.avif';

const Navbar = () => (
    <nav className=' w-full px-6 flex justify-between items-center mx-auto cursor-pointer shadow-md'>
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
            <ul className='hidden sm:flex gap-3 md:gap-10 sm:gap-4 justify-between font-navbar leading-normal tracking-wide font-normal text-sm sm:text-lg text-tertiary'>
                <li>
                    <NavLink className='hover:text-secondary [&.active]:text-secondary' to='/btech'>BTech</NavLink>
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