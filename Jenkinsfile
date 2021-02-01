pipeline {
  agent any
  tools {
    nodejs '14.15.4'
  }

  options {
    timeout(time: 2, unit: 'MINUTES')
  }

  triggers {
    pollSCM '*/2 * * * *'
  }

  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Run tests') {
      steps {
        sh 'npm run build'
      }
    }
  }
}