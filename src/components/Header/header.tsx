import React, { useEffect, useContext } from "react";

import { UserContext } from "../../context/userContext";
import { ReactComponent as Sun } from '../../assets/Sun.svg'
import { ReactComponent as Moon } from '../../assets/Moon.svg'
export const Header = ({ setDark, dark }: any) => {
  const { currentTheme, changeCurrentTheme } = useContext(UserContext) as any


  const handleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    changeCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')

  }

  return (
    <div className="flex justify-between flex-col mb-4  dark:bg-bgDark dark:text-stats">
      <div className="top-header flex justify-between align-center">
        <span className="text-2xl">devFinder</span>
        <div className="flex items-center space-x-2">
          <button onClick={handleTheme} className="text-md border-none tracking-widest">{currentTheme === 'dark' ? 'LIGHT' : 'DARK'}</button>
          {
            currentTheme === 'dark' ? <Moon className="text-2xl" /> : <Sun className="text-2xl" />
          }
        </div>


      </div>




    </div>
  );
}


