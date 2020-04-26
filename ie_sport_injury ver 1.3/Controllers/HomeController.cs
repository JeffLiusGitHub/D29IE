using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ie_sport_injury_ver_1._3.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Education()
        {
            ViewBag.Message = "Your education page.";

            return View();
        }

        public ActionResult Quiz()
        {
            ViewBag.Message = "Your quiz page.";

            return View();
        }

        public ActionResult WarmUp()
        {
            ViewBag.Message = "Your WarmUp page.";

            return View();
        }

        public ActionResult Map()
        {
            ViewBag.Message = "Your Map page.";

            return View();
        }

        public ActionResult RoadRules()
        {
            ViewBag.Message = "Your Article page.";

            return View();
        }
    }
}