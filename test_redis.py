import redis
r = redis.Redis(host='127.0.0.1', port=6379, db=0, socket_timeout=2)
try:
    print(r.ping())
except Exception as e:
    print(e)
