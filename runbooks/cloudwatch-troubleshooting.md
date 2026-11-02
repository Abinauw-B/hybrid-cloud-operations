# Runbook: CloudWatch Agent Troubleshooting

1. Check agent status:
   `sudo systemctl status amazon-cloudwatch-agent`

2. Restart agent:
   `sudo systemctl restart amazon-cloudwatch-agent`

3. Review agent logs:
   `sudo tail -30 /opt/aws/amazon-cloudwatch-agent/logs/amazon-cloudwatch-agent.log`

4. Verify IAM role includes CloudWatchAgentServerPolicy.

5. Verify metrics in CloudWatch namespace HybridCloudOperations.

6. Check the AWS region is ap-south-1.
