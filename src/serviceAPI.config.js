// const BASEURL = "https://www.easy-mock.com/mock/5c6fa27c80f4a77ad5480c5a/vuemall"
// const BASEURL = "http://localhost:3006/"
const LOCAURL = "http://localhost:3006/api"
const URL = {
    getShoppingMallInfo: LOCAURL + '/index', //商城首页所有信息
    // getGoodsInfo: BASEURL + '/getGoodsInfo',
    registerUser: LOCAURL + '/register',
    loginUser: LOCAURL + '/login',
    goods: LOCAURL + '/getGoods',
    category: LOCAURL + '/getCategory',
    categorysub: LOCAURL + '/getCategorysub',
    goodslist: LOCAURL + '/getGoodsListByCategorySubId',
    joincart: LOCAURL + '/setCart',
    changecart: LOCAURL +  '/changeCart',
    cartlist: LOCAURL + '/getCartList',
    removecart: LOCAURL + '/removeCart',
    cartcount:  LOCAURL + '/getCartCount',
}
export default URL