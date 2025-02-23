import React from 'react';
import './UserContent.css';

interface UserContentProps {
  children: React.ReactNode;
}

const UserContent: React.FC<UserContentProps> = ({ children }) => {
  return (
    <div className='user-content'>
      {children}
      
    </div>
  );
};

export default UserContent;