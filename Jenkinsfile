pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'leonardth25/tender-monitoring-system' 
        PORT = '8081'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                sh 'ls -la'  // Verify files are checked out
            }
        }

        stage('Verify Dockerfile') {
            steps {
                script {
                    if (!fileExists('leonardth25/tender-monitoring-system')) {
                        error("Dockerfile.nginx not found in workspace!")
                    }
                }
            }
        }

        stage('Build & Deploy') {
            steps {
                sh '''
                docker build -t ${DOCKER_IMAGE} -f leonardth25/tender-monitoring-system .
                docker rm -f ${DOCKER_IMAGE} || true
                docker run -d --name ${DOCKER_IMAGE} -p ${PORT}:80 ${DOCKER_IMAGE}
                '''
            }
        }
    }

    post {
        always {
            echo "Cleaning up containers..."
            sh 'docker ps -aq | xargs --no-run-if-empty docker rm -f || true'
        }
    }
}