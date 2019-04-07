#! /bin/sh
APP_NAME=bostadskoep
APP_HOME=/home/pi/web/${APP_NAME}
PID=`ps ax --width=1000 | grep node | grep ${APP_NAME} | awk '{print $1}'`
if [ "$PID"null == "null" ]; then
        echo "Starting bostadskoep"
        cd ${APP_HOME}
        /usr/bin/serve -s ${APP_NAME} > /dev/null 2>&1 &
        sleep 5
        PID=`ps ax --width=1000 | grep node | grep ${APP_NAME} | awk '{print $1}'`
        echo "$APP_NAME now running with PID $PID"
        exit 0
else
        echo "$APP_NAME is already running with PID $PID"
        exit 1
fi