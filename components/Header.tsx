import Link from 'next/link';

function Header() {
  return (
    <header className='mx-auto flex max-w-7xl justify-between p-5'>
      {/* 1st Div */}
      <div className='flex items-center space-x-5'>
        {/* Medium Logo */}
        <Link href='/'>
          <img
            className='w-44 cursor-pointer object-contain'
            src='/medium-logo.png'
            alt='Medium Logo'
          />
        </Link>
        <div className='hidden items-center space-x-5 md:inline-flex'>
          <h3 className='cursor-pointer'>About</h3>
          <h3 className='cursor-pointer'>Contact</h3>
          <h3 className='cursor-pointer rounded-full bg-green-600 px-4 py-1 text-white'>
            Follow
          </h3>
        </div>
      </div>

      {/* 2nd Div */}
      <div className='flex cursor-pointer items-center space-x-5 text-green-600'>
        <h3>Sign In</h3>
        <h3 className='cursor-pointer rounded-full border border-green-600 px-4 py-1 hover:bg-green-600 hover:text-white'>
          Get Started
        </h3>
      </div>
    </header>
  );
}

export default Header;
