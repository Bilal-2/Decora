// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   categories: [],
//   products: [],
//   checked: [],
//   radio: [],
//   brandCheckboxes: {},
//   checkedBrands: [],
// };

// const shopSlice = createSlice({
//   name: "shop",
//   initialState,
//   reducers: {
//     setCategories: (state, action) => {
//       state.categories = action.payload;
//     },
//     setProducts: (state, action) => {
//       state.products = action.payload;
//     },
//     setChecked: (state, action) => {
//       state.checked = action.payload;
//     },
//     setRadio: (state, action) => {
//       state.radio = action.payload;
//     },
//     setSelectedBrand: (state, action) => {
//       state.selectedBrand = action.payload;
//     },
//   },
// });

// export const {
//   setCategories,
//   setProducts,
//   setChecked,
//   setRadio,
//   setSelectedBrand,
// } = shopSlice.actions;

// export default shopSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  products: [],
  checked: [],
  radio: [],
  brandCheckboxes: {},
  checkedBrands: [],
  searchQuery: "", // Initialize searchQuery in the state
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setChecked: (state, action) => {
      state.checked = action.payload;
    },
    setRadio: (state, action) => {
      state.radio = action.payload;
    },
    setSelectedBrand: (state, action) => {
      state.selectedBrand = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    }, // Action to set the search query
  },
});

export const {
  setCategories,
  setProducts,
  setChecked,
  setRadio,
  setSelectedBrand,
  setSearchQuery, // Include setSearchQuery action
} = shopSlice.actions;

export default shopSlice.reducer;
