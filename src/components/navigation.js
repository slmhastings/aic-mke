import React from 'react';
// import { Link } from 'gatsby';
import MilwaukeeCountyLogo from '../assets/MilwaukeeCountyLogo.png'

import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <a style={{
        
        width: "0vw",
        marginLeft: "auto",
        marginRight: "auto",
        paddingRight: "145px"
    }} 
    href="javascript:history.go(-1)" >
      {/* <span className={styles.logo} /> */}
      {/* <span className={styles.navigationItem}>Gatsby Starter Contentful</span> */}
      <img style={{
         width: "140px",
         height: "auto",
         position: "absolute",
         paddingTop: "5px",
         zIndex: "1", 
      }} src={MilwaukeeCountyLogo}/>
    </a>
  </nav>
)

export default Navigation
