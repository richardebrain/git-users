import { Header, UserField } from './components'
import { useState } from 'react'
import { UserDetails } from './components'

function App() {
  return (
    <div className={`mx-auto mt-20  w-[48.625rem] px-9 space-y-8 font-fontMono dark:bg-bgDark font-light`}>
      <Header/>
      <UserField/>
      <UserDetails/>
    </div>
  )
}

export default App
