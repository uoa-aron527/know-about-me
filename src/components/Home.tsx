import React from 'react';

interface HomeProps{}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className='bg-gray-800 h-screen w-full'>
      <div className='max-w-5xl mx-auto flex flex-col justify-center h-full'>
        <p className='text-red-500 text-center text-2xl'> I am Aryan Sharma Ronee </p>
      </div>
    </div>
  )
}

export default Home;