const app = Vue.createApp({
    data(){
        return {
            product:"Socks",
            desc:"This is about Socks",
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            onSale: false,
            details: ['50% cotton','30% wool'],
            sizes: ['XS','S','M','L','XL']
        }
    }
})