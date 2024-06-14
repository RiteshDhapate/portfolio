const url = "http://localhost:2000";

export async function fetchData(setLoding, setData, setError) {
  const data = {
    secret: "ritesh sent data",
  };
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    setLoding(true);
    const responce = await fetch(url, requestOptions);
    const result = await responce.json();
    setData(result);
    setLoding(false);
  } catch (error) {
    setError(true);
    console.error(error);
  }
}

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
