import React from "react";
import "../styles/profileImg.scss";
interface props {
  profile_img?: string;
}

const ProfileImg = ({ profile_img }: props) => {
  return (
    <div className="profile_img">
      <img src={require("../img/profile-icon.png")} />
    </div>
  );
};

export default ProfileImg;
