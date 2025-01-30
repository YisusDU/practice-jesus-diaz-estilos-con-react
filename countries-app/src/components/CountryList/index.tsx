import React from "react";
import useFilteredCountries from "../../hooks/useFilteredCountries.ts";
import Header from "../Header/index.tsx";
import {
  CountryForm,
  RenderCountriesWrapper,
  CountryCard,
  LoadingOrError,
  CardPeopleInfo
} from "./styles.ts";

const CountryList = () => {
  const {
    filteredCountries,
    isLoading,
    error,
    searchTerm,
    handleSearchChange,
    handleSearchSubmit,
  } = useFilteredCountries();

  // Renderizado de paises
  const renderCountries = () => {
    return (
      <RenderCountriesWrapper>
        {filteredCountries.map((country) => {
          const { id, name, capital, population, flags } = country;
          return (
            <CountryCard  key={id}>
              <img loading="lazy" src={flags.png} alt={name.common} />
              <h2>{name.common}</h2>
              <p>Capital: {capital}</p>
              <CardPeopleInfo people={Number(population)}>Population: {population.toLocaleString()}</CardPeopleInfo>
            </CountryCard>
          );
        })}
      </RenderCountriesWrapper>
    );
  };
  //Manejo de pantallas de carga y erroress
  const renderContent = () => {
    if (isLoading)
      return (
        <LoadingOrError>
          <h2>Loading...................... 🥱</h2>
        </LoadingOrError>
      );
    if (error)
      return (
        <LoadingOrError>
          <h2>There was an error loading the countries. 😖</h2>
        </LoadingOrError>
      );

    return renderCountries();
  };

  return (
    <>
      <Header />
      <main>
        <CountryForm>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search for a country..."
          />
          <button onClick={handleSearchSubmit}>Clear</button>
        </CountryForm>
        {renderContent()}
      </main>
    </>
  );
};

export default CountryList;
