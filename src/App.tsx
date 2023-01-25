import Header from '@components/Header/header'
import { useState } from 'react'
import { UserDetails } from '@components/userDetails/user-details'
import { UserField } from '@components/userField/userField'

function App() {
  return (
    <div className={`mx-auto mt-20 w-full px-2  sm:w-[48.625rem] sm:px-9 space-y-8 font-fontMono dark:bg-bgDark font-light`}>
      <Header/>
      <UserField/>
      <UserDetails/>
    </div>
  )
}

export default App
