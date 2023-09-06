import React from "react";
import Sidemenu from "./side_menu";
import 'styles/management.css'



type Props = {
  children: React.ReactNode;
};

function ManageLayout({ children }: Props) {

  return (
    <div >
      <div className="flex-container" >
        <Sidemenu />
        <div className="main_total_area">{children}</div>

      </div>
    </div>
  );
}

export default ManageLayout;