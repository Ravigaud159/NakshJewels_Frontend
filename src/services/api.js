const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const getProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const result = await response.json();
    return result.data;  
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const addToCartAPI = async (cartItem) => {
  try {
    const response = await fetch(`${API_BASE_URL}/cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItem),
    });

    if (!response.ok) {
      throw new Error('Failed to add to cart');
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
