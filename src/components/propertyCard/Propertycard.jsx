import React from 'react'
import styles from './styles.module.css'
import propertyimage from './property.png'
import Button from '../../Atoms/Button'


export const Propertycard = () => {
  return (
    <div className={styles.maindiv}>
     
    <div className={styles.imagediv}>
    <img
      src={propertyimage} 
      alt="Property Image"
      style={{
        width: '100%',
       borderRadius: '10px'
       
      }}
      />
    </div>
    <div className={styles.description}>
     <div className={styles.heading}>
     Seaside Serenity Villa
     </div>
     <div className={styles.subheading}>
     A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.
     </div>

    </div>

    <div className={styles.details}>
     <div className={styles.capsule}>
      4-Bedrooms
     </div>
     <div className={styles.capsule}>
      3-Bathrooms
     </div>
     <div className={styles.capsule}>
     Villas
     </div>
    </div>

    <div className={styles.pricediv}>
      <div className={styles.pricesection}>
      <div>
        Price
      </div>
      <div >
       $550,000
      </div>
      </div>

      <div className={styles.propertyButton}>
            <Button style={{
              backgroundColor: 'rgba(112, 101, 240, 1)',
              color: 'white',
              padding: '1em',
              borderRadius: '8px',
              border: '0px solid',

            }}>
              View Property
            </Button>
      </div>
    </div>

    </div>
  )
}
