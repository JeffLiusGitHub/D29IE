using System.Web;
using System.Web.Mvc;

namespace ie_sport_injury_ver_1._3
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
