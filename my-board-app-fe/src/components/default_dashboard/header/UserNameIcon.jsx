import React from 'react';

function UserNameIcon({ className, fontSize = 'text-lg' }) {
    const userName = localStorage.getItem('userName') || 'User';
    const iconLetter = userName.charAt(0).toUpperCase();

  return (
    <div className={`flex justify-center items-center mt-1 bg-blue-200 rounded-full ${className}`}>
            <span className={`${fontSize} font-semibold text-blue-900`}>{iconLetter}</span>
        </div>
  );
}

export default UserNameIcon;