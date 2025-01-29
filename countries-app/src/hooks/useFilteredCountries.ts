import { useState, useEffect, useMemo, useCallback } from 'react';
import useFetchCountries from './useFetchCountries.ts';

const useFilteredCountries = () => {
  const { countries, isLoading, error } = useFetchCountries();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCountries = useMemo(() => {
    return countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, countries]);

  const handleSearchChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }, []);

  const handleSearchSubmit = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSearchTerm("");
  }, []);

  return {
    filteredCountries,
    isLoading,
    error,
    searchTerm,
    handleSearchChange,
    handleSearchSubmit,
  };
};

export default useFilteredCountries;