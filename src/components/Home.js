import React, { useEffect } from 'react'
import LeftSidebar from './LeftSidebar'
import RightSideBar from './RightSideBar'
import { Outlet, useNavigate } from 'react-router-dom'
import useOtherUsers from '../hooks/useOtherUsers'
import { useSelector } from 'react-redux'
import useGetMyTweets from '../hooks/useGetMyTweets'

const Home = () => {

  const { user, otherUsers } = useSelector(store => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login")
    }
  },[])

  //custom hook 
  useOtherUsers(user?._id)
  useGetMyTweets(user?._id)

  return (
    <div className='flex justify-between w-[80%] mx-auto'>
      <LeftSidebar />
      <Outlet />          {/*children display krne ke liye hai*/}
      <RightSideBar otherUsers={otherUsers} />

    </div>
  )
}

export default Home