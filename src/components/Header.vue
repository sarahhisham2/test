<template>
    <div class="first">
        <h5 id="#logo">LOGO</h5>
        <a><i class="fa fa-shopping-cart" aria-hidden="true"></i>Cart</a>
        <a><i class="fa fa-heart-o" aria-hidden="true"></i>Wishlist</a>
        <a><i class="fa fa-user-o" aria-hidden="true"></i>Acoount</a>
    </div>
    <div class="second">
        <div class="second-des">
        <a style="width:50px;">Grocery</a>
        <a style="width: 69px;">Electronics</a>
        <a style="width: 53px;">Clothing</a>
        <a style="width: 58px;">Furniture</a>
        <a style="width: 125px;">Toys & Video games</a>
        <a style="width: 32px;">Baby</a>
        <a style="width: 45px;">Beauty</a>
        <a style="width: 96px;">Personal Care</a>
        <a style="width: 28px;">Health</a>
        <a style="width: 28px;">Pets</a>
        <a style="width: 41px;">Sports</a>
        <a style="width: 65px;">Stationary</a>
        <a style="width: 44px;">Brands</a>
        </div>
    </div>
    <div class="third">
        <div class="third-des">
            <a style="width: 35px;">Home</a>
            <a style="color: #C1C1C1;">/</a>
            <a style="width: 53px;">Furniture</a>
            <a style="color: #C1C1C1;">/</a>
            <a style="width: 113px;color: #C1C1C1;">Dining Room Tables</a>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'HeaderVue',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only
<div class="third">
        <a style="width: 35px;">Home</a><a>/</a>
        <a style="width: 53px;">Furniture</a><a>/</a>
        <a style="width: 113px;color: #C1C1C1;">Dining Room Tables</a>
    </div> -->
<style scoped>

.second a {
    display: inline;
    float: left;
    
    height: 17px;
    padding-top: 14px;
    padding-left: 40px;
    /* Display 1 */
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    align-items: center;
    color: #000000;
}
hr{
    position: absolute;
width: 1440px;
height: 1px;
left: 0px;
top: 0px;

/* Shapes */

border: 0.25px solid #C1C1C1;
}
.third a {
    display: inline;
    float: left;
    
    height: 16px;
    padding-top: 12.1px;
    padding-left: 8.7px;
    /* Display 1 */
    
height: 16px;

/* H5 */

font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 16px;
/* identical to box height */

display: flex;
align-items: center;

/* Text Color */

color: #1B1C1E;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
}

.third {
    font-size: 0;
    padding: 0;
    position: absolute;
    width: 1440px;
    height: 40px;
    left: 0px;
    top: 115px;

    /* Button Text */

    background: #FFFFFF;
}
.second {
    font-size: 0;
    padding: 0;
    position: absolute;
    width: 1440px;
    height: 45px;
    left: 0px;
    top: 70px;

    /* Button Text */

    background: #FBFBFB;
}
.icon {
    
    /* Other styles here */
}
.first a {
    display: inline-block;
    margin-top: 26.5px;
    float: right;
    width: 51px;
    height: 17px;
    left: 50px;
    top: 26.5px;
    padding-right: 50px;


    /* Display 2 */

    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    display: flex;
    align-items: center;

    color: #000000;


    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
}

.first h5 {
    position: absolute;
    width: 71px;
    height: 30px;
    margin-left: 50px;
    margin-top: 20px;

    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    /* identical to box height, or 120% */

    display: flex;
    align-items: center;

    /* Text Color */

    color: #1B1C1E;

}
.second-des{
    margin-left: 152px;
}
.third-des{
    margin-left: 57.2px;
}
.first i{
    padding-right: 5px;
}
.first {
    position: absolute;
    width: 1440px;
    height: 70px;
    left: 0px;
    top: 0px;

    /* White */

    background: #FFFFFF;
}
</style>
