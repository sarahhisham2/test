<template>
  <div class="title">
    <h1>Dining Room Tables</h1>
  </div>
  <div class="filter">
    <div class="filter-des">
      <a
        id="hide-filters"
        style="width: 157px"
        @click="showFilters = !showFilters">
        <span v-if="showFilters">Hide Filters</span>
        <span v-else>Show Filters</span>
      </a>
     <div class="filter-group">

      <a id="filters" v-for="item in checkedCategories" :key="item" v-show="showFilters">{{ item }} <button @click="removeCategory(item)">x</button></a
      >
      <a id="filters" v-for="item in checkedBrands" :key="item" v-show="showFilters">{{ item }} <button @click="removeBrand(item)">x</button></a
      >
     </div>
    </div>
  </div>

  <div class="category">
    <h1>Category</h1>
    <button @click="moreCategories = !moreCategories">
      <span v-if="moreCategories">-</span> <span v-else>+</span>
    </button>
  </div>
  <div class="categories" v-show="moreCategories">
    <div class="search-box">
      <a><i class="fa fa-search" aria-hidden="true"></i></a>
      <a
        ><input
          id="search"
          type="text"
          placeholder=" Search by category"
          name="search"
      /></a>
    </div>
    <div class="categoriesList">
      <ul>
        <li v-for="item in categories.data" :key="item.id">
          <input
            type="checkbox"
            :value="item.title"
            v-model="checkedCategories"
          />{{ item.title }}
        </li>
      </ul>
    </div>
  </div>


  <div class="brand">
    <hr id="first-line" />
    <h1>Brand</h1>
    <button @click="moreBrands = !moreBrands">
      <span v-if="moreBrands">-</span> <span v-else>+</span>
    </button>
  </div>
  <div class="brands" v-show="moreBrands">
    <div class="brand-box">
      <a><i class="fa fa-search" aria-hidden="true"></i></a>
      <a
        ><input
          id="search"
          type="text"
          placeholder=" Search by brand"
          name="search"
      /></a>
    </div>
    <div class="brandsList">
      <ul>
        <li v-for="item in brands.data" :key="item.id">
          <input
            type="checkbox"
            :value="item.title"
            v-model="checkedBrands"
          />{{ item.title }} ({{ item.products_count }})
        </li>
      </ul>
    </div>
  </div>


<div class="price">
  <hr id="second-line" />
  <h1>Price</h1>
  <button @click="moreBrands = !moreBrands">
    <span v-if="moreBrands">-</span> <span v-else>+</span>
  </button>
</div>
<div class="range">
<price-range-slider
    :trackHeight="0.5"
    />
