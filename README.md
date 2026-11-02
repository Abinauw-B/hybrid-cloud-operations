# Hybrid Cloud Infrastructure Monitoring & Incident Management

## Project Overview
A hands-on cloud operations project combining AWS infrastructure, Terraform, Linux, Docker, CloudWatch monitoring, and incident management.

## Architecture
- AWS Region: ap-south-1 (Mumbai)
- Compute: Amazon EC2 t3.micro
- Infrastructure as Code: Terraform
- Access: AWS Systems Manager Session Manager
- Operating System: Amazon Linux 2023
- Containerization: Docker
- Web Server: Nginx
- Monitoring: Amazon CloudWatch Agent
- Metrics: CPU, memory, disk
- Alerting: CloudWatch CPU alarm

## Infrastructure
- Terraform-managed EC2 instance
- Default AWS VPC and subnet
- IAM instance role and SSM permissions
- Security group with no inbound access
- Systems Manager access without SSH

## Monitoring
CloudWatch namespace: HybridCloudOperations

Collected metrics:
- cpu_usage_idle
- cpu_usage_user
- cpu_usage_system
- mem_used_percent
- disk_used_percent

Alarm:
- Name: HybridCloud-High-CPU
- Metric: AWS/EC2 CPUUtilization
- Threshold: Greater than 80%
- Evaluation: 2 periods of 5 minutes

## Docker Deployment
- Docker installed on EC2
- Nginx container: operations-nginx
- Host port: 8080
- Container port: 80
- Local HTTP verification: HTTP 200 OK

## Repository Structure
- terraform/ - Infrastructure configuration
- docker/ - Container deployment notes
- linux/ - Linux administration notes
- monitoring/ - Monitoring configuration
- incidents/ - Incident records
- runbooks/ - Troubleshooting procedures
- screenshots/ - Project evidence
- windows/ - Windows administration
- active-directory/ - AD notes
- dns/ - DNS notes

## Security
- No inbound SSH access
- EC2 access through Systems Manager
- IAM instance role used for AWS access
- No credentials or access keys stored in this repository

## Cleanup
Terraform-managed AWS resources can be removed using `terraform destroy` from the terraform directory after saving project evidence.

## Project Status
Core AWS infrastructure, Docker deployment, CloudWatch metrics and CPU alarm configured.
