import Image from 'next/legacy/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import Logo from '../utils/logo.png';
import { createOrGetUser } from '../utils';
import useAuthStore from '../store/authStore';

const Navbar = () => {
  const { userProfile, addUser, removeUser } = useAuthStore();

  return (
    <div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
      <Link href='/'>
        <div className='w-[80px] md:w-[80px] '>
          <Image
            className='cursor-pointer'
            src={Logo}
            alt='logo'
            width={45}
            height={15}
            layout='responsive'
          />
        </div>
      </Link>
      <div>Search</div>
      <div>
        {userProfile ? (
          <div className='flex gap-5 md:gap-10 '>
            <Link href={'/upload'}>
              <button className='border-2 p-2 md:px-4 text-md font-semibold flex items-center gap-2 rounded-[8px] hover:bg-secondary hover:text-white hover:border-black'>
                <IoMdAdd className='text-xl' /> {``}
                <span className='hidden md:block'>Upload</span>
              </button>
            </Link>
            {userProfile.image && (
              <Link href='/'>
                <>
                  <Image
                    width={40}
                    height={40}
                    className='rounded-full cursor-pointer'
                    src={userProfile.image}
                    alt='profile photo'
                  />
                </>
              </Link>
            )}
            <button
              type='button'
              className='px-2'
              onClick={() => {
                googleLogout();
                removeUser();
              }}
            >
              <AiOutlineLogout color='red' fontSize={21} />
            </button>
          </div>
        ) : (
          <GoogleLogin
            onSuccess={(response) => createOrGetUser(response, addUser)}
            onError={() => console.log('error')}
          />
        )}
      </div>
    </div>
  );
};

export { Navbar };
