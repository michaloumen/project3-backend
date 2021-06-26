## Summary 
- [About the project](#about)
- [Installing](#installing)
- [Acknowledgments](#acknowledgments)

## About the project
This is my third project within the Ironhack bootcamp, where I developed a fullstack website using React.js, Node.js, Express and MongoDB. 

The frontend and backend files are located in separate repositories. The front project is in [here](https://github.com/michaloumen/project3-frontend).

The objective of this project is to have an online fair of dental products being sold by dental students and dentists so that they can trade among themselves their materials that are no longer being useful at prices lower than the market. Thus, it is possible to view the products that are for sale on the homepage. <br>
The user can register to access the options to buy and sell products. In the purchase area, you can choose the product by quantity, add the payment method (Paypal), enter the address and you will be directed to a successful purchase confirmation area. <br>
If the user wants to sell their products, with the same login they can access the page to Create, Read, Update and Delete (CRUD) products. The project is structured but still under construction.

## Installing
You can run it offline by downloading / cloning the project files and installing the environment variables or you can run my online instance from [here](https://admiring-lumiere-653e19.netlify.app/).

To run the project locally, after cloning and opening it on your computer, add the <b>.env </b>folder with the environment variables:

    MONGODB_URL=mongodb://localhost/(name of your database)

    JWT_SECRET=somethingsecret

    PORT=http://localhost:(port number to run your frontend project)

    PORT2=(port number to run your backend project)

    EXPIRATION_AUTH_TOKEN=48h

And in the terminal run: 

    $ npm install 
    $ npm node server.js

----------------------------
## Acknowledgments 
To **Henrique Mendes** and **Ingrid Pitta** for teaching and helping me to get here 💖
