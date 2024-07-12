const mongoose=require("mongoose");
mongoose.connect('mongodb+srv://3amrithamanoj12a:l4XRfrDcekLKkSlf@cluster0.6ppsntl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
    console.log('DB is connected')
}).catch((res)=>{
    console.log('DB not connected')
})