import React, { useState, useEffect } from 'react'

function Main() {

  const url = 'https://api.adviceslip.com/advice';
  const [data, setData] = useState({ slip: { id: '', advice: '' } });

  const fetchInfo = async () => {
    try {
      const res = await fetch(url);
      const d = await res.json();
      setData(d);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    fetchInfo();
  };

  return (
    <>
      <div className="flex justify-center items-center bg-blue-900 h-screen">
        <div className='w-[350px] h-[300px] md:w-[520px] md:h-[300px] bg-blue-600 flex flex-col p-12 rounded-xl items-center flex-nowrap'>
          <h1 className='text-center text-primary-100 font-semibold text-md tracking-wider ' >
            ADVICE # {data.slip.id}
          </h1><p className='text-primary font-medium text-center text-2xl my-3 flex-initial h-[300px]'>
            {data.slip.advice}
          </p>
          <img src="./images/pattern-divider-desktop.svg" alt="" className='my-5 flex-initial' />
          <button className="bg-primary-100 p-4 rounded-full w-14 h-16  hover:shadow-primary-100 hover:shadow-lg " onClick={handleClick}>
            <img src="./images/icon-dice.svg" alt="" className='w-6 h-6 flex-initial' />
          </button>

        </div>

      </div>
    </>
  )
}

export default Main