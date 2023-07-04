import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import SearchForm from '../../partials/actions/SearchForm';
import UsersTilesCard from '../../partials/community/UsersTilesCard';
import PaginationNumeric from '../../components/PaginationNumeric';

import Image01 from '../../images/user-64-01.jpg';
import Image02 from '../../images/user-64-02.jpg';
import Image03 from '../../images/user-64-03.jpg';
import Image04 from '../../images/user-64-04.jpg';
import Image05 from '../../images/user-64-05.jpg';
import Image06 from '../../images/user-64-06.jpg';
import Image07 from '../../images/user-64-07.jpg';
import Image08 from '../../images/user-64-08.jpg';
import Image09 from '../../images/user-64-09.jpg';
import Image10 from '../../images/user-64-10.jpg';
import Image11 from '../../images/user-64-11.jpg';
import Image12 from '../../images/user-64-12.jpg';
import '../../partials/community/main.css';


function UsersTiles() {

  const items = [
    {
      id: 0,
      name: 'User1',
      image: Image01,
      link: '#',
      location: 'Fundinc',
      content: 'Aspiring Entrepreneur, Driven Generalist, Full Stack Web Developer, Debator, Always up for a chat.',

    },

    {
      id: 1,
      name: 'User2',
      image: Image02,
      link: '#',
      location: 'Baylink',
      content: 'Problem Solver, Innovator, Full Stack Developer, Brings Technical Expertise to every aspect of his work.',
    },
    {
      id: 2,
      name: 'User3',
      image: Image03,
      link: '#',
      location: 'Peryton Tech',
      content: 'Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer, Team Player and a PHP Lover.',
    },
    {
      id: 3,
      name: 'User4',
      image: Image04,
      link: '#',
      location: 'Formi',
      content: 'Brings together great minds in the entrepreneurial ecosystem, providing peers with the resources to succeed',
    },
    {
      id: 4,
      name: 'User5',
      image: Image05,
      link: '#',
      location: 'Fundinc',
      content: 'Machine Learning Engineer (MLOps), Full Stack Developer, passion for coding and problem solving',
    },
    {
      id: 5,
      name: 'User6',
      image: Image06,
      link: '#',
      location: 'BugBase',
      content: 'entrepreneur, full-stack developer & OSCP, OSWE and CEH-certified cybersecurity engineer.',
    },
    {
      id: 6,
      name: 'User7',
      image: Image07,
      link: '#',
      location: '225.in',
      content: 'Product Developer, Design Enthusiast, Athlete, Meetup Organizer, Problem Solver, Programming Enthusiast.',
    },
    {
      id: 7,
      name: 'User8',
      image: Image08,
      link: '#',
      location: 'Allmity',
      content: 'Flutter Developer, Design Enthusiast, ML/AI, Organizer, PHP Lover, Initiator, Team Leader, Manager',
    },
    {
      id: 8,
      name: 'User9',
      image: Image09,
      link: '#',
      location: 'Dept. of EEE',
      content: 'Control Systems Design, Communication, Electrical Engineering, Microsoft PowerPoint, and University Teaching',
    },
    {
      id: 9,
      name: 'User10',
      image: Image10,
      link: '#',
      location: 'Chief Innovation Officer',
      content: 'Fitness Enthusiast, Management, Asst. Director of Innovation, Lecturer, Team Player, Creative, Supportive',
    },
    {
      id: 10,
      name: 'User11',
      image: Image11,
      link: '#',
      location: 'Dept. of ICT',
      content: 'PhD in Adaptive E-learning, teaching, Cloud Computing, Software Engineering, Adaptive E-learning.',
    },
    {
      id: 11,
      name: 'User12',
      image: Image12,
      link: '#',
      location: 'Director: IIIT Bhagalpur',
      content: 'A passionate humanitarian and a tireless advocate for education and its role for the betterment of communities.',
    },
  ];

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gradient">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-indigo-500 font-bold">Avinya</h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Search form */}
                <SearchForm />
                {/* Add member button */}
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="hidden xs:block ml-2">Add Member</span>
                </button>
              </div>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
              {
                items.map(item => {
                  return (
                    <UsersTilesCard
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      image={item.image}
                      link={item.link}
                      location={item.location}
                      content={item.content}
                    />
                  )
                })
              }
            </div>
            {/* 
            Pagination
            <div className="mt-8">
              <PaginationNumeric />
            </div> */}

          </div>
        </main>

      </div>

    </div>
  );
}

export default UsersTiles;