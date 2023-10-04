import React from 'react';
import styles from '../styles.module.scss';
import { useAppSelector } from '../../../redux/store';
import userPhoto from '../../../public/imgs/icons/userPhoto.png';
import Image from 'next/image';

const UserInfo_Logout = () => {
  const { user } = useAppSelector((state) => state.user);

  return (
    <div className={styles.block2wrapper}>
      <div>
        <Image src={userPhoto} alt="userPhoto" />
      </div>
      <div>
        <h1>
          {user.first_name} {user.last_name}
        </h1>
        <h2>{user.email}</h2>
        <div className={styles.logOut}>
          <a>
            <svg
              width="91"
              height="28"
              viewBox="0 0 91 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.818 20V10.55H37.994C39.062 10.55 39.902 10.754 40.514 11.162C41.138 11.57 41.45 12.17 41.45 12.962C41.45 13.73 41.156 14.324 40.568 14.744C39.98 15.152 39.206 15.356 38.246 15.356L38.498 14.978C39.626 14.978 40.454 15.188 40.982 15.608C41.51 16.028 41.774 16.634 41.774 17.426C41.774 18.242 41.474 18.878 40.874 19.334C40.286 19.778 39.368 20 38.12 20H33.818ZM35.06 18.992H38.066C38.87 18.992 39.476 18.866 39.884 18.614C40.304 18.35 40.514 17.93 40.514 17.354C40.514 16.778 40.328 16.358 39.956 16.094C39.584 15.83 38.996 15.698 38.192 15.698H35.06V18.992ZM35.06 14.744H37.904C38.636 14.744 39.194 14.606 39.578 14.33C39.974 14.054 40.172 13.652 40.172 13.124C40.172 12.596 39.974 12.2 39.578 11.936C39.194 11.672 38.636 11.54 37.904 11.54H35.06V14.744ZM53.9852 20V10.55H55.2632V20H53.9852ZM48.7472 13.88C49.9352 13.892 50.8412 14.156 51.4652 14.672C52.0892 15.188 52.4012 15.932 52.4012 16.904C52.4012 17.912 52.0652 18.686 51.3932 19.226C50.7212 19.766 49.7612 20.03 48.5132 20.018L44.7692 20V10.55H46.0472V13.844L48.7472 13.88ZM48.4232 19.046C49.3112 19.058 49.9772 18.884 50.4212 18.524C50.8772 18.152 51.1052 17.612 51.1052 16.904C51.1052 16.196 50.8832 15.68 50.4392 15.356C49.9952 15.02 49.3232 14.846 48.4232 14.834L46.0472 14.798V19.01L48.4232 19.046ZM58.902 20V10.55H60.18V18.056L66.498 10.55H67.632V20H66.354V12.476L60.054 20H58.902ZM63.186 9.182C62.394 9.182 61.752 8.984 61.26 8.588C60.78 8.18 60.528 7.598 60.504 6.842H61.422C61.434 7.322 61.602 7.7 61.926 7.976C62.25 8.252 62.67 8.39 63.186 8.39C63.702 8.39 64.122 8.252 64.446 7.976C64.782 7.7 64.956 7.322 64.968 6.842H65.886C65.874 7.598 65.622 8.18 65.13 8.588C64.638 8.984 63.99 9.182 63.186 9.182ZM73.0946 20V11.324L73.4186 11.666H69.5126V10.55H77.9546V11.666H74.0486L74.3726 11.324V20H73.0946ZM79.8024 20V10.55H81.0804V18.056L87.3984 10.55H88.5324V20H87.2544V12.476L80.9544 20H79.8024Z"
                fill="black"
              />
              <path
                d="M5 23C4.45 23 3.979 22.804 3.587 22.412C3.195 22.02 2.99934 21.5493 3 21V17H5V21H19V7H5V11H3V7C3 6.45 3.196 5.979 3.588 5.587C3.98 5.195 4.45067 4.99934 5 5H19C19.55 5 20.021 5.196 20.413 5.588C20.805 5.98 21.0007 6.45067 21 7V21C21 21.55 20.804 22.021 20.412 22.413C20.02 22.805 19.5493 23.0007 19 23H5ZM10.5 19L9.1 17.55L11.65 15H3V13H11.65L9.1 10.45L10.5 9L15.5 14L10.5 19Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserInfo_Logout;
