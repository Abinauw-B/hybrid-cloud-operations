# Incident 001: High CPU Utilization

## Severity
Medium

## Detection
CloudWatch alarm: HybridCloud-High-CPU

## Trigger
EC2 CPU utilization greater than 80% for two consecutive 5-minute periods.

## Investigation
1. Check CPU utilization in CloudWatch.
2. Connect to EC2 using Systems Manager.
3. Run `top` to identify high-CPU processes.
4. Check services using `systemctl`.
5. Review application logs.

## Resolution
Identify the resource-intensive process and restart the affected service only after confirming the cause.

## Prevention
Monitor CPU trends and review application resource usage.
