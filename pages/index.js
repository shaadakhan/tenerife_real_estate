import HomeSearchForm from "../components/HomeSearchForm";
import Properties from "../components/Properties";
import PropertiesCity from "../components/PropertiesCity";
import styles from "../styles/Home.module.css";
import { baseUrl, fetchApi } from "../utils/fetchApi";

export default function Home({ propertiesForSale, propertiesCities }) {
  return (
    <div>
      <div className={styles.hero_section}>
        <h1>Find Your Dream Properties</h1>
        <HomeSearchForm />
      </div>
      <div className={styles.featured_property_container}>
        <div className={styles.container}>
          <h1 className="center">Our Featured Properties</h1>
          <p className="center">
            There are many variations of passages of Lorem Ipsum available but
            the this in majority have suffered alteration in some
          </p>
          <Properties propertiesForSale={propertiesForSale} />
        </div>
      </div>
      <div className={styles.container}>
        <h1 className="center">Find Properties In These Cities</h1>
        <p className="center">
          There are many variations of passages of Lorem Ipsum available but the
          this in majority have suffered alteration in some
        </p>
        <PropertiesCity propertiesCities={propertiesCities} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const propertiesForSale = await fetchApi(`${baseUrl}/list?per_page=6`);
  const propertiesCities = await fetchApi(`${baseUrl}/city`);

  return {
    props: {
      propertiesForSale: propertiesForSale,
      propertiesCities: propertiesCities,
    },
  };
}
