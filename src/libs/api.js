export const API_URL = "http://178.62.216.109:8000";

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
