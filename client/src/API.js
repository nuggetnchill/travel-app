const API_URL = 'http://localhost:1337';

export const fetchLogEntries = async () => {
  const response = await fetch(`${API_URL}/api/logs`);
  return response.json();
};
