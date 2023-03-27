// import NavigationHeader from "../Header";
import React from 'react';
import NavigationHeader from './Header';
import SideBar from './SideBar';

export default function Main(props : any) {
  return (
    <>
      <div className="max-w-screen-2xl">
        <NavigationHeader />
        <SideBar>
          <div className="mt-20 min-h-screen mx-auto ">{props.children}</div>
        </SideBar>
      </div>
    </>
  );
}
