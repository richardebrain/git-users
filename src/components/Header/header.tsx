import  {  useContext } from "react";
import { UserContext } from "@context/userContext";
import { ReactComponent as Sun } from '../../assets/Sun.svg'
import { ReactComponent as Moon } from '../../assets/Moon.svg'

 const Header = () => {
  const { currentTheme, changeCurrentTheme } = useContext(UserContext) as any


  const handleTheme = () => {
    changeCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')

  }

  return (
    <div className="flex justify-between flex-col mb-4  dark:bg-bgDark dark:text-stats">
      <div className="top-header flex justify-between align-center">
        <span className="text-2xl">devFinder</span>
        <div className="flex items-center space-x-2 tracking-widest text-md cursor-pointer" onClick={handleTheme}>
          <span>
            {currentTheme === 'dark' ? 'LIGHT' : 'DARK'}
          </span>
          {
            currentTheme === 'dark' ? <Sun className="text-2xl" /> : <Moon className="text-2xl" />
          }
        </div>


      </div>




    </div>
  );
}

export default Header;


