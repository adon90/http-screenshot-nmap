# http-screenshot-nmap
Instructions:
- Download phantomjs: http://phantomjs.org/download.html
- Add phantomjs to path: `cp phantomjs-2.1.1-linux-x86_64/bin/phantomjs /usr/bin/phantomjs`
- Download http-screenshot.nse and put under /usr/share/nmap/scripts.
- Update nmap -> `nmap —script-updatedb`
- Download screenshot.js and put under /tmp
- Execute nmap -> `nmap -F --script http-screenshot <target>`
- Move all your screenshots to /var/www/html
- Execute extraer.sh
- Go to http://localhost/servidores.html
