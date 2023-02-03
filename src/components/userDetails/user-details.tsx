import React, { useContext, useEffect } from 'react'
// import { userFetch } from '../../hooks/userFetchHook';
import { UserContext } from '@context/userContext';
import { ReactComponent as Location } from '@assets/pin.svg'
import { ReactComponent as Company } from '@assets/organisation.svg'
import { ReactComponent as Link } from '@assets/link.svg'
import { ReactComponent as Twitter } from '@assets/Twitter.svg'


export const UserDetails = () => {
  let x: Intl.DateTimeFormatOptions
  const userCtx = useContext(UserContext);

  if (!userCtx?.user) return null;

  const { user: { name, avatar_url, login, repos_url, location, twitter_username, bio, followers, following, public_repos, created_at, blog, company } } = userCtx!.user

  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' }

  const timeStamp = new Date(created_at as string | number).toLocaleDateString('en-US', dateOptions as Intl.DateTimeFormatOptions)


  return (
    <div className=' rounded-2xl h-[540px] sm:h-fit bg-[white] p-1 sm:p-8 flex flex-col
    sm:flex-row justify-between sm:gap-4 shadow-cardShw dark:text-stats dark:bg-bgLightDark dark:shadow-none w-full px-2 py-6'>
      <div className='h-28 w-28 hidden sm:block'>
        <img src={avatar_url} alt="user image" className='rounded-full' />

      </div>
      <div className='flex flex-col sm:w-10/12 gap-6'>

        <div className='flex gap-4 w-full '>
          <div className='h-28 w-28 sm:hidden sm:invisible'>
            <img src={avatar_url} alt="user image" className='rounded-full' />

          </div>

          <div className="flex h-20 sm:flex-row flex-col sm:justify-between w-fit sm:w-full ">
            <div className='  '>
              <h1 className='text-2xl font-bold  '>{name}</h1>
              <h4 className='text-blueText '>@{login}</h4>
            </div>
            <div className='text-smText max-w-fit'>

              <span>Joined {timeStamp}</span>
            </div>

          </div>
        </div>

        <div className='flex flex-col space-y-2 flex-1 gap-4'>

          <p>{bio}</p>

          <div className=" bg-stats h-24 rounded-md font-bold flex w-full justify-between py-4   dark:bg-bgDark px-4 ">

            <div className="flex flex-col text-center text-xl w-fit">
              <h5>Repo</h5>
              <span>{public_repos}</span>
            </div>
            <div className="flex flex-col text-center text-xl w-fit">
              <h5>Followers</h5>
              <span>{followers}</span>
            </div>
            <div className="flex flex-col text-center text-xl w-fit">
              <h5>Following</h5>
              <span>{following}</span>
            </div>

          </div>
          {/* links to urls */}
          <div className="flex sm:flex-row flex-col justify-between   text-smText dark:text-stats gap-4 ">
            <div className='flex flex-col justify-between gap-y-4 '>
              <div className=" flex  sm:space-x-2 gap-6 sm:gap-4">
                <Location className='w-6' />
                <span >{location === '' ? 'Not Availabale' : location}</span>
              </div>

              <div className={`flex sm:space-x-2 ${blog === '' ? 'read-only:text-readOnlyText' : 'cursor-pointer'} gap-6 sm:gap-4`}>
                <Link className='w-6' />
                <span>{blog === '' ? 'Not Available' : <a href={blog as string} target='_blank'>{blog}</a>}</span>
              </div>
            </div>

            <div className='flex justify-between flex-col gap-y-4 '>
              <div className={` ${twitter_username === null && 'read-only:text-readOnlyText'} flex sm:space-x-2 items-cente gap-6 sm:gap-4`}>
                <Twitter className='w-6 h-5' />
                <span>@{twitter_username === null ? 'Not Available' : twitter_username}</span>
              </div>
              <div className={`${company === null && ' read-only:text-readOnlyText'} flex sm:space-x-2 gap-6 sm:gap-4 `}>
                <Company className='w-6' />
                <span>{company === null ? 'Not available' : company}</span>
              </div>

            </div>


          </div>

        </div>
      </div>

    </div>
  )
}