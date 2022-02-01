  // Define DTP page urls and domains.
  (function () {
    MunchkinXDReceiveOptions = {
      endpoints: [
        "https://interact.nginx.com/dtp.html",
        "https://interact.f5.com/dtp.html"
      ],
      allowedOrigins: [
        "https://interact.f5.com",
        "https://interact.nginx.com",
	"https://www.f5.com",
	"https://www.nginx.com",
	"https://www.nginx.co.jp",
	"https://support.f5.com",
	"https://downloads.f5.com",
	"https://clouddocs.f5.com",
	"https://devcentral.f5.com",
	"https://partners.f5.com",
	"https://activate.f5.com",
	"https://portal.cloudservices.f5.com",
	"https://cloudservices.f5.com",
	"https://investors.f5.com",
	"https://my.f5.com",
	"https://docs.nginx.com",
	"https://test.wp.nginx.com"
      ]
    };
    MunchkinXD.receive(MunchkinXDReceiveOptions);
  })();
