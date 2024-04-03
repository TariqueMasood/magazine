export async function fetchData(type) {
  try {
    const response = await fetch(
      `http://api.projectleadersmagazine.com:8000/api/${type}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Error fetching data");
  }
}
