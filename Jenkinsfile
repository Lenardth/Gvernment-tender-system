pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                sh 'ls -la'  // Verify files
            }
        }

        stage('Build & Deploy') {
            steps {
                sh '''
                # Build using the correct Dockerfile name
                docker build -t nginx-static -f Dockerfile .
                
                # Stop/remove previous container if exists
                docker rm -f nginx-static || true
                
                # Run new container
                docker run -d --name nginx-static -p 8081:80 nginx-static
                '''
            }
        }
    }

    post {
        always {
            echo "Cleaning up..."
            sh 'docker ps -aq | xargs --no-run-if-empty docker rm -f || true'
        }
    }
}