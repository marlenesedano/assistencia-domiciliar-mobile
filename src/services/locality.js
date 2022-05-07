import api from "./api";

export async function getUfs() {
  const response = await api.get("/v1/localidades/estados");
  return response.data;
}

export async function getCities(uf) {
  const response = await api.get(`/v1/localidades/estados/${uf}/municipios`);
  return response.data;
}
