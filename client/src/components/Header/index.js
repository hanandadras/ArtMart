import React from 'react';
const Header = () => {
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <h1>ArtMart</h1>
        <ul>
          <li>
            <a href="/">Home </a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/signup">Signup</a>
          </li>



        </ul>
      </div>
    </header>
  );
};

export default Header;
