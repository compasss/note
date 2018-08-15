## ubuntu config

1. proxy config
System-wide proxies in CLI Ubuntu/Server must be set as environment variables.
Open the /etc/environment file with vi (or your favorite editor). This file stores the system-wide variables initialized upon boot.
Add the following lines, modifying appropriately. You must duplicate in both upper-case and lower-case because (unfortunately) some programs only look for one or the other:
```
http_proxy="http://myproxy.server.com:8080/"
https_proxy="http://myproxy.server.com:8080/"
ftp_proxy="http://myproxy.server.com:8080/"
no_proxy="localhost,127.0.0.1,localaddress,.localdomain.com"
HTTP_PROXY="http://myproxy.server.com:8080/"
HTTPS_PROXY="http://myproxy.server.com:8080/"
FTP_PROXY="http://myproxy.server.com:8080/"
NO_PROXY="localhost,127.0.0.1,localaddress,.localdomain.com"
```

apt-get, aptitude, etc. will not obey the environment variables when used normally with sudo. So separately configure them; create a file called 95proxies in /etc/apt/apt.conf.d/, and include the following:
```
Acquire::http::proxy "http://myproxy.server.com:8080/";
Acquire::ftp::proxy "ftp://myproxy.server.com:8080/";
Acquire::https::proxy "https://myproxy.server.com:8080/";
```
Finally, logout and reboot to make sure the changes take effect.

related url:
[https://askubuntu.com/questions/175172/how-do-i-configure-proxies-without-gui](https://askubuntu.com/questions/175172/how-do-i-configure-proxies-without-gui)