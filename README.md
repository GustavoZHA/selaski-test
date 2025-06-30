# Cypress - Cucumber - POM Projecto

Este proyecto sigue una combinación de los patrones Page Object Model (POM) y BDD con Cucumber, usando Cypress como framework de pruebas E2E. También incluye herramientas de debugging como screenshots y grabaciones.

## Estructura del Proyecto
```
cypress-cucumber-pom-project
├── cypress
│   ├── e2e
│   │   └── test
│   │       ├── home_steps.js         # Pasos para pruebas de la página de inicio.
│   │       ├── login_steps.js        # Pasos para pruebas de login.
│   │       ├── navigate_steps.js     # Pasos para pruebas de navegación.
│   │       └── test.feature          # Archivo de pruebas en formato Gherkin (Cucumber).
│   ├── screenshots
│   │   └── test.feature              # Capturas de pantalla generadas durante las pruebas.
│   ├── videos
│   │   └── test.feature.mp4          # Grabación de la ejecución de pruebas.
│   ├── selaski
│   │   └── ui
│   │       └── page
│   │           ├── home_page.js      # Page Object: página de inicio.
│   │           ├── login_page.js     # Page Object: página de login.
│   │           ├── result_grid.js    # Page Object: grilla o tabla de resultados.
│   │           └── navigate.js       # Page Object: navegación general.
│   └── support
│       ├── commands.js               # Comandos personalizados de Cypress.
│       ├── e2e.js                    # Configuración global de soporte para pruebas e2e.
│       └── utils.js                  # Funciones utilitarias compartidas.
├── cypress.config.js                # Configuración principal de Cypress.
├── cypress.env.json                 # Variables de entorno (como codigo o URLs).
├── package.json                     # Configuración de npm y dependencias.
├── package-lock.json                # Registro detallado de versiones de dependencias.
├── .gitignore                       # Archivos y carpetas excluidas del control de versiones.
└── README.md                        # Documentación del proyecto.
```

## 🛠️ Instrucciones para ejecutar el proyecto
1. Clonar el repositorio
`git clone https://github.com/GustavoZHA/selaski-test
`
2. Ejecutar el comando
`npm install cypress --save-dev
`
3. Actualizar cypress.env.json con datos validos
4. Abrir el modo interface para ejecutar las pruebas
`./node_modules/.bin/cypress open`
4. Ejecutar desde la consola
 `npx cypress run --spec **/*.feature --browser chrome`

## Aclaraciòn
1. Las pruebas requeridas estan en al archivo \cypress\e2e\test.feature.
2. Los videos y screenshot se generan cuando las pruebas fallan
