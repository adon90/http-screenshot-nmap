#!/bin/bash
printf "<HTML><BODY><BR>" > servidores.html
ls -1 *.png | sort -V | awk -F : '{ print $1":"$2"\n<BR><IMG SRC=\""$1"%3A"$2"\" width=400 ><BR><BR>" }'  >> servidores.html
printf "</BODY></HTML>" >> servidores.html

