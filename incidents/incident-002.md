# Incident 002: Web Server Unavailable

## Severity
Medium

## Detection
HTTP health check failure.

## Investigation
1. Run `sudo docker ps -a`.
2. Check container logs using `sudo docker logs operations-nginx`.
3. Check Docker service using `sudo systemctl status docker`.
4. Check port usage using `sudo ss -tulpn`.

## Resolution
Start the container if stopped:
`sudo docker start operations-nginx`

Restart Docker only if necessary.

## Prevention
Monitor container status and review logs regularly.
