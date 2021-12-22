const app = Vue.createApp({
    data(){
        return {
            cart:0,
            product:"Socks",
            brand:"Jockey",
            desc:"This is about Socks",
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            onSale: false,
            details: ['50% cotton','30% wool'],
            sizes: ['XS','S','M','L','XL'],
            // showDelButton: false
        }
    },
    methods:{
        addToCart(){
            
            this.cart+=1
            // if(this.cart > 0)
            //     this.showDelButton=true
        },
        removeFromCart(){
            this.cart-=1
            // if(this.cart === 0)
            //     this.showDelbutton = false
        }
        
    },
    computed:{
        title(){
            return this.product+" from "+this.brand
        }
    }
})