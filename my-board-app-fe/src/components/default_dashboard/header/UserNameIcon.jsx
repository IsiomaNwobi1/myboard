import React from 'react';

function UserNameIcon() {
    const userName = localStorage.getItem('userName') || 'User';
    const iconLetter = userName.charAt(0).toUpperCase();

  return (
    <div className="flex justify-center items-center mt-1 w-8 h-8 bg-blue-200 rounded-full">
      <span className="text-lg font-semibold text-blue-900">{iconLetter}</span>
    </div>
  );
}

export default UserNameIcon;
