using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ie_sport_injury_ver_1._3.Startup))]
namespace ie_sport_injury_ver_1._3
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
