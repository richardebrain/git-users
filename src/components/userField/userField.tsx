import React, { useContext } from "react";
import { UserContext } from '../../context/userContext'
import {ReactComponent as Search} from '../../assets/Search.svg'

export const UserField = () => {
    const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setUserValue(value)


    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        fetchUser();
    }
    const { userValue, setUserValue, fetchUser } = useContext(UserContext);

    return (
        <form onSubmit={handleSubmit} className='h-16 rounded-2xl  shadow-cardShw bg-[#fefefe]  flex items-center space-x-2 px-4 justify-between dark:shadow-none  dark:bg-bgLightDark' >
            <div className="relative w-[70%]">
                <Search className=" absolute text-btnBlue dark:text-stats"/>
            <input type="text" placeholder="Search GitHub username" onChange={handleUserChange} value={userValue} className='w-full border-none outline-none pl-8 dark:bg-bgLightDark dark:text-stats dark:placeholder:text-stats ' />
            </div>
            
            <button type="submit" className="bg-btnBlue h-10 w-20 rounded-lg text-bgLight">Search</button>
        </form>
    );
}