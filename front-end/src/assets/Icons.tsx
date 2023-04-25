type brandProps = {
  className?: string;
};

export const Brand = ({ className }: brandProps) => {
  return (
    <svg
      fill="#000000"
      viewBox="-2.4 -2.4 28.80 28.80"
      id="dna-2"
      data-name="Flat Color"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0">
        <path
          transform="translate(-2.4, -2.4), scale(1.7999999999999998)"
          fill="#2ca9bc"
          d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z"
          strokeWidth="0"
        ></path>
      </g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
        className="fill-cyan-500"
          id="secondary"
          d="M20,17.91a1,1,0,0,1-1-1V7.09a1,1,0,0,1,2,0v9.82A1,1,0,0,1,20,17.91Zm-16,0a1,1,0,0,1-1-1V7.09a1,1,0,0,1,2,0v9.82A1,1,0,0,1,4,17.91Zm12-1.62a1,1,0,0,1-1-1V8.71a1,1,0,1,1,2,0v6.58A1,1,0,0,1,16,16.29Zm-8,0a1,1,0,0,1-1-1V8.71a1,1,0,1,1,2,0v6.58A1,1,0,0,1,8,16.29Z"
        ></path>
        <path
        className="fill-cyan-400"
          id="primary"
          d="M21,16h-.17a9.32,9.32,0,0,1-7.61-4,9.33,9.33,0,0,1,7.61-4H21a1,1,0,0,0,0-2h-.17A11.36,11.36,0,0,0,12,10.26,11.36,11.36,0,0,0,3.17,6H3A1,1,0,0,0,3,8h.17a9.36,9.36,0,0,1,7.62,4,9.35,9.35,0,0,1-7.62,4H3a1,1,0,0,0,0,2h.17A11.38,11.38,0,0,0,12,13.74,11.29,11.29,0,0,0,20.83,18H21a1,1,0,0,0,0-2Z"
        ></path>
      </g>
    </svg>
  );
};

export default Brand;
