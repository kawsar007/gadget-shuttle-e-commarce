import bcrypt from 'bcryptjs';
const data = {
    users: [{
            name: 'Kawsar',
            email: 'imkawsar007@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'Shorna',
            email: 'shorna007@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [{
            // _id: '1',
            name: 'Iphone 11 Max Pro',
            category: 'Mobile',
            image: '/images/mobile1.jpg',
            brand: 'Iphone',
            price: 1200,
            countInStock: 12,
            rating: 4.5,
            numReviews: 12,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            // _id: '2',
            name: 'Realme AirBar',
            category: 'Mobile',
            image: '/images/airbar1.jpg',
            brand: 'Iphone',
            price: 40,
            countInStock: 0,
            rating: 4.5,
            numReviews: 8,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            // _id: '3',
            name: 'Iphone Head Phone',
            category: 'Mobile',
            image: '/images/headphn1.jpg',
            brand: 'Iphone',
            price: 70,
            countInStock: 10,
            rating: 4.8,
            numReviews: 16,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            // _id: '4',
            name: 'HP PC',
            category: 'Mobile',
            image: '/images/pc1.jpg',
            brand: 'Iphone',
            price: 120,
            countInStock: 5,
            rating: 4,
            numReviews: 9,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            //_id: '5',
            name: 'Nike Watch b60',
            category: 'Mobile',
            image: '/images/watch.jpg',
            brand: 'Iphone',
            price: 100,
            countInStock: 1,
            rating: 4.5,
            numReviews: 15,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            // _id: '6',
            name: 'OnePlus',
            category: 'Mobile',
            image: '/images/mobile2.jpg',
            brand: 'Iphone',
            price: 80,
            countInStock: 5,
            rating: 4.5,
            numReviews: 10,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            //_id: '7',
            name: 'Apple Watch',
            category: 'Mobile',
            image: '/images/watch2.jpg',
            brand: 'Iphone',
            price: 100,
            countInStock: 1,
            rating: 4,
            numReviews: 15,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            // _id: '8',
            name: 'Sony HeadPhone',
            category: 'Mobile',
            image: '/images/headphn4.jpg',
            brand: 'Iphone',
            price: 100,
            countInStock: 1,
            rating: 4.5,
            numReviews: 15,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            // _id: '9',
            name: 'Nokia 11',
            category: 'Mobile',
            image: '/images/mobile5.jpg',
            brand: 'Iphone',
            price: 100,
            countInStock: 1,
            rating: 4.5,
            numReviews: 15,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            // _id: '10',
            name: 'Xiome AirBar',
            category: 'Mobile',
            image: '/images/airbar2.jpg',
            brand: 'Iphone',
            price: 100,
            countInStock: 1,
            rating: 4.5,
            numReviews: 15,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },

    ],
};

export default data;