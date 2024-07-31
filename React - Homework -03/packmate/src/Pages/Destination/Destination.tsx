import { useState } from "react";
import { useFetchCountries } from "../../state/slice/destination.slice";
import { useAppDispatch } from "../../utils/hooks";
import { setDestination } from "../../state/slice/destination.slice";

const DestinationPage = () => {
  const { countries, loading, error } = useFetchCountries();
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Destination Page</h1>
      <input
        type="text"
        placeholder="Search countries..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: "20px", padding: "10px", width: "300px" }}
      />
      {filteredCountries.map((country) => (
        <div
          key={country.name.common}
          onClick={() => dispatch(setDestination(country.name.common))}
          style={{ cursor: "pointer", margin: "5px 0" }}
        >
          {country.name.common}
        </div>
      ))}
    </div>
  );
};

export default DestinationPage;
