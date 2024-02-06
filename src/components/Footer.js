import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(props) {
  return (
    <footer className={`bg-${props.mode} text-center pt-3 pb-1 mt-5`} style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <p>
        &copy; 2024 TextUtils. All rights reserved. Developed by{' '}
        <Link to={{ pathname: 'https://github.com/iRifshaAshraf' }} style={{ color: props.mode === 'dark' ? 'white' : 'black', textDecoration: 'none', fontWeight:'bold'}}>
          Rifsha Ashraf.
        </Link>
      </p>
    </footer>
  );
}
