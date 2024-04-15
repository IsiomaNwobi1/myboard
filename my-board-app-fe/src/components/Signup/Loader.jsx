import React from 'react'

const Loader = () => {
  return (
    <>
      <div style={{ width: '100%', paddingTop: '4rem', display: 'flex', justifyContent: 'center' }}>
            <svg
                style={{
                    width: '200px',
                    height: 'auto',
                    display: 'block',
                    margin: 'auto',
                    strokeDasharray: '500',
                    strokeDashoffset: '500',
                    animation: 'draw-and-undo-logo 10s linear infinite, pulse 1.5s ease-in-out infinite',
                }}
                viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M33.6667 5.63334L14.65 24.6667L7.58334 17.6L9.93334 15.25L14.65 19.9667L31.3167 3.30001L33.6667 5.63334ZM17 30.3333C9.65001 30.3333 3.66668 24.35 3.66668 17C3.66668 9.65001 9.65001 3.66668 17 3.66668C19.6167 3.66668 22.0667 4.43334 24.1333 5.75001L26.55 3.33334C23.8333 1.45001 20.55 0.333344 17 0.333344C7.80001 0.333344 0.333344 7.80001 0.333344 17C0.333344 26.2 7.80001 33.6667 17 33.6667C19.8833 33.6667 22.6 32.9333 24.9667 31.6333L22.4667 29.1333C20.8 29.9 18.95 30.3333 17 30.3333ZM28.6667 22H23.6667V25.3333H28.6667V30.3333H32V25.3333H37V22H32V17H28.6667V22Z"
                    fill="none"
                    stroke="#fff"
                    strokeWidth=".6"
                />
            </svg>
            <style>
                {`
                    @keyframes draw-and-undo-logo {
                        0%, 100% {
                            stroke-dashoffset: 500;
                        }
                        50% {
                            stroke-dashoffset: 0;
                        }
                    }
                    @keyframes pulse {
                        0%, 100% {
                            transform: scale(1);
                        }
                        50% {
                            transform: scale(1.2);
                        }
                    }
                `}
            </style>
        </div>
    </>
  )
}

export default Loader
