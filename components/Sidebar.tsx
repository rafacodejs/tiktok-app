import { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Discover, SuggestedAccount, Footer } from './index';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';

const Sidebar = () => {
  const [showSideBar, setShowSideBar] = useState(true);

  const normalLink =
    'flex items-center gap-3 hover:bg-primary p-2 justify-center xl:justify-start cursor-pointer font-semibold text-secondary';

  const userProfile = false;

  return (
    <div>
      <div
        className='block xl:hidden m-2 ml4 mt-3 text-xl'
        onClick={() => setShowSideBar((prev) => !prev)}
      >
        {showSideBar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      {showSideBar && (
        <div className='xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3'>
          <div className='xl:border-b-2 border-gray-200 xl:pb-4'>
            <Link href={'/'}>
              <div className={normalLink}>
                <p className='text-2xl'>
                  <AiFillHome />
                </p>
                <span className='text-xl hidden xl:block'>For You</span>
              </div>
            </Link>
          </div>

          <Discover></Discover>
          <SuggestedAccount></SuggestedAccount>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

export { Sidebar };
