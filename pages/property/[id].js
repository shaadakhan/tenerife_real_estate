import Image from "next/image";
import ImageSlider from "../../components/ImageSlider";
import { baseUrl, fetchApi } from "../../utils/fetchApi";
import { BsCurrencyDollar } from "react-icons/bs";
import { BiBed, BiUserCircle, BiBath } from "react-icons/bi";
import { IoIosResize, IoIosPin } from "react-icons/io";
import { GiHomeGarage } from "react-icons/gi";
import styles from "../../styles/Properties.module.css";
import MapContainer from "../../components/MapContainer";


function PropertySinglePage({
  property: {
    id,
    title,
    content,
    date,
    author,
    price,
    property_size,
    garage,
    bedrooms,
    bathrooms,
    property_id,
    location,
    address,
    year_built,
  },
  photos,
}) {
  return (
    <div className="container">
      <ImageSlider photos={photos} />

      <h1>{title}</h1>
      <div className={styles.property_meta}>
        <div className={styles.icon_container}>
          <BsCurrencyDollar />
          {price}
        </div>
        <div className={styles.icon_container}>
          <BiBed />
          {bedrooms}
        </div>
        <div className={styles.icon_container}>
          <BiBath />
          {bathrooms}
        </div>
        <div className={styles.icon_container}>
          <IoIosResize />
          {property_size}
        </div>
        <div className={styles.icon_container}>
          <GiHomeGarage />
          {garage !== "" ? garage : "N/A"}
        </div>
      </div>
      <div className={styles.location}>
        <IoIosPin />
        {address}
      </div>
      <div className="author">
        <BiUserCircle />
        {author}
      </div>
      <div className="divider"></div>

      <p>
        {content
          .toString()
          .replace(
            ', <a href="https://tenerifepropertyforsalenow.co.uk/free-guide-how-to-buy-property-in-tenerife?utm_campaign=free-guide-post" target="_blank" rel="noopener">download our FREE guide - How To Buy Property In Tenerife</a>',
            "."
          )}
      </p>
      <MapContainer location={location}/>
    </div>
  );
}

export default PropertySinglePage;

export async function getServerSideProps({ query }) {
  const id = query.id || "";
  const data = await fetchApi(`${baseUrl}/list/single?id=${id}`);
  const images = await fetchApi(`${baseUrl}/img/?post_id=${id}`);

  return {
    props: {
      property: data,
      photos: images,
    },
  };
}
