pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build & Deploy Static Site') {
            steps {
                sh '''
                docker build -t nginx-static -f Dockerfile.nginx .
                docker rm -f nginx-static || true
                docker run -d --name nginx-static -p 8081:80 nginx-static
                '''
            }
        }
    }

    post {
        always {
            script {
                echo "Cleaning up..."
                sh "docker ps -aq | xargs --no-run-if-empty docker rm -f"
            }
        }
    }
}