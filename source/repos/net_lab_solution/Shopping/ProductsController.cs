using Microsoft.AspNetCore.Mvc;
using [ADD_YOUR_NAMESPACE_HERE].Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace [ADD_YOUR_NAMESPACE_HERE].Controllers
{
    public class ProductsController : Controller
    {
        private static List<ProductModel> products = new List<ProductModel>();

        // GET all products
        public IActionResult Index()
        {
            ViewData["Products"] = products;
            return View();
        }

        // Add a new product
        public IActionResult AddProduct(int id, string name, float price)
        {
            ProductModel newProduct = new ProductModel();
            newProduct.Id = id;
            newProduct.Name = name;
            newProduct.Price = price;
            products.Add(newProduct);
            ViewData["Product"] = newProduct;
            return View("Details");
        }

        // GET product by id
        public IActionResult ViewProduct(int id)
        {
            int index = -1;
            for(int i = 0; i < products.Count; i++)
            {
                if(products[i].Id == id)
                {
                    index = i;
                    break;
                }
            }
            ViewData["Product"] = products[index];
            return View("Details");
        }

        // GET a random product from the list
        public IActionResult Random()
        {
            int limit = products.Count;
            Random rnd = new Random();
            int randomProduct = rnd.Next(0, limit);
            ViewData["Product"] = products[randomProduct];
            return View("Details");
        }
    }
}
