const app = Vue.createApp({
    data(){
        return {
            product:"Socks",
            desc:"This is about Socks",
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            onSale: false
        }
    }
})