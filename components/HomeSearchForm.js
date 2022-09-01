import styles from '../styles/HomeSearchForm.module.css';
import { useRouter } from 'next/router'


function HomeSearchForm() {
const router = useRouter();
const submitSearchForm = async (event) => {
  event.preventDefault();
  const type = event.target.type.value;
  const maxprice = event.target.maxprice.value;
  const bedrooms = event.target.bedrooms.value;
  const location = event.target.location.value;
  router.push(
    `/properties/?type=${type}&maxprice=${maxprice}&bedrooms=${bedrooms}&location=${location}`
  );
  
};
  return (
    <div>
      <form className={styles.search_form} onSubmit={submitSearchForm}>
        <p>Search from 1,245 properties for sale in Tenerife</p>
        <div className={styles.form_container}>
          <div className={styles.form_group}>
            <select name="type" className={styles.select_field}>
              <option value="">Property Type</option>
              <option value="houses">Houses</option>
              <option value="villas">Villas</option>
              <option value="luxury villas">Luxury Villas</option>
              <option value="apartments">Apartments</option>
              <option value="land">Land</option>
            </select>
          </div>
          <div className={styles.form_group}>
            <select name="maxprice" className={styles.select_field}>
              <option value="">Price</option>
              <option value="100000">100,000</option>
              <option value="200000">200,000</option>
              <option value="300000">300,000</option>
              <option value="400000">400,000</option>
              <option value="500000">500,000</option>
              <option value="600000">600,000</option>
              <option value="700000">700,000</option>
              <option value="800000">800,000</option>
              <option value="900000">900,000</option>
              <option value="1000000">1,000,000</option>
              <option value="1500000">1,500,000</option>
              <option value="2000000">2,000,000</option>
              <option value="2500000">2,500,000</option>
              <option value="3000000">3,000,000</option>
              <option value="4000000">4,000,000</option>
              <option value="5000000">5,000,000</option>
              <option value="6000000">6,000,000</option>
              <option value="7000000">7,000,000</option>
              <option value="10000000">10,000,000</option>
            </select>
          </div>
          <div className={styles.form_group}>
            <select name="bedrooms" className={styles.select_field}>
              <option value="">Bedrooms</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8+">8+</option>
            </select>
          </div>
          <div className={styles.form_group}>
            <select name="location" className={styles.select_field}>
              <option value="">Location</option>
              <option value="Tenerife South">Tenerife South</option>
              <option value="Costa Adeje">Costa Adeje</option>
              <option value="La Caleta">La Caleta</option>
              <option value="Las Americas">Las Americas</option>
              <option value="Los Cristianos">Los Cristianos</option>
              <option value="Los Gigantes">Los Gigantes</option>
              <option value="Puerto De La Cruz">Puerto De La Cruz</option>
              <option value="Amarilla Golf ">Amarilla Golf</option>
              <option value="Puerto Santiago">Puerto Santiago</option>
              <option value="Tenerife North">Tenerife North</option>
            </select>
          </div>
          <div className={styles.form_group}>
            <button type="submit" className={styles.search_btn}>
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default HomeSearchForm