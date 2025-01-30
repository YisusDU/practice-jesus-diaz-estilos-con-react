import React, { useState } from "react";
import useFetchCountries from "../../../hooks/useFetchCountries.ts";
import { ContinentList, UnorderedList, ListItem } from "./styles.ts";

type ContinentProps = {
  continent: string;
};

const Continent = ({ continent }: ContinentProps) => {
  const { countries, isLoading, error } = useFetchCountries();
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar la visibilidad de la lista
  const toggleCountries = () => {
    setIsOpen((prevState) => !prevState);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const filteredCountries = countries
    .filter((country) => country.region === continent)
    .sort((a, b) => a.name.common.localeCompare(b.name.common));
    console.log(continent);

  return (
    <article>
      <ContinentList region={String(continent)}>
        <h2>{continent}</h2>
        <button
          onClick={toggleCountries}
          aria-label="Expandir o colapsar la lista de países"
        >
          {isOpen ? "🔼" : "🔽"} {/* Cambia el ícono según el estado */}
        </button>
      </ContinentList>
      {isOpen && ( // Solo muestra la lista si isOpen es true
        <UnorderedList >
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country, index) => (
              <ListItem key={country.id} order={Number(index)}>
                <span>Name:</span> {country.name.common}
                <span> Capital:</span> {country.capital}
                <span> Population:</span> {country.population}
              </ListItem>
            ))
          ) : (
            <li>No hay países disponibles en este continente.</li>
          )}
        </UnorderedList>
      )}
    </article>
  );
};

export default Continent;
