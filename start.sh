kill -9 $(pidof uwsgi)
uwsgi --socket :8001 --module divorces.wsgi --emperor /etc/uwsgi/vassals --uid root --gid root  --master --processes 4 --threads 2 --stats 127.0.0.1:9191 --daemonize=/var/www/vhosts/divorcesus/logs/uwsg.log


