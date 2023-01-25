import React, { useContext } from "react";
import { UserContext } from '@context/userContext';
import { ReactComponent as Search } from '@assets/search.svg'

export const UserField = () => {
    const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        userCtx!.setUserValue(value)


    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        userCtx!.fetchUser();
    }
    const userCtx = useContext(UserContext);

    return (
        <form onSubmit={handleSubmit} className='w-full h-16 rounded-2xl  shadow-cardShw bg-[#fefefe]  flex items-center space-x-2 px-4 justify-between dark:shadow-none  dark:bg-bgLightDark' >
            <div className="relative w-[70%] sm:w-[80%]">
                <Search className="absolute w-6 text-btnBlue dark:text-stats" />
                <input
                    type="text"
                    placeholder="Search GitHub username"
                    onChange={handleUserChange}
                    value={userCtx!.userValue}
                    className='w-full border-none outline-none pl-8 dark:bg-bgLightDark dark:text-stats dark:placeholder:text-stats z-50'
                />
            </div>

            <button type="submit" className="bg-btnBlue h-10 px-1 w-20 rounded-lg text-bgLight">Search</button>
        </form>
    );
}