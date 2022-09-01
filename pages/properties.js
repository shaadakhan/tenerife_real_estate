import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import Image from "next/image";
import { BsFilter } from "react-icons/bs";
import HomeSearchForm from "../components/HomeSearchForm";
import NoResults from "../public/noresults.jpg";
import styles from "../styles/Properties.module.css";
import LoadingImg from "../public/loading.svg";
import {
  BsCurrencyDollar,
  BsFillGridFill,
  BsFillGrid3X3GapFill,
} from "react-icons/bs";
import { BiBed } from "react-icons/bi";
import { BiBath } from "react-icons/bi";
import { IoIosResize } from "react-icons/io";
import { IoIosPin } from "react-icons/io";
import Link from "next/link";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import Filter from "../components/Filter";
import ReactPaginate from "react-paginate";

function Properties({
  filteredProperties,
  totalCount,
  currentPage,
  perPage,
  pageCount,
}) {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false); //State for the loading indicator
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  /*
    			Posts fetching happens after page navigation, 
    			so we need to switch Loading state on Router events.
    		*/
 
  useEffect(() => {
    //After the component is mounted set router event handlers
    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", stopLoading);

    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", stopLoading);
    };
  }, []);
  

  //When new page selected in paggination, we take current path and query parrams.
  // Then add or modify page parram and then navigate to the new route.
  const pagginationHandler = (page) => {
    const currentPath = router.pathname;
    const currentQuery = router.query;
    currentQuery.page = page.selected + 1;

    router.push({
      pathname: currentPath,
      query: currentQuery,
    });
  };
  const [isList, setList] = useState(false);

  return (
    <div>
      <div className="container">
        <Filter />
      </div>
      <div className="container">
        <div className="view_changer">
          <p className="results_found">
            {filteredProperties.count.total_properties !== 0
              ? `${filteredProperties.count.total_properties} Result(s) Found.`
              : `0 result(s) found.`}
          </p>
          <div>
            <button
              className={isList ? `` : `active`}
              onClick={() => setList(false)}
            >
              <BsFillGrid3X3GapFill />
            </button>
            <button
              className={isList ? `active` : ``}
              onClick={() => setList(true)}
            >
              <BsFillGridFill />
            </button>
          </div>
        </div>
        <div
          className={
            isLoading
              ? `loading`
              : isList
              ? `card_list_container`
              : `card_grid_container`
          }
        >
          {isLoading ? (
            <div className="loading">
              <Image src={LoadingImg} alt="loading" className="loading_image" />
            </div>
          ) : totalCount > 0 ? (
            filteredProperties.properties.map((property, index) => {
              return (
                <Link href={`/property/${property.id}`} passHref key={index}>
                  <div className={isList ? `list_card` : `grid_card`}>
                    <div
                      className={isList ? `list_card_image` : `grid_card_image`}
                      style={{
                        backgroundImage: `url(${property.featured_image})`,
                      }}
                    ></div>
                    <div
                      className={
                        isList ? `list_card_content` : `grid_card_content`
                      }
                    >
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
            })
          ) : null}
        </div>

        <div className="pagination_container">
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            activeClassName={"active"}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            initialPage={currentPage - 1}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={pagginationHandler}
          />
        </div>

        {totalCount === 0 ? (
          <div className="no_results">
            <Image src={NoResults} alt="no results" />
            <h2 className={styles.card_title}>No Properties Found</h2>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Properties;

export async function getServerSideProps({ query }) {
  const perPage = 6;
  const location = query.location || "";
  const type = query.type || "";
  const minPrice = query.minprice || "";
  const maxPrice = query.maxprice || "";
  const bedrooms = query.bedrooms || "";
  const bathrooms = query.bathrooms || "";

  const propertiesFiltered = await fetchApi(
    `${baseUrl}/list-filter?per_page=${perPage}&min-price=${minPrice}&max-price=${maxPrice}&bedrooms=${bedrooms}&bathrooms=${bathrooms}&property-type=${type}&property-city=${location}`
  );
  return {
    props: {
      filteredProperties: propertiesFiltered,
      totalCount: propertiesFiltered.count.total_properties,
      pageCount: propertiesFiltered.count.total_page,
      currentPage: propertiesFiltered.count.current_page,
      perPage: propertiesFiltered.count.per_page,
    },
  };
}
