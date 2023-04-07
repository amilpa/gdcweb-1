import React, { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

const Events = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = scrollPos > 1000 ? ' bg-black' : 'bg-violet-500';
  const [events, setEvents] = useState([
    {
      date: 'March 6, 2023',
      title: 'Introduction to GDC',
      location: 'SDPK Hall',
      description: 'Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua.',
    },
    {
      date: 'March 6, 2023',
      title: 'Introduction to GDC',
      location: 'SDPK Hall',
      description: 'Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua.',
    },
    {
      date: 'March 6, 2023',
      title: 'Introduction to GDC',
      location: 'SDPK Hall',
      description: 'Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua.',
    },
    {
      date: 'March 6, 2023',
      title: 'Introduction to GDC',
      location: 'SDPK Hall',
      description: 'Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua.',
    },
  ]);

  const [popup, setPopup] = useState(false);
  const [popupEvent, setPopupEvent] = useState({});

  const handleClick = (index) => {
    setPopup(true);
    console.log(popup);
    setPopupEvent(events[index]);
    console.log(popupEvent);
  };

  return (
    <>
      {popup && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: '100%' }}
          transition={{
            ease: 'linear',
            duration: 0.5,
            x: { duration: 0.5 },
          }}
          className="fixed top-0 bottom-0 h-screen w-screen z-10 bg-black opacity-70"
        ></motion.div>
      )}
      {popup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'linear',
            duration: 1,
            delay:1,
            x: { duration: 1 },
          }}
          className="text-white transition ease-in-out delay-150 bg-black min-h-[50%] min-w-[50%] fixed z-10 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] p-10 border-2 border-[#FFF3D4] flex flex-col justify-center items-center gap-10"
        >
          <p className="text-3xl">{popupEvent.title}</p>
          <p>{popupEvent.date}</p>
          <p>{popupEvent.location}</p>
          <p>{popupEvent.description}</p>
          <button
            className="absolute top-0 right-0 m-4"
            onClick={() => {
              setPopup(false);
            }}
          >
            Close
          </button>
        </motion.div>
      )}
      <div className={`text-white  py-5 ${navbarClasses} `}>
        <div className="w-full flex flex-row justify-evenly items-center">
          <h2 className="text-3xl md:text-7xl text-[#FFF3D4]">Events</h2>
          <div className="border border-[#FFF3D4] w-9/12 h-px"></div>
        </div>

        <div className="p-10 flex flex-col md:flex-row justify-center items-center gap-10">
          {events.map((event, index) => {
            return (
              <div
                className={
                  'h-96 w-64 my-10  md:my-20 flex flex-col justify-between items-center' +
                  (index % 2 == 0 ? ' md:-translate-y-10' : ' md:translate-y-10')
                }
                onClick={() => {
                  handleClick(index);
                }}
                key={index}
              >
                <div className="absolute -translate-y-[50%] py-2 px-8 flex justify-center items-center outline outline-[#FFF3D4] bg-black">
                  <p>{event.date}</p>
                </div>
                <div className="w-full h-full flex flex-col justify-evenly items-center outline outline-[#FFF3D4]">
                  <h3 className="text-2xl uppercase text-center">{event.title}</h3>
                  <p className="text-center">{event.location}</p>
                </div>
                <div className="w-full h-3/12 flex justify-center items-center outline outline-[#FFF3D4]">
                  <p className="m-4 text-center">{event.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Events;
