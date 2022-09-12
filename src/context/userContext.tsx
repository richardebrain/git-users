import { createContext, useState, useEffect } from "react";
import { Data } from "constants";
import { Octokit } from "@octokit/core";


interface Value {
    user: Data | null;
    setUserValue: React.Dispatch<React.SetStateAction<string>>;
    userValue: string;
    fetchUser: () => void;
    theme?: string | null;
   changeCurrentTheme: (newTheme: string) => void;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  defaultValue:IdefaultTheme
    
}

interface IdefaultTheme {
    currentTheme: string;
    changeCurrentTheme: (newTheme: string |string) => void;
}
export const UserContext = createContext<Value | null>(null);



export const UserWrapper = ({ children }: any) => {
    const [user, setUser] = useState<Data | null>(null)
    const [userValue, setUserValue] = useState<string>('richardebrain')

    const defaultValue = {
        currentTheme: 'light',
        changeCurrentTheme: (newTheme: 'light' | 'dark') => {},
      }

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

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
    }}>
        {children}
    </UserContext.Provider>;
}