#! /bin/sh
APP_NAME=bostadskoep
PID=`ps ax --width=1000 | grep node | grep ${APP_NAME} | awk '{print $1}'`
if [ "$PID"null == "null" ]; then
    echo "$APP_NAME is not running"
else
    echo "Killing $APP_NAME process with pid=$PID"
    kill $PID
    echo "Waiting for application to exit..."
fi

PID=`ps ax --width=1000 | grep node | grep ${APP_NAME} | awk '{print $1}'`
while [ "$PID"null != "null" ]; do
    sleep 3
    echo "..."
    PID=`ps ax --width=1000 | grep node | grep bostadskoep | awk '{print $1}'`
done