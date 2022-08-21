<template>
    <div class="title">
        <h1>Dining Room Tables</h1>
    </div>
    <div class="filter">
        <div class="filter-des">
            <a id="hide-filters" style="width:157px;">Hide Filters</a>
            <div class="filter-item"><a>xs <span>x</span></a></div>
            <a style="width:122px;">0-2400 <span>x</span></a>
            <a style="width:86px;">Adidas <span>x</span></a>
            <a style="width:104px;">yellow <span>x</span></a>
            <a style="width:79px;">H&M <span>x</span></a>
            <a style="width:93px;">Blue <span>x</span></a>
            <a style="width:86px;">Adidas <span>x</span></a>
        </div>
    </div>
    <div class="category">
        <h1>Category</h1><button @click="readMore = false">-</button>
    </div>
    <div class="categories" v-show="readMore">
        <div class="search-box">
            <a><i class="fa fa-search" aria-hidden="true"></i></a>
            <a><input id="search" type="text" placeholder=" Search by category" name="search"></a>
        </div>
        <div class="categoriesList">
            <ul>
                <li v-for="item in categories.data" :key="item.id"><input type="checkbox" name="chkdemo" value="no"
                        unchecked>{{ item.title }}</li>
            </ul>
        </div>
    </div>
    <div class="brand">
        <h1>Brand</h1><button id="#brand_button" @click="readMore = false">-</button>
    </div>
    <div class="brands" v-show="readMore">
        <div class="brand-box">
            <a><i class="fa fa-search" aria-hidden="true"></i></a>
            <a><input id="search" type="text" placeholder=" Search by brand" name="search"></a>
        </div>
        <div class="brandsList">
            <ul>
                <li v-for="item in brands.data" :key="item.id"><input type="checkbox" name="chkdemo" value="no"
                        unchecked>{{ item.title }} ({{ item.products_count }})</li>
            </ul>
        </div>
    </div>


    <div class="product-container">
        <div v-for="item in products.data" :key="item.id" class="product-card">
            <div class="product-image">
                <span class="discount-tag"><span class="fa fa-heart-o"></span></span>
                <img :src="item.featured_image" class="product-thumb" alt="">

            </div>
            <div class="product-info">
                <h2 class="product-brand">{{ item.title }}</h2>
                <p class="product-short-des2">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star unchecked"></span>
                    {{ item.rating.total_reviews_count }}
                </p>
                <p class="product-short-des">{{ item.default_variant.price }}</p>
            </div>

        </div>
    </div>


</template>

<script>
import axios from "axios";
export default {
    name: 'MainPage',
    data() {
        return {
            readMore: true,
            products: [],
            categories: [],
            brands: [],
        };
    },
    async mounted() {
        let result = await axios.get("https://hbm.34staging.app/api/v1/products");
        console.warn(result);
        this.products = result.data;
        let result_2 = await axios.get("https://hbm.34staging.app/api/v1/categories");
        console.warn(result_2);
        this.categories = result_2.data;
        result_2 = await axios.get("https://hbm.34staging.app/api/v1/brands");
        console.warn(result_2);
        this.brands = result_2.data;
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.unchecked {
    color: #EBF0FF;
}

.checked {

    color: #FFB300;
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
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    flex: none;
    order: 1;
    flex-grow: 0;
}

.product-container {
    margin-top: 286px;
    margin-left: 216px;
    padding: 0 10vw;
    display: flex;
    height: 3000px;

    overflow-x: auto;
    position: absolute;
    scroll-behavior: smooth;
}

.product-container::-webkit-scrollbar {
    display: none;
}

.product-card {
    flex: 0 0 auto;
    width: 300px;
    height: 300px;
    margin-right: -40px;
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

.discount-tag {
    position: absolute;
    background: #fff;
    padding: 5px;
    width: 20px;
    height: 20px;
    border-radius: 50px;
    color: black;
    right: 20px;
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
    margin-top: -20px;
    /* Display 3 */
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    /* identical to box height */
    /* Text Color */
    color: #1B1C1E;
    /* Inside auto layout */
}

.product-short-des {
    float: left;
    position: absolute;
    padding-top: 52px;
    overflow: hidden;

    height: 22px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    /* Text Color */
    color: #1B1C1E;
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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #283566;
}

.Price h1 {
    position: relative;
    margin-top: 424px;
    margin-left: 36px;
    width: 36px;
    height: 19px;

    /* H2 */

    font-family: 'Lato';
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

    font-family: 'Lato';
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

.filter span {
    position: relative;
    font-style: normal;
    padding-left: 5px;
    /* Neutral/Black */

    color: #23263B;
}

.filter a {
    display: inline-block;
    float: left;
    margin-top: 14px;
    padding-left: 14px;
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



    /* Fields */



}

.filter-des {
    margin-left: 321px;
}

.filter {
    /* Rectangle */


    position: absolute;
    width: 3440px;
    height: 45px;
    left: 0px;
    top: 239px;

    /* Button Text */


}

.brandsList li {
    list-style: none;
    padding: 2px 8px;
    position: relative;
    font-family: 'Lato';
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
    font-family: 'Lato';
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
    margin-top: 60px;
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
    background: #F3F3F3;
    border: none;
    position: absolute;
    color: #1B1C1E;
    margin-top: 0px;
    margin-left: 40px;
}

.categories #search {
    background: #F3F3F3;
    border: none;
    position: absolute;
    color: #1B1C1E;
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

.brands .search-box a {
    padding-top: 10px;
    display: inline-block;
}

.categories .search-box a {
    display: inline-block;
}

.brands .brand-box {
    top: 0px;
    position: absolute;
    float: left;
    margin-left: 46px;
    width: 262px;
    height: 38px;
    background: #F3F3F3;
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
    background: #F3F3F3;
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
    background: #FFFFFF;
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
    background: #FFFFFF;
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

.brand h1,
.brand button {
    display: inline;
}

.category h1,
.category button {
    display: inline-block;
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
    background: #FFFFFF;
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
    font-family: 'Lato';
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

    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height, or 120% */


    color: #222222;
}
</style>
