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
        withNPM(npmrcConfig:'MyNpmrcConfig') {
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
    stage('Login to Nexus') {
      steps {
        nexusArtifactUploader credentialsId: '9163f643-e81f-473c-9753-bbe4d4960949', groupId: 'node_ts', nexusUrl: '192.168.0.20:8081', nexusVersion: 'nexus3', protocol: 'http', repository: 'my-npm-repo', version: '1.0.0'
      }
    }
    stage('Publish build to Nexus') {
      steps {
        sh 'npm publish'
      }
    }
  }
}