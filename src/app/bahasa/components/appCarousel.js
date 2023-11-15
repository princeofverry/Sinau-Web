'use client'
import React from 'react'
import { a } from '@react-spring/web'
import styles from './styles.module.css'
import { Slider } from './carousel'
import { items } from './items'

export default function AppCarousel() {
  return (
    <div className={`flex fill center ${styles.container}`}>
      <div className={styles.main}>
        <Slider items={items} width={700} visible={3}>
          {({ css }, i) => (
            <div className={styles.content}>
              <div className={styles.marker}>{String(i).padStart(2, '0')}</div>
              <a.div className={styles.image} style={{ backgroundImage: css }} />
            </div>
          )}
        </Slider>
      </div>
    </div>
  )
}
