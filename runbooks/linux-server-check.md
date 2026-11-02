# Runbook: Linux Server Health Check

1. Check uptime: `uptime`
2. Check CPU and processes: `top`
3. Check memory: `free -h`
4. Check disk: `df -h`
5. Check filesystem usage: `df -i`
6. Check services: `systemctl --failed`
7. Check Docker: `sudo docker ps -a`
8. Check Docker logs: `sudo docker logs operations-nginx`
9. Check network: `ip addr`
10. Check recent system logs: `sudo journalctl -n 50`
