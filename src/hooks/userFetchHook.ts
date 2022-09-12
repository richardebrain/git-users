// import { Octokit } from '@octokit/core'
// import React, { useState,useEffect } from 'react'

// // interface User{
// //   user: string
// //   setUser: []
// // }
// interface Data{

//   user:{
//     login: string;
//     id?: number;
//     node_id?: string;
//     avatar_url: string;
//     gravatar_id: string | null;
//     url: string;
//     html_url?: string;
//     followers_url?: string;
//     following_url?: string;
//     gists_url?: string;
//     ldap_dn?: string | undefined;
//     name?: string | null;
//     repos_url?: string;
//     location?: string | null;
//     twitter_username?: string | null;
//     bio?: string | null;
//     followers?: number;
//     following?: number;
//     public_repos?: number;
 
//   }
// }

// export const userFetch = () => {
//   const [user,setUser ] = useState<Data | null>(null)
//   const [userValue, setUserValue] = useState<string>('richardebrain ')
//   const [loading,setLoading] = useState<boolean>(false);

//   const abortCtrl = new AbortController()

//   useEffect(() => {
//     const fetchUser = async () => {
//       const octokit = new Octokit({
//         auth: import.meta.env.GITHUB_TOKEN,
//       })
//       await octokit.request('GET /users/{username}', {
//         username: userValue
//       })
//       .then(({data}) => {
//       setUser({user:data})
//       setLoading(false)
//       }).catch(err => {
//         setLoading(true)
//         console.log(err)
//       }
//       )
//     }
   
//    fetchUser()
//    return () => {
//      abortCtrl.abort()}
//   },[userValue])

//   return{user,userValue,setUserValue} 
// }
