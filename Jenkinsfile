pipeline {
  agent any
  tools {
    nodejs '14.15.4'
  }

  options {
    timeout(time: 2, unit: 'MINUTES')
    buildDiscarder logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '', numToKeepStr: '3')
  }

  triggers {
    pollSCM '*/2 * * * *'
  }

  stages {
    stage('Install dependencies') {
      steps {
        withNPM(npmrcConfig:'8e5932a3-e96d-4cf3-b981-626b56ec9dfe') {
            echo "Performing npm build..."
            sh 'npm install'
        }
      }
    }
    stage('Build project with Webpack') {
      steps {
        sh 'npm run build'
      }
    }
    
    stage('Publish build to Nexus') {
      steps {
        sh 'npm publish'
      }
    }
  }
}