import styles from "../styles/Properties.module.css";
import { BsCurrencyDollar } from "react-icons/bs";
import { BiBed } from "react-icons/bi";
import { BiBath } from "react-icons/bi";
import { IoIosResize } from "react-icons/io";
import { IoIosPin } from "react-icons/io";
import Link from "next/link";
export default function Properties({ propertiesForSale }) {
  return (
    <div>
      <div className={styles.card_container}>
        {propertiesForSale.map((property, index) => {
          return (
            <Link href={`/property/${property.id}`} passHref key={index}>
              <div className={styles.card}>
                <div
                  className={styles.card_image}
                  style={{
                    backgroundImage: `url(${property.featured_image})`,
                  }}
                ></div>
                <div className={styles.card_content}>
                  <h2 className={styles.card_title}>{property.title}</h2>
                  <div className={styles.property_meta}>
                    <div>
                      <BsCurrencyDollar />
                      {property.price}
                    </div>
                    <div>
                      <BiBed />
                      {property.bedrooms}
                    </div>
                    <div>
                      <BiBath />
                      {property.bathrooms}
                    </div>
                    <div>
                      <IoIosResize />
                      {property.property_size}
                    </div>
                  </div>
                  <div className={styles.location}>
                    <IoIosPin />
                    {property.address}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="center">
        <Link href="/properties" passHref>
          <button className="btn-global">View All</button>
        </Link>
      </div>
    </div>
  );
}
