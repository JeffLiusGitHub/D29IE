using System.Web;
using System.Web.Optimization;

namespace ie_sport_injury_ver_1._3
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            //bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
            //            "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/quiz").Include(
                       "~/Scripts/quiz.js"));

            bundles.Add(new ScriptBundle("~/bundles/checkanswer").Include(
                     "~/Scripts/checkanswer.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new ScriptBundle("~/bundles/all").Include(
                      "~/Scripts/all.js",
                      "~/Scripts/jquery.mobile.customized.min.js",
                      "~/Scripts/jquery.easing.1.3.js",
                      "~/Scripts/parallaxie.js",
                      "~/Scripts/headline.js",
                      "~/Scripts/custom.js",
                      "~/Scripts/jquery.vide.js"
                      ));

            var styleBundle = new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.min.css",
                      "~/Content/animate.css",
                      "~/Content/camera.css",
                      "~/Content/flaticon.css",
                      "~/Content/prettyPhoto.css",
                      "~/Content/owl.carousel.css",
                      "~/Content/font-awesome.css",
                      "~/Content/style.css",
                      "~/Content/responsive.css",
                      "~/Content/custom.css",
                       "~/Content/injury.css"

                      );
            //styleBundle.Transforms.Add(new StyleTransformer());

            bundles.Add(styleBundle);


       
        }
    }
}
