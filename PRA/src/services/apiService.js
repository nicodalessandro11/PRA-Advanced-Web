import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

// Function to get the list of Pokémon
export const getPokemonList = async (token = "") => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pokedex`, {
      headers: { Authorization: token },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching Pokémon list:", error);
    return [];
  }
};

// Function to create a new Pokémon
export const createPokemon = async (pokemonData, token) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/pokemon`, pokemonData, {
      headers: { Authorization: token },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating Pokémon:", error);
    return null;
  }
};

// Function to delete a Pokémon
export const deletePokemon = async (pokemonId, token) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/pokemon`, {
      headers: { Authorization: token },
      data: { id: pokemonId },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting Pokémon:", error);
    return null;
  }
};

// Function to login
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    return null;
  }
};

// Function to get user info
export const getUserInfo = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user`, {
      headers: { Authorization: token },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user info:", error);
    return null;
  }
};
