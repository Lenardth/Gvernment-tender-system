pipeline {
    agent any  // This ensures all stages run inside a workspace

    stages {
        stage('Checkout') {
            steps {
                checkout scm  // Pulls code from GitHub
            }
        }

        stage('Build & Deploy') {
            steps {
                sh '''
                docker build -t flask-api .
                docker rm -f flask-api || true
                docker run -d --name flask-api -p 5000:5000 flask-api
                '''
            }
        }
    }

    post {
        always {
            script {
                // Wrap post-build steps in a node to access workspace
                node {
                    echo "Cleaning up..."
                    sh "docker ps -aq | xargs --no-run-if-empty docker rm -f"  // Cleanup containers
                }
            }
        }
    }
}