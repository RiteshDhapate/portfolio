const url = "https://portfolio-backend.ritesh.live";


export async function sendEmail(
  name,
  email,
  message,
  setError,
  setSuccess,
  setLoding
) {
  const data = {
    name,
    email,
    message,
  };
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    setError(false);
    setSuccess(false);
    setLoding(true);
     await fetch(`${url}/email`, requestOptions);
    setSuccess(true);
  } catch (error) {
    setError(true);
    console.error(error);
  } finally {
    setLoding(false);
  }
}
