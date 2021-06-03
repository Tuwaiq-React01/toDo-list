using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CodeFirst.Models;
using CodeFirst.Data;


namespace CodeFirst.Controllers
{
    public class StudentsController : Controller
    {
        private readonly AppDBContext _db;

        public StudentsController(AppDBContext context)
        {
            _db = context;
        }
        public IActionResult Index()
        {

            var mail = _db.Students.FirstOrDefault(a => a.id == 1).email;
            var firstname = _db.Students.FirstOrDefault(b => b.id == 2).fn;
            var ids = _db.Students.Where(c => c.id > 1).ToList();
            ViewBag.mail = mail;
            ViewBag.firstname = firstname;
            ViewBag.ids = ids;

            return View();
        }

        public IActionResult Search(string txt)
        {

            var aa = _db.Students.Where(d => d.fn.Contains(txt) || d.email.Contains(txt)).ToList();
            ViewBag.Students = aa;

            return View("Index");
        }

        public IActionResult details(int? Id)
        {


            var detail = _db.Students.ToList().Find(d => d.id == Id);
            if(detail == null)
            {
                return View("NotFound");
            }
            ViewData["detail"] = detail;
            return View("Index");
        }
    }
}
