import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" />
      </div>
      <div className={style.descriptionBlock}>Description Text</div>
    </div>
  );
};

export default ProfileInfo;
