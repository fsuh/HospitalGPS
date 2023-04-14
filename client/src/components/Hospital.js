import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context/context";

const Hospital = () => {
  const url = "https://thl.fi/en/web/thlfi-en";
  const [isAtBottoom, setIsAtBottom] = useState(false);
  const { isLoading, hospitals } = useGlobalContext();

  const handleScroll = () => {
    window.pageYOffset > 300 ? setIsAtBottom(true) : setIsAtBottom(false);
  };
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="stories">
      {hospitals.map((hospital) => {
        const { _id, hospitalName, address, postinumero, city, service } =
          hospital;
        return (
          <article className="story" key={_id}>
            <h4 className="title">Facility Name: {hospitalName}</h4>
            <p className="info">Address: {address}</p>
            <p className="info">City: {city}</p>
            <p className="info">Postal Code: {postinumero}</p>

            <p className="info">Services: {service}</p>
            <div>
              <a
                href={url}
                className="read-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                read more
              </a>
            </div>
          </article>
        );
      })}
      {isAtBottoom && (
        <button onClick={handleClick} className="button">
          Back to top
        </button>
      )}
    </section>
  );
};

export default Hospital;
