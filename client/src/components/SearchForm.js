import React from "react";
import { useGlobalContext } from "../context/context";

const SearchForm = () => {
  const { query1, query2, query3, handleCity, handleAddress, handleCode } =
    useGlobalContext();
  //const [searchFields, setSearchFields] = useState({ query });
  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setSearchFields({ ...searchFields, [name]: value });
  //   };
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // const query = Object.entries(searchFields)
  //     //   .filter(([key, value]) => value.trim() !== "")
  //     //   .map(([key, value]) => `${key}=${encodeURIComponent(value.trim())}`)
  //     //   .join("&");

  //     handleSearch({ searchFields });
  //};
  return (
    <section>
      <article className="section-heading">
        <h2>Search for Healthcare Facilities Near You</h2>
        <p>
          We have information on over 6000 care facilities. Find the nearest
          facility in your area by using the search box below. Type in your
          address, or city or your postal code in the search box.
        </p>
      </article>
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            className="form-input"
            value={query1}
            onChange={(e) => handleCity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            className="form-input"
            value={query2}
            onChange={(e) => handleAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="postinumero">Postal Code:</label>
          <input
            type="text"
            id="postinumero"
            name="postinumero"
            className="form-input"
            value={query3}
            onChange={(e) => handleCode(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
