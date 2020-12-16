import React, { FC, useMemo } from 'react';
import { useTheme } from 'styled-components';

const Logo: FC = () => {
  const {
    theme,
    color: { blue, white },
  } = useTheme();

  const logoColor = useMemo(() => (theme === 'dark' ? white : blue), [
    theme,
    blue,
    white,
  ]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="127.8"
      height="28"
      viewBox="0 0 127.8 28"
    >
      <g transform="translate(-118 -12)">
        <path
          d="M.62,13.9a5.244,5.244,0,0,0,5.54,5.34,6.06,6.06,0,0,0,3.62-1.18A.782.782,0,0,0,10,16.94l-.2-.38c-.26-.48-.64-.54-1.14-.26a3.989,3.989,0,0,1-2.28.78,3.093,3.093,0,0,1-3.18-3.2,3.031,3.031,0,0,1,3.1-3.16,3.566,3.566,0,0,1,1.98.62c.48.24.82.24,1.12-.22l.26-.4A.751.751,0,0,0,9.5,9.58,5.7,5.7,0,0,0,6.16,8.56,5.278,5.278,0,0,0,.62,13.9Zm11.24,4.26a.751.751,0,0,0,.84.84h.86a.742.742,0,0,0,.84-.84v-3.9c0-1.94,1.16-3.38,2.94-3.38,1.28,0,1.6.84,1.6,2.08v5.2a.742.742,0,0,0,.84.84h.86a.751.751,0,0,0,.84-.84V12.44c0-2.7-1.3-3.88-3.56-3.88a4.015,4.015,0,0,0-3.54,2.06h-.04a5.788,5.788,0,0,0,.06-.86V5.64a.751.751,0,0,0-.84-.84H12.7a.759.759,0,0,0-.84.84Zm11.2-1.98a3.129,3.129,0,0,0,3.38,3.06,3.714,3.714,0,0,0,3.2-1.92h.04a2,2,0,0,0-.04.44v.4a.736.736,0,0,0,.82.84h.68a.742.742,0,0,0,.84-.84V12.62c0-2.58-1.58-4.06-4.22-4.06a7.239,7.239,0,0,0-3.34.84.745.745,0,0,0-.32,1.12l.2.38a.752.752,0,0,0,1.12.34,4.607,4.607,0,0,1,2.12-.58,1.667,1.667,0,0,1,1.9,1.8v.24h-.42C26.74,12.7,23.06,13.2,23.06,16.18Zm2.52-.22c0-1.52,2.18-1.72,3.46-1.72h.42v.38a2.592,2.592,0,0,1-2.34,2.68A1.385,1.385,0,0,1,25.58,15.96Zm8.76,2.2a.736.736,0,0,0,.82.84h.88a.736.736,0,0,0,.82-.84V14.42c0-1.7.84-3.54,2.64-3.54,1.2,0,1.36.94,1.36,2.04v5.24a.751.751,0,0,0,.84.84h.88a.736.736,0,0,0,.82-.84V14.42c0-1.78.88-3.54,2.6-3.54,1.18,0,1.4.88,1.4,2.04v5.24a.742.742,0,0,0,.84.84h.86a.751.751,0,0,0,.84-.84V12.44c0-2.68-1.22-3.88-3.34-3.88a4.043,4.043,0,0,0-3.48,2.1h-.04a2.83,2.83,0,0,0-2.98-2.1,3.923,3.923,0,0,0-3.34,2.16h-.04a3.261,3.261,0,0,0,.04-.46V9.64a.745.745,0,0,0-.82-.84h-.78a.745.745,0,0,0-.82.84Zm17.18-1.98a3.129,3.129,0,0,0,3.38,3.06,3.714,3.714,0,0,0,3.2-1.92h.04a2,2,0,0,0-.04.44v.4a.736.736,0,0,0,.82.84h.68a.742.742,0,0,0,.84-.84V12.62c0-2.58-1.58-4.06-4.22-4.06a7.239,7.239,0,0,0-3.34.84.745.745,0,0,0-.32,1.12l.2.38a.752.752,0,0,0,1.12.34A4.607,4.607,0,0,1,56,10.66a1.667,1.667,0,0,1,1.9,1.8v.24h-.42C55.2,12.7,51.52,13.2,51.52,16.18Zm2.52-.22c0-1.52,2.18-1.72,3.46-1.72h.42v.38a2.592,2.592,0,0,1-2.34,2.68A1.385,1.385,0,0,1,54.04,15.96Zm8.76,2.2a.751.751,0,0,0,.84.84h.86a.742.742,0,0,0,.84-.84v-3.9c0-1.94,1.16-3.38,2.94-3.38,1.28,0,1.6.84,1.6,2.08v5.2a.742.742,0,0,0,.84.84h.86a.751.751,0,0,0,.84-.84V12.44c0-2.7-1.3-3.88-3.56-3.88a4.015,4.015,0,0,0-3.54,2.06h-.04a5.788,5.788,0,0,0,.06-.86V5.64a.751.751,0,0,0-.84-.84h-.86a.759.759,0,0,0-.84.84Zm11.84-2.8c0,2.78,1.36,3.88,3.54,3.88a3.958,3.958,0,0,0,3.54-2.14h.04a2.908,2.908,0,0,0-.04.46v.6a.736.736,0,0,0,.82.84h.78a.751.751,0,0,0,.84-.84V9.64a.759.759,0,0,0-.84-.84h-.86a.751.751,0,0,0-.84.84v3.84c0,1.82-1.02,3.44-2.86,3.44-1.26,0-1.58-.84-1.58-2.08V9.64a.751.751,0,0,0-.84-.84h-.86a.759.759,0,0,0-.84.84Zm12.02,2.8a.751.751,0,0,0,.84.84h.68c.56,0,.84-.28.84-.72v-.32a2,2,0,0,0-.04-.44h.04a3.418,3.418,0,0,0,3.12,1.72c2.64,0,4.66-2.1,4.66-5.36,0-3.14-1.8-5.32-4.5-5.32a3.579,3.579,0,0,0-3.12,1.64h-.04a5.788,5.788,0,0,0,.06-.86V5.64a.751.751,0,0,0-.84-.84H87.5a.759.759,0,0,0-.84.84Zm2.46-4.26c0-2.18,1.26-3.16,2.58-3.16,1.48,0,2.52,1.28,2.52,3.2,0,2.02-1.16,3.16-2.58,3.16C89.98,17.1,89.12,15.56,89.12,13.9Z"
          transform="translate(149 14)"
          fill={logoColor}
        />
        <g transform="translate(118 12)">
          <path
            d="M12.162,23.236A8.65,8.65,0,1,1,20.8,14.588,8.644,8.644,0,0,1,12.162,23.236Zm7.3-20.8V1.22A1.219,1.219,0,0,0,18.242,0H6.081A1.216,1.216,0,0,0,4.866,1.22v1.22A4.864,4.864,0,0,0,0,7.3v14.6a4.864,4.864,0,0,0,4.861,4.87h.612a.612.612,0,0,0,0,1.224H18.846a.612.612,0,0,0,0-1.224h.612a4.864,4.864,0,0,0,4.861-4.87V7.3A4.867,4.867,0,0,0,19.458,2.435Z"
            fill={logoColor}
            fillRule="evenodd"
          />
          <path
            d="M11.653,19.712A3.231,3.231,0,0,1,8.426,16.48c0-1.683,1.359-3.325,2.312-4.27.515-.51.916-.911.916-.911s.4.4.916.911c.953.945,2.312,2.586,2.312,4.27A3.231,3.231,0,0,1,11.653,19.712Zm0-12.316s-.624.629-1.43,1.426C8.729,10.3,6.607,12.865,6.607,15.5a5.046,5.046,0,1,0,10.092,0c0-2.637-2.122-5.2-3.616-6.679C12.278,8.025,11.653,7.4,11.653,7.4Z"
            transform="translate(0.508 0.633)"
            fill={logoColor}
            fillRule="evenodd"
          />
        </g>
      </g>
    </svg>
  );
};

export default Logo;