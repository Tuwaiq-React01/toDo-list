using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

namespace MvcMovie.Controllers
{
    public class CarsController : Controller
    {
        // 
        // GET: /HelloWorld/

        public IActionResult Index()
        {
            return View();
        }


        public IActionResult Details()
        {
            ViewData["name"] = "BMW";
            ViewData["color"] = "black";
            ViewData["model"] = 2021;

            return View();

        }

        public IActionResult Type()
        {
            return View();
        }

    }
}
