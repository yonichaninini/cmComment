import * as React from 'react';
import './profileImg.scss';
export interface props {
  profile_img?: string;
}

const ProfileImg = () => {
  return (
    <div className="profile_img">
      <img src={require('../../img/profile-icon.png')} />
    </div>
  );
};

export default ProfileImg;
