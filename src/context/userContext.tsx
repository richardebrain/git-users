import { createContext, useState, useEffect } from "react";
import { Data } from "@constants/types";
import { Octokit } from "@octokit/core";

type newTheme = 'light' | 'dark';
interface Value {
    user: Data | null;
    setUserValue: React.Dispatch<React.SetStateAction<string>>;
    userValue: string;
    fetchUser: () => void;
    theme?: string | null;
    changeCurrentTheme: (newTheme: newTheme) => void;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    currentTheme: string;


}



export const UserContext = createContext<Value | null>(null);



export const UserWrapper = ({ children }: any) => {
    const [user, setUser] = useState<Data | null>(null)
    const [userValue, setUserValue] = useState<string>('octocat')

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

    const changeCurrentTheme = (newTheme: 'light' | 'dark') => {
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    useEffect(() => {
        if (theme === 'light') document.documentElement.classList.remove('dark')
        else document.documentElement.classList.add('dark')
    }, [theme])


    const fetchUser = async () => {
        const octokit = new Octokit({
            auth: import.meta.env.GITHUB_TOKEN,
        })
        await octokit.request('GET /users/{username}', {
            username: userValue
        })
            .then(({ data }) => {
                setUser({ user: data })


            }).catch(err => {

                console.log(err)
            }
            )
    }




    return <UserContext.Provider value={{
        user,
        setUserValue,
        userValue,
        fetchUser,
        currentTheme: theme,
        changeCurrentTheme,
        setTheme,
    }}>
        {children}
    </UserContext.Provider>;
}