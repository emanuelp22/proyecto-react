

const products = [
    {
        id : '1',
        category2: "inicio",
        name : 'Pinza',
        price : 850 ,
        category : 'ferreteria',
        stock: 50 ,
        description : ' pinzas',
        img:'https://media.istockphoto.com/id/1370323000/es/foto/varios-tipos-de-alicates-colgando-de-la-percha-magn%C3%A9tica.jpg?s=612x612&w=0&k=20&c=g7Ul3xWywoz8m2-9Vgt-6jR-mjbBBwhzTQdG2hSm5Gg='
    } ,
    {
        id: '2' ,
        name: 'Martillo',
        price: 700,
        category :'ferreteria' ,
        stock : 100 ,
        description :'Martillo ',
        img:'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFydGlsbG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id:'3',
        name :'Pala',
        price: 7800 ,
        category : 'Corralon',
        stock: 10 ,
        description :'Palas de punta ,sector corralón',
        img:'https://media.istockphoto.com/id/1267937369/es/foto/equipo-de-supervivencia-de-pala-negra-aislado-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=MoizfvnDEoeU79MExgcvc6Sq76_bQ26mnDtyRJhVanc='

    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (products)
        },500)
    })
    
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}

export const getProductsByCategory = (productCategory) => {

    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products.filter(prod => prod.category === productCategory))
        },500)
    })
}