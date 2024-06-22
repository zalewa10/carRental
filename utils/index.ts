export async function fetchCars() {
  const headers = { "X-Api-Key": "6mrkvI5EW4Qfyi7WpfyhHA==K5kOJxA4VTjB6TNY" };
  const response = await fetch(
    `https://api.api-ninjas.com/v1/cars?model=civic`,
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
}
