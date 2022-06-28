import React from 'react';
import { Link } from 'gatsby';
import MilwaukeeCountyLogo from '../assets/MilwaukeeCountyLogo.png'

import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="localhost:3000" >
      {/* <span className={styles.logo} /> */}
      {/* <span className={styles.navigationItem}>Gatsby Starter Contentful</span> */}
      <img src={MilwaukeeCountyLogo}/>
    </Link>
  </nav>
)

export default Navigation
