pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t hybrid-cloud-operations-app:1.0 devops-extension/app'
            }
        }

        stage('Test Application') {
            steps {
                sh 'docker run --rm hybrid-cloud-operations-app:1.0 node --check server.js'
            }
        }

        stage('Deploy Application') {
            steps {
                sh 'docker compose -p devops-extension -f devops-extension/compose.yaml up -d --no-build app'
            }
        }

        stage('Verify Health') {
            steps {
                sh '''
                    for i in $(seq 1 15); do
                        STATUS=$(docker inspect --format="{{.State.Health.Status}}" hco-extension-app 2>/dev/null || true)
                        if [ "$STATUS" = "healthy" ]; then
                            echo "Application is healthy"
                            curl -fsS http://host.docker.internal:3100/health
                            exit 0
                        fi
                        sleep 2
                    done
                    echo "Application health check failed"
                    exit 1
                '''
            }
        }
    }

    post {
        success {
            echo 'CI/CD pipeline completed successfully!'
        }
        failure {
            echo 'CI/CD pipeline failed. Check the stage logs.'
        }
    }
}
