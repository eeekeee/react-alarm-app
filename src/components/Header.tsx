import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className='header'>
      <ul className='list'>
        <li>
          <NavLink
            to='/'
            className={({ isActive }: { isActive: string }) =>
              isActive ? "active" : undefined
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/stopwatch'
            className={({ isActive }: { isActive: string }) =>
              isActive ? "active" : undefined
            }
            end
          >
            Stopwatch
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/timer'
            className={({ isActive }: { isActive: string }) =>
              isActive ? "active" : undefined
            }
            end
          >
            Timer
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/alarm'
            className={({ isActive }: { isActive: string }) =>
              isActive ? "active" : undefined
            }
            end
          >
            Alarm
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
