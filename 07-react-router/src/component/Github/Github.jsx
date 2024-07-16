import React, { useEffect, useState } from 'react';
import img1 from '../../assets/img1.png'
import { useLoaderData } from 'react-router-dom';


function Github() {
    const profile = useLoaderData();

//   const [profile, setProfile] = useState({
//     name: '',
//     login: '',
//     followers: 0,
//     avatar_url: '',
//     html_url: ''
//   });

//   useEffect(() => {
//     const reqURL = "https://api.github.com/users/shanirajkorake";
//     const fetchData = async () => {
//       try {
//         const response = await fetch(reqURL);
//         const data = await response.json();
//         setProfile(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

  return (
    <div className="bg-gray-800 text-white flex justify-center items-center min-h-screen">
      <div className="card mx-auto w-1/3 bg-gray-700  p-8 text-center">
        <div>
          <img className="h-16 mx-auto" src={img1} alt="GitHub Logo" />
        </div>
        <div id="imgCon">
          <img
            id="pfimg"
            className="mx-auto rounded-full shadow-lg w-80"
            src={profile.avatar_url || 'Webp.webp'}
            alt="Profile"
          />
        </div>
        <div id="info" className="py-6">
          <span id="name" className="block text-3xl">{profile.name}</span>
          <span id="login" className="block mt-1 text-xl">@{profile.login}</span>
          <span id="follos" className="block mt-2">{profile.followers} Followers</span>
        </div>
      </div>
      <a
        href={profile.html_url}
        id="link"
        className="card bg-gray-600 mx-auto w-1/3 rounded-xl py-4 px-8 text-center"
      >
        Visit profile
      </a>
    </div>
  );
}
export default Github;
const reqURL = "https://api.github.com/users/shanirajkorake";
export const fetchData = async (data) => {
  try {
    const response = await fetch(reqURL);
    const data = await response.json();
    return data
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

