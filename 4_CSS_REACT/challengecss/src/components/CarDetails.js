import styles from './CarDetails.module.css'

const CarDetails = ({brand, km, color, newCar}) => {
  return (
      <div className={styles.my_car}>
          <h2>{brand}</h2>
            <div>
              <li>Km: {km}</li>
              <li>Cor: {color}</li>
              <li>{newCar && <p>O carro é novo!</p>}</li>
            </div>
      </div>
  )
}

export default CarDetails