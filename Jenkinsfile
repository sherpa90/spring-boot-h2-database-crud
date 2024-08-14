pipeline {
    agent any
    
    stages {
        stage('Compilación') {
            steps {
                echo 'Compilando el código...'
                // Pasos de compilación aquí
            }
        }
        stage('Pruebas') {
            steps {
                echo 'Ejecutando pruebas...'
                // Pasos de pruebas aquí
            }
        }
        // Puedes agregar más etapas según sea necesario
    }

    // Aquí es donde agregaremos las notificaciones de Slack
    post {
        always {
            echo 'Enviando notificación a Slack'
            def COLOR_MAP = [
                'SUCCESS': 'good',
                'FAILURE': 'danger',
                'UNSTABLE': 'warning',
                'ABORTED': '#808080'
            ]
            slackSend (
                channel: '#time-tracker-ci',
                color: COLOR_MAP[currentBuild.currentResult],
                message: "*${currentBuild.currentResult}*: Job `${env.JOB_NAME}` build `${env.BUILD_NUMBER}`\nMore Info at: ${env.BUILD_URL}"
            )
        }
    }
}