</div>
  <div class="product-container">
    <div v-for="item in products.data" :key="item.id" class="product-card">
      <div class="product-image">
        <span class="discount-tag"><span class="fa fa-heart-o"></span></span>
        <img :src="item.featured_image" class="product-thumb" alt="" />
      </div>
      <div class="product-info">
        <h2 class="product-brand">{{ item.title }}</h2>
        <p class="product-short-des2">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star unchecked"></span>
          <span id="rating">{{ item.rating.total_reviews_count }}</span>
        </p>
        <p class="product-short-des">{{ item.default_variant.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PriceRangeSlider from '../components/PriceRangeSlider';
export default {
  name: "MainPage",
components: {
    PriceRangeSlider
  },
  data() {
    return {
      moreCategories: true,
      moreBrands: true,
      showFilters: true,
      products: [],
      categories: [],
      brands: [],
      filters: [],
      checkedCategories: [],
      checkedBrands: [],

    };
  },
  async mounted() {

    let result = await axios.get("https://hbm.34staging.app/api/v1/products");
    console.warn(result);
    this.products = result.data;
    let result_2 = await axios.get(
      "https://hbm.34staging.app/api/v1/categories"
    );
    console.warn(result_2);
    this.categories = result_2.data;
    result_2 = await axios.get("https://hbm.34staging.app/api/v1/brands");
    console.warn(result_2);
    this.brands = result_2.data;
  },
  removeCategory: function (item) {
    const index = this.checkedCategories.indexOf(item);
    if (index > -1) {
      // only splice array when item is found
      this.checkedCategories.splice(index, 1); // 2nd parameter means remove one item only
    }
  },
  methods: {
    removeCategory: function (item) {
      const index = this.checkedCategories.indexOf(item);
      if (index > -1) {
        // only splice array when item is found
        this.checkedCategories.splice(index, 1); // 2nd parameter means remove one item only
      }
    },
    removeBrand: function (item) {
      const index = this.checkedBrands.indexOf(item);
      if (index > -1) {
        // only splice array when item is found
        this.checkedBrands.splice(index, 1); // 2nd parameter means remove one item only
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#rating{
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;

/* Black */

color: #000000;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
}
.range{
width: 262px;
height:200px;
margin-left: 36px;
margin-top: 875px;
}
.brandsList p {
  margin-left: 0px;
  margin-top: 0px;
}
.unchecked {
  color: #ebf0ff;
}

.checked {
  color: #ffb300;
}

.product-short-des2 {
  float: left;
  padding-top: 5px;
}

.product-short-des2 p {
  float: left;
  margin-left: 5px;
  left: 0%;
  right: 82.35%;
  bottom: 0%;

  height: 18.87px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  /* Black */

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
}

.product-container {
  margin-top: -806px;
  margin-left: 186px;
  padding: 0 10vw;
  display: grid;

  width: 1000px;
  grid-template-columns: auto auto auto auto;
  position: absolute;
  scroll-behavior: smooth;
}

.product-container::-webkit-scrollbar {
  display: none;
}

.product-card {
  flex: 0 0 auto;
  width: 300px;
  height: 398px;
  margin-right: -110px;
}

.product-image {
  position: relative;
  height: 265px;
  width: 79%;
  overflow: hidden;
}

.product-thumb {
  width: 92%;
  height: 229px;
  object-fit: cover;
}
.discount-tag .fa {
  padding-left: -2px;
}
.discount-tag {
  position: absolute;
  background: #fff;
  padding: 5px;
  width: 17px;
  height: 16px;
  border-radius: 50px;
  color: black;
  right: 26px;
  top: 10px;
  text-transform: capitalize;
}

.card-btn {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  width: 90%;
  text-transform: capitalize;
  border: none;
  outline: none;
  background: #fff;
  border-radius: 5px;
  transition: 0.5s;
  cursor: pointer;
  opacity: 0;
}

.product-card:hover .card-btn {
  opacity: 1;
}

.card-btn:hover {
  background: #efefef;
}

.product-info {
  position: relative;
  width: 100%;
  height: 100px;
  padding-top: 10px;
}

.product-brand {
  float: left;
  width: 248.41px;
  height: 22px;
  margin-top: -40px;
  /* Display 3 */
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  /* identical to box height */
  /* Text Color */
  color: #1b1c1e;

  /* Inside auto layout */
}

.product-short-des {
  float: left;
  position: absolute;
  padding-top: 27px;
  overflow: hidden;

  height: 22px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */
  /* Text Color */
  color: #1b1c1e;
  /* Inside auto layout */
  flex: none;
  order: 2;
  flex-grow: 0;
}

.price {
  font-weight: 900;
  font-size: 20px;
}

.actual-price {
  margin-left: 20px;
  opacity: 0.5;
  text-decoration: line-through;
}

.product {
  position: relative;
  overflow: hidden;
  padding: 20px 0;
}

.product h3 {
  padding: 0 10vw;
  font-size: 30px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #283566;
  margin-bottom: 40px;
  text-transform: capitalize;
}

.product-category {
  padding: 0 10vw;
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 40px;
  text-transform: capitalize;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #283566;
}

.Price h1 {
  position: relative;
  margin-top: 424px;
  margin-left: 36px;
  width: 36px;
  height: 19px;

  /* H2 */

  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}

.Brand h1 {
  position: relative;
  margin-top: 424px;
  margin-left: 36px;
  width: 43px;
  height: 19px;

  /* H2 */

  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}

.category h1,
#category-see-less {
  display: inline-block;
}

#filters{
padding-right:5px ;
}

.hide-filters {
  box-sizing: border-box;

  position: absolute;
  width: 157px;
  height: 32px;
  left: 321px;
  top: 239px;

  border: 1px solid #666666;
  border-radius: 4px;
}
.filter-group a button{
border:none;
}
.filter-group a{
display: inline;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 5px 12px;
gap: 4px;

width: 65px;
height: 32px;

/* Fields */

background: #F5F5F5;
border-radius: 5px;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
/* identical to box height */

text-align: center;

/* Text */

color: #1B1C1E;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
}
#hide-filters{

border: 1px solid #666666;
border-radius: 4px;
box-sizing: border-box;

position: absolute;
width: 157px;
height: 32px;
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
/* identical to box height */


/* Text Color */
padding-top: 7px;
padding-left:44px;
color: #1B1C1E;
}
.filter-group{
padding-top:5px ;
display:inline-block;
margin-left:171px;
height:37px;

}
.filter {
  /* Rectangle */

  position: absolute;
  width: 3440px;
  height: 45px;
  left: 321px;
  top: 239px;
padding: 10px;
  /* Button Text */
}

.brandsList li {
  list-style: none;
  padding: 2px 8px;
  position: relative;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  color: #000000;
}

.categoriesList li {
  list-style: none;
  padding: 2px 8px;
  position: relative;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  color: #000000;
}

.brandsList {
  float: left;
  text-align: left;
  display: block;
  position: absolute;
  margin-top: -35px;
}

.categoriesList {
  float: left;
  text-align: left;
  display: block;
  position: absolute;
}

.categories ul {
  margin-top: 70px;
}

.brands #search {
  background: #f3f3f3;
  border: none;
  position: absolute;
  color: #1b1c1e;
  padding-top: 14px;
  padding-left: 40px;
}

.categories #search {
  background: #f3f3f3;
  border: none;
  position: absolute;
  color: #1b1c1e;
  margin-top: 12px;
  margin-left: 40px;
}

