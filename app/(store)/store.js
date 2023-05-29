import { create } from 'zustand';

const useCart = create((set, get) => ({
	cart: [],
	products: [],
	setProducts: (newProduts) => {
		set((state) => {
			return { ...state, products: newProduts };
		});
	},
	addToCart: (addedProduct) => {
		set((state) => {
			const newCart = [...state.cart, addedProduct];
			return { ...state, cart: newCart };
		});
	},
	removeFromCart: (id) => {
		set((state) => {
			const newCart = state.cart.filter((c) => c.id !== id);
			return { ...state, cart: newCart };
		});
	},
}));

export default useCart;
