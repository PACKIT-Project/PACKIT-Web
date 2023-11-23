import React from 'react';

const UnCheckedBox = () => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.374878" y="0.642944" width="20" height="20" rx="4" fill="#D0D9E3" />
      <path
        d="M8.70817 14.6991L5.26025 11.2512L6.59132 9.92013L8.70817 12.037L14.1584 6.58679L15.4894 7.91785L8.70817 14.6991Z"
        fill="white"
      />
    </svg>
  );
};

const CheckedBox = () => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.598999" y="0.642944" width="20" height="20" rx="4" fill="#0EA8FF" />
      <path
        d="M8.93229 14.6991L5.48438 11.2512L6.81544 9.92013L8.93229 12.037L14.3825 6.58679L15.7135 7.91785L8.93229 14.6991Z"
        fill="white"
      />
    </svg>
  );
};

export { UnCheckedBox, CheckedBox };
