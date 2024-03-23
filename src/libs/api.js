export const API_URL = "https://fastapi.pp.ua";

export async function getNewCars() {
  const response = await fetch(`${API_URL}/api/v1/cars/sort/1`);

  if (!response.ok) {
    throw new Error("Не удалось получить данные");
  }
  return response.data;
}

export async function getOldCars() {
    const response = await fetch(`${API_URL}/api/v1/cars/sort/2`);
  
    if (!response.ok) {
      throw new Error("Не удалось получить данные");
    }
    return response.json();
  }
