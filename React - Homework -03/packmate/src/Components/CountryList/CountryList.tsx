import { useFetchCountries } from "../../state/slice/destination.slice";
import { useAppDispatch } from "../../utils/hooks";
import { setDestination } from "../../state/slice/destination.slice";

const CountryList = () => {
  const { countries, loading, error } = useFetchCountries();
  const dispatch = useAppDispatch();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {countries.map((country) => (
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

export default CountryList;
