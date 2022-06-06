function Banner() {
  return (
    <div className='flex items-center justify-between border-y border-black bg-yellow-400 py-10 lg:py-0'>
      {/* 1st Div */}
      <div className='space-y-5 px-10'>
        <h1 className='max-w-xl font-serif text-6xl'>
          <span className='underline decoration-black decoration-4'>
            Medium
          </span>{' '}
          is a place to write, read and connect
        </h1>
        <h2>
          It's easy and free to post your thinking on any topic and connect with
          millions of readers.
        </h2>
      </div>
      {/* 2nd Div */}
      <div>
        <img
          className='hidden h-32 md:inline-flex lg:h-full'
          src='/medium-m-logo.png'
          alt='Medium Logo'
        />
      </div>
    </div>
  );
}

export default Banner;
