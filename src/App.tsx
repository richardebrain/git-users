import Header from '@components/Header/header'
import { useState } from 'react'
import { UserDetails } from '@components/userDetails/user-details'
import { UserField } from '@components/userField/userField'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className={`mx-auto mt-20 w-full px-2  sm:w-[48.625rem] sm:px-9 space-y-8 font-fontMono dark:bg-bgDark font-light mb-40`}>
      <Header/>
      <UserField/>
      <UserDetails/>
      <ToastContainer/>
    </div>
  )
}

export default App
