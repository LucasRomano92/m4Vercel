import React from 'react'
import styles from './loader.module.css';

const Loader = ({minHeight = 'auto'}) => {
  return (
    <div className='flex items-center justify-center px-2' style={{minHeight}}>
     <div className={styles.loader}></div>
    </div>

  )
}

export default Loader