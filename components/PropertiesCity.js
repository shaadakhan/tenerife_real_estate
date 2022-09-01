import styles from "../styles/PropertiesCity.module.css";
import Link from "next/link";
export default function PropertiesCity({ propertiesCities }) {
  return (
    <>
      <div className={styles.city_card_container}>
        {propertiesCities.map((city) => {
          return city.count >= 5 ? (
            <Link
              href={`/properties?location=${city.term_slug}`}
              passHref
              className={styles.city_card}
              key={city.index}
            >
              <div className={styles.city_card_content}>
                <div className={styles.city_count}>{city.count}</div>
                <div className={styles.city_name}>
                  {city.term_name.replace("-", "")}
                </div>
              </div>
            </Link>
          ) : null;
        })}
      </div>
      <div className="center">
        <Link href="/properties" passHref>
          <button className="btn-global">View All</button>
        </Link>
      </div>
    </>
  );
}
