import DarkModeSwitch from './DarkModeSwitch';
import { NavLink } from "react-router-dom";
import NavHeader from './NavHeader';


export default function Header() {
  return (
    <header className="w-full bg-indigo-500 dark:bg-indigo-900 p-4 shadow-md">
      <div  className='flex justify-between mt-3' >
      <NavLink to="/"><img src="https://avatars.githubusercontent.com/u/161897947?v=4" alt="Minha foto"  className='rounded-full w-16'/></NavLink>
      <NavHeader />
      <DarkModeSwitch/>
      </div>
      
    </header>
  );
}
