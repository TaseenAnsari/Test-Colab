pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    // stage('Git') {
    //   steps {
    //     git 'https://github.com/TaseenAnsari/testing-colab.git'
    //   }
    // }
     
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
    
    // stage('deploy') {
    //   steps {
    //     sh 'tar czf nanogram.tar.gz node_modules package-lock.json package.json app.js test routes public models controllers bin'
    //   }
    // }
   stage('deploy') {
      steps {
        sh 'git branch'
      }
    }
  }
}