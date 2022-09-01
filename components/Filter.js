import { filterData, getFilterValues } from "../utils/formData";
import styles from "../styles/HomeSearchForm.module.css";
import Router, { useRouter } from "next/router";

export default function Filter() {
  const router = useRouter();
  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;
    const values = getFilterValues(filterValues);
    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });
    router.push({ pathname: path, query });
  };
  return (
    <div>
      <div className={styles.form_container}>
        {filterData.map((filter) => {
          return (
            <div key={filter.queryName}>
              <div className={styles.form_group}>
                <label htmlFor={filter.placeholder} className={styles.label}>
                  {filter.placeholder}
                </label>
                <select
                  className={styles.select_field}
                  placeholder={filter.placeholder}
                  onChange={(e) =>
                    searchProperties({ [filter.queryName]: e.target.value })
                  }
                  itemID={filter.placeholder}
                >
                  {filter?.items?.map((item) => {
                    return (
                      <option value={item.value} key={item.value}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
