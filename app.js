const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require('firebase/auth');

const firebaseConfig = {
    apiKey: "AIzaSyCJoEdp7UjpwbBeVdahjwxQ8TRFGeYug60",
    authDomain: "shaajo-online-jewellery-1a644.firebaseapp.com",
    projectId: "shaajo-online-jewellery-1a644",
    storageBucket: "shaajo-online-jewellery-1a644.appspot.com",
    messagingSenderId: "185383849519",
    appId: "1:185383849519:web:a6de192e7ff462553880da"
};
const app2 = initializeApp(firebaseConfig);
const auth = getAuth(app2);
const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const port = 5000;

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://siddhartha:sidd12345@cluster0.ofycwui.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
const orderSchema = new mongoose.Schema({
    userID: String,
    name: String,
    email: String,
    address: String,
    phone: Number,
    city: String,
    pin: Number,
    payment: String,
    product_id: Number,
    quantity: Number,
    price: Number,
    order_status: String,
    order_date: String,
    expected_delivery: String,
    remarks: String
});
const Order = mongoose.model('Order', orderSchema, 'user-orders');

app.get("/", function (req, res) {
    res.render("signup");
})
app.post("/signup", function (req, res) {
    var email = req.body.email;
    var pass1 = req.body.password;
    var pass2 = req.body.password2;
    if (pass1 === pass2) {
        createUserWithEmailAndPassword(auth, email, pass1)
            .then((userCredential) => {
                const user = userCredential.user;
                const userId = user.uid;
                res.render("home",{userId: userId});
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === "auth/email-already-in-use") {
                    res.send("Account Already Exist Please Log IN")
                } else {
                    if (errorCode === "auth/weak-password") {
                        res.send("Weak Password : Password should be greater than six charecters.");
                    } else {
                        res.send("Unknown Error Occured! \nContact Admin");
                    }
                }
            });
    }
    else {
        res.send("Password Mismatch Recheck the entered Credentials")
    }
})
app.get("/login", function (req, res) {
    res.render("login");
})
app.post("/login", function (req, res) {
    var email= req.body.email;
    var pass = req.body.password;
    signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
            const user = userCredential.user;
            const userId = user.uid;
            res.render("home",{userId: userId});
        })
        .catch((error) => {
            const signInErrorCode = error.code;
            const signInErrorMessage = error.message;
            if (signInErrorCode === "auth/wrong-password") {
                res.send("The Entered Password is Incorrect")
            } else if (signInErrorCode === "auth/user-not-found") {
                res.send("User not Registered with us Please create an Account and Log In");
            } else {
                res.send("Unknown Error Occered during Log In, Contact Admin");
            }
        });
})
app.get("/home", function (req, res) {
    var userId= req.query.userId;
    res.render("home",{userId: userId});

})
app.get("/order1", function (req, res) {
    var userId= req.query.userId;
    var image = "/image-assets/products/snap1.png"
    res.render("order", { item_no: 1, image: image, price: 400 , userId: userId})
})
app.get("/order2", function (req, res) {
    var userId= req.query.userId;
    var image = "/image-assets/products/snap2.png"
    res.render("order", { item_no: 2, image: image, price: 350 , userId: userId})
})
app.get("/order3", function (req, res) {
    var userId= req.query.userId;
    var image = "/image-assets/products/snap3.png"
    res.render("order", { item_no: 3, image: image, price: 500 , userId: userId})
})
app.get("/order4", function (req, res) {
    var userId= req.query.userId;
    var image = "/image-assets/products/snap4.png"
    res.render("order", { item_no: 4, image: image, price: 350 , userId: userId})
})
app.get("/order5", function (req, res) {
    var userId= req.query.userId;
    var image = "/image-assets/products/snap5.png"
    res.render("order", { item_no: 5, image: image, price: 400 , userId: userId})
})
app.get("/order6", function (req, res) {
    var userId= req.query.userId;
    var image = "/image-assets/products/snap6.png"
    res.render("order", { item_no: 6, image: image, price: 350 , userId: userId})
})
app.get("/order7", function (req, res) {
    var userId= req.query.userId;
    var image = "/image-assets/products/snap7.png"
    res.render("order", { item_no: 7, image: image, price: 500 , userId: userId})
})
app.get("/order8", function (req, res) {
    var userId= req.query.userId;
    var image = "/image-assets/products/snap8.png"
    res.render("order", { item_no: 8, image: image, price: 350 , userId: userId})
})
app.get("/order9", function (req, res) {
    var userId= req.query.userId;
    var image = "/image-assets/products/snap9.png"
    res.render("order", { item_no: 9, image: image, price: 400 , userId: userId})
})
app.get("/order10", function (req, res) {
    var userId= req.query.userId;
    var image = "/image-assets/products/snap10.png"
    res.render("order", { item_no: 10, image: image, price: 350 , userId: userId})
})
app.get("/order11", function (req, res) {
    var userId= req.query.userId;
    var image = "/image-assets/products/snap11.png"
    res.render("order", { item_no: 11, image: image, price: 500 , userId: userId})
})
app.get("/order12", function (req, res) {
    var userId= req.query.userId;
    var image = "/image-assets/products/snap12.png"
    res.render("order", { item_no: 12, image: image, price: 350 , userId: userId})
})
app.get("/order13", function (req, res) {
    var userId= req.query.userId;
    var image = "/image-assets/products/snap13.png"
    res.render("order", { item_no: 13, image: image, price: 400 , userId: userId})
})
app.get("/order14", function (req, res) {
    var userId= req.query.userId;
    var image = "/image-assets/products/snap14.png"
    res.render("order", { item_no: 14, image: image, price: 350 , userId: userId})
})
app.get("/order15", function (req, res) {
    var userId= req.query.userId;
    var image = "/image-assets/products/snap15.png"
    res.render("order", { item_no: 15, image: image, price: 500 , userId: userId})
})
app.get("/order16", function (req, res) {
    var userId= req.query.userId;
    var image = "/image-assets/products/snap16.png"
    res.render("order", { item_no: 16, image: image, price: 350 , userId: userId})
})
app.get("/order17", function (req, res) {
    var userId= req.query.userId;
    var image = "/image-assets/products/snap17.png"
    res.render("order", { item_no: 17, image: image, price: 400 , userId: userId})
})
app.get("/order18", function (req, res) {
    var userId= req.query.userId;
    var image = "/image-assets/products/snap18.png"
    res.render("order", { item_no: 18, image: image, price: 350 , userId: userId})
})
app.get("/order19", function (req, res) {
    var userId= req.query.userId;
    var image = "/image-assets/products/snap19.png"
    res.render("order", { item_no: 19, image: image, price: 500 , userId: userId})
})
app.get("/order20", function (req, res) {
    var userId= req.query.userId;
    var image = "/image-assets/products/snap20.png"
    res.render("order", { item_no: 20, image: image, price: 350 , userId: userId})
})
app.get("/order21", function (req, res) {
    var userId= req.query.userId;
    var image = "/image-assets/products/snap21.png"
    res.render("order", { item_no: 21, image: image, price: 400 , userId: userId})
})
app.get("/order22", function (req, res) {
    var userId= req.query.userId;
    var image = "/image-assets/products/snap22.png"
    res.render("order", { item_no: 22, image: image, price: 350 , userId: userId})
})
app.get("/order23", function (req, res) {
    var userId= req.query.userId;
    var image = "/image-assets/products/snap23.png"
    res.render("order", { item_no: 23, image: image, price: 500 , userId: userId})
})
app.get("/order24", function (req, res) {
    var userId= req.query.userId;
    var image = "/image-assets/products/snap24.png"
    res.render("order", { item_no: 24, image: image, price: 350 , userId: userId})
})
app.get("/order25", function (req, res) {
    var userId= req.query.userId;
    var image = "/image-assets/products/snap25.png"
    res.render("order", { item_no: 25, image: image, price: 400 , userId: userId})
})
app.get("/order26", function (req, res) {
    var userId= req.query.userId;
    var image = "/image-assets/products/snap26.png"
    res.render("order", { item_no: 26, image: image, price: 350 , userId: userId})
})
app.get("/order27", function (req, res) {
    var userId= req.query.userId;
    var image = "/image-assets/products/snap27.png"
    res.render("order", { item_no: 27, image: image, price: 500 , userId: userId})
})
app.get("/order28", function (req, res) {
    var userId= req.query.userId;
    var image = "/image-assets/products/snap28.png"
    res.render("order", { item_no: 28, image: image, price: 350 , userId: userId})
})
app.get("/error",function(req,res){
    var userId= req.query.userId;
    res.render("error",{userId: userId});
})
app.post('/order', function (req, res) {
    console.log('save');
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const address = req.body.address;
    const city = req.body.city;
    const pin = req.body.pin;
    const payment = req.body.payment;
    const quantity = req.body.quantity;
    const product_id = req.body.product_id;
    const userId= req.body.userId;

    const price = req.body.price;
    const order_status = "Order Placed";
    const currentDate = new Date();
    const futureDate = new Date(currentDate.getTime() + (7 * 24 * 60 * 60 * 1000));
    const futureYear = futureDate.getFullYear();
    const futureMonth = futureDate.getMonth() + 1; // Add 1 to the month to match the standard format
    const futureDay = futureDate.getDate();
    const formattedDate = `${futureYear}-${futureMonth}-${futureDay}`;
    const expected_delivery = formattedDate;
    const remarks = "NONE"
    var newOrder = new Order({
        name: name,
        email: email,
        address: address,
        phone: phone,
        city: city,
        pin: pin,
        quantity: quantity,
        payment: payment,
        userID: userId,

        product_id: product_id,
        price: price,
        order_status: order_status,
        order_date: currentDate,
        expected_delivery: expected_delivery,
        remarks: remarks
    });
    console.log(newOrder);
    newOrder.save()
        .then(() => {
            console.log('Order saved successfully');
            res.render("order_success", { order_id: newOrder._id, userId: userId });
        })
        .catch((error) => {
            console.error('Error saving order:', error);
            res.status(500).send('Error saving order');
        });
});
app.get("/account", function (req, res) {
    var userId= req.query.userId;
    res.render("account", { userId: userId });
})
app.get("/track", function (req, res) {
    var userId= req.query.userId;
    console.log(userId);
    Order.find({userID: userId})
        .then(orders => {
            console.log(orders);
            var image = "/image-assets/products/snap26.png"
            res.render("track", { orders: orders, image, userId: userId });
        })
        .catch(error => {
            console.error('Error retrieving orders:', error);
            res.status(500).send('Error retrieving orders');
        });
});
app.listen(process.env.PORT || port, function () {
    console.log(`Server is running successfully on port - ${port}`);
})
