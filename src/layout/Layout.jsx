import React from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      {/* Top Nav */}
      <div className="fixed top-0 left-0 w-full z-50">
        <NavBar />
      </div>

      {/* Main content wrapper (below navbar) */}
      <div className="flex flex-1  pt-16 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-1/5 bg-gray-100 pt-10 h-full overflow-y-auto drop-shadow-[0_3px_5px_rgba(0,0,0,0.5)]">
          <SideBar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