.brands .brand-box a i {
  position: absolute;
  margin-top: 10px;
  color: #000000;
  overflow: hidden;
}

.categories .search-box a i {
  position: absolute;
  margin-top: 10px;
  color: #000000;
  overflow: hidden;
}

.categories .search-box a {
  display: inline-block;
}

.brands .brand-box {
  top: -97px;
  position: absolute;
  float: left;
  margin-left: 36px;
  width: 262px;
  height: 38px;
  background: #f3f3f3;
  border-radius: 50px;
  border: none;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
}

.categories .search-box {
  top: 14px;
  position: absolute;
  float: left;
  margin-left: 36px;
  width: 262px;
  height: 38px;
  background: #f3f3f3;
  border-radius: 50px;
  border: none;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
}

.categories {
  font-size: 0;
  padding: 0;
  position: relative;
  width: 300px;
  height: 40px;
  left: 0px;
  top: 320px;
  float: top;
  float: left;
  /* Button Text */
  z-index: 0;
  background: #ffffff;
}

.brands {
  font-size: 0;
  padding: 0;
  position: relative;
  width: 300px;
  height: 40px;
  left: -800px;
  top: 720px;
  float: top;
  float: left;
  /* Button Text */
  z-index: 0;
  background: #ffffff;
}

.brand ul {
  float: bottom;
  position: absolute;
  clear: both;
  padding-top: 30px;
  z-index: 0;
  bottom: 0px;
}

.category button:hover {
  cursor: pointer;
}

.price h1,
.price button {
  display: inline-block;
}

.brand h1,
.brand button {
  display: inline-block;
}

.category h1,
.category button {
  display: inline-block;
}
.brand button {
  top: 577.5px;
  border: none;
  background: white;
  font-size: larger;
  position: absolute;
  margin-left: -18px;
  cursor: pointer;
}
.category button {
  top: 294.5px;
  border: none;
  background: white;
  font-size: larger;
  position: absolute;
  margin-left: 287px;
  cursor: pointer;
}
#second-line{
margin-top: 790px;
margin-left: 36px;
float: left;
float: bottom;
position: absolute;
width: 262px;
height: 0px;
/* Shapes */
border: 0.5px solid #c1c1c1;
/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
}
#first-line {
  margin-top: 550px;
  margin-left: 36px;
  float: left;
  float: bottom;
  position: absolute;
  width: 262px;
  height: 0px;

  /* Shapes */

  border: 0.5px solid #c1c1c1;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
}

.brands {
  font-size: 0;
  padding: 0;
  position: absolute;
  float: left;
  float: bottom;
  width: 300px;
  height: 40px;
  left: 0px;

  /* Button Text */
  z-index: 0;
  background: #ffffff;
}
.price h1{
float: top;
position: relative;
clear: both;
float: left;
margin-top: 780px;
margin-left: 36px;
z-index: 0;
bottom: 0px;
font-family: "Lato";
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
/* identical to box height, or 120% */
color: #222222;
}
.brand h1 {
  float: bottom;
  position: absolute;
  clear: both;
  float: left;
  margin-top: -80px;
  margin-left: -260px;
  z-index: 0;
  bottom: 0px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height, or 120% */
  color: #222222;
}

.category h1 {
  position: absolute;
  width: 183px;
  height: 24px;
  left: 36px;
  top: 285px;

  /* Title */

  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height, or 120% */

  color: #222222;
}
</style>
