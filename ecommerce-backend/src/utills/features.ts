import mongoose from "mongoose"


export const connectDB = () => {
    mongoose.connect("mongodb+srv://airbnb:airbnb@cluster0.bdng7kk.mongodb.net/" , {
        dbName: "Ecom-mern"
    }).then((c) => {
        console.log(`Database connected to the ${c.connection.host}`);
        
    }).catch((error) => {
        console.log(error);
    
    })}
