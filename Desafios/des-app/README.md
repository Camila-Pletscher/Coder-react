# Welcome to Pyc Design App!

To get started, you need to download the project from Github. And then type in the console: 
- npm install

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Welcome

This page welcomes you to the site. It only **appears once**.

## Home

On this page you will find information about **'design pyc'**.  And you can contact directly with the button.

## Servicios

On this page you will find all the design pyc services. The cards are created with a map that consults the information to **firebase**. And you could filter by the following categories:

- Identidad 
- Packaging & Papelería
- Redes

You can also add products to the cart. 

## Categorías

Each category has its own **dynamic banner**, which also requests the information from firebase.

## Detail

If you click on the product image, you can see the detail of this product. And you can also add this product to the cart and choose the **quantity**.

## Cart

In the cart you can see the detail of the products added to the cart and its **total**. At the end of the purchase an order number will be given. that order will be stored in the **firebase** orders collection.

You can modify the quantity of each product or remove it completely from the cart. You can also empty the cart in its entirety.

## Consultas

With this form you can make inquiries that will be sent through the **EMAILJS** api.


# Firebase

The information of all the services are stored in **firebase**. 

In firebase there is a services collection that has the information of the **services**. Another collection with the purchase orders that come from the app, called **orders**. And another called **banners** with the information of each category.