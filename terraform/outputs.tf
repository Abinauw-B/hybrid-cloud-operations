output "instance_id" {
  value = aws_instance.monitoring_server.id
}

output "public_ip" {
  value = aws_instance.monitoring_server.public_ip
}

output "instance_type" {
  value = aws_instance.monitoring_server.instance_type
}

output "region" {
  value = var.aws_region
}
