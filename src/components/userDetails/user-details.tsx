import React, { useContext, useEffect } from 'react'
// import { userFetch } from '../../hooks/userFetchHook';
import { UserContext } from '../../context/userContext';
import { ReactComponent as Location } from '../../assets/pin.svg'
import { ReactComponent as Company } from '../../assets/organisation.svg'
import { ReactComponent as Link } from '../../assets/Link.svg'
import { ReactComponent as Twitter } from '../../assets/Twitter.svg'


type yearProps = 'numeric' | '2-digits' | undefined
interface DateOptionsProps {
  year: string ;
  month: string,
  day: string
}
export const UserDetails = () => {
  let x: Intl.DateTimeFormatOptions
  const userCtx = useContext(UserContext);


  if (!userCtx!.user) return null;

  const { user: { name, avatar_url, login, repos_url, location, twitter_username, bio, followers, following, public_repos, created_at, blog, company } } = userCtx!.user

  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' }

  const timeStamp = new Date(created_at as string | number).toLocaleDateString('en-US' , dateOptions as Intl.DateTimeFormatOptions)


  return (
    <div className=' rounded-2xl h-[400px] bg-[white] p-8 flex justify-between space-x-4 shadow-cardShw dark:text-stats dark:bg-bgLightDark dark:shadow-none'>

      <div className='h-28 w-28'>
        <img src={avatar_url} alt="user image" className='rounded-full' />

      </div>

      <div className='flex flex-col space-y-2 flex-1 gap-4'>
        <div className="flex h-20 ">
          <div className=' flex-1 '>
            <h1 className='text-2xl font-bold  '>{name}</h1>
            <h4 className='text-blueText '>@{login}</h4>
          </div>
          <div className='text-smText '>

            <span>Joined {timeStamp}</span>
          </div>

        </div>

        <p>{bio}</p>

        <div className=" bg-stats h-24 rounded-md font-bold flex w-full justify-between p-4 px-12 space-x-4 dark:bg-bgDark">

          <div className="flex flex-col text-center text-xl">
            <h5>Repo</h5>
            <span>{public_repos}</span>
          </div>
          <div className="flex flex-col text-center text-xl">
            <h5>Followers</h5>
            <span>{followers}</span>
          </div>
          <div className="flex flex-col text-center text-xl">
            <h5>Following</h5>
            <span>{following}</span>
          </div>

        </div>
        <div className="flex  justify-between  text-smText dark:text-stats">
          <div className='flex flex-col justify-between gap-y-4'>
            <div className=" flex  space-x-2">
              <Location />
              <span>{location === '' ? 'Not Availabale' : location}</span>
            </div>

            <div className={`flex space-x-2 ${blog === '' ? 'read-only:text-readOnlyText' : 'cursor-pointer'} `}>
              <Link />
              <span>{blog === '' ? 'Not Available' : <a href={blog as string} target='_blank'>{blog}</a>}</span>
            </div>
          </div>

          <div className='flex justify-between flex-col gap-y-4'>
            <div className={` ${twitter_username === null && 'read-only:text-readOnlyText'} flex space-x-2 items-center`}>
              <Twitter className='w-5 h-5' />
              <span>@{twitter_username === null ? 'Not Available' : twitter_username}</span>
            </div>
            <div className={`${company === null && ' read-only:text-readOnlyText'} flex space-x-2`}>
              <Company />
              <span>{company === null ? 'Not available' : company}</span>
            </div>

          </div>


        </div>

      </div>

    </div>
  )
}