# Laboratorio 13: Integración Continua UTP

Proyecto de calculadora aritmética en Node.js con cinco pruebas unitarias Jest y un pipeline de GitHub Actions para Node.js 18.x y 20.x.

## Requisitos

- Node.js 18 o 20 y npm.
- Git.
- Una cuenta de GitHub.

## Ejecutar localmente

```bash
npm ci
npm test
```

El workflow `.github/workflows/ci.yml` ejecuta las pruebas en cada `push` a `main` o `develop` y en cada Pull Request dirigido a `main`.

## Publicarlo en GitHub

1. Crea un repositorio vacío llamado `laboratorio-ci-utp-v2` en tu cuenta, sin README, licencia ni `.gitignore` iniciales.
2. En una terminal abierta en esta carpeta, configura Git con tu nombre y correo si aún no lo hiciste:

   ```bash
   git config --global user.name "jarefu1"
   git config --global user.email "tu-correo-verificado-de-GitHub"
   ```

3. Publica la rama inicial (reemplaza `jarefu1` por tu usuario si fuera distinto):

   ```bash
   git init
   git add .
   git commit -m "feat: estructura inicial de calculadora y workflow CI"
   git branch -M main
   git remote add origin https://github.com/jarefu1/laboratorio-ci-utp-v2.git
   git push -u origin main
   ```

4. Crea la rama de trabajo, registra el cambio y súbela:

   ```bash
   git checkout -b feature/calculadora-core
   ```

   Agrega una breve nota de documentación a este README y luego ejecuta:

   ```bash
   git add README.md
   git commit -m "docs: documentar operaciones y pruebas de calculadora"
   git push -u origin feature/calculadora-core
   ```

5. Abre un Pull Request de `feature/calculadora-core` hacia `main`. Usa el título `PR: Implementación de Calculadora y CI` y la descripción `Closes #1`.
6. Revisa que pasen los checks de Node.js 18.x y 20.x. Luego fusiona el PR y confirma que el Issue y su tarjeta queden cerrados/movidos a Done.

## GitHub Projects e Issues

- Crea un Project tipo Board llamado **Proyecto TIC - Calculadora UTP** y agrega las columnas `Todo`, `In Progress`, `In Review` y `Done`.
- En el repositorio crea el Issue **HU01: Implementar servicio de calculadora en Node.js y pruebas automatizadas en Jest**.
- Asígnalo a `jarefu1`, aplica las etiquetas `enhancement` y `core-module`, vincúlalo al Project y colócalo en `Todo`.
- Al iniciar la rama, mueve la tarjeta a `In Progress`; al abrir el PR, a `In Review`; después de fusionar y cerrar el Issue, a `Done`.

## Cuestionario

### 1. ¿Qué representan las herramientas de integración continua y cómo se articulan con GitHub Projects?

La integración continua automatiza la verificación de los cambios que se incorporan al código. Cada cambio enviado o cada Pull Request puede activar compilaciones y pruebas reproducibles, lo que permite detectar errores temprano y dar visibilidad al estado técnico del software. GitHub Projects organiza el trabajo en tarjetas y estados; los Issues describen requerimientos o incidencias y se enlazan con ramas y Pull Requests. Así, el tablero muestra el avance mientras Actions aporta evidencia automática sobre la calidad del cambio.

### 2. ¿Cómo gestionar CI e incidencias aplicando ITIL e ISO 27001?

Con ITIL, se registran y priorizan las incidencias, se asignan responsables, se sigue su ciclo de resolución y se documentan los cambios que las corrigen. El tablero y los Issues mantienen trazabilidad desde el requerimiento hasta la solución. Con ISO/IEC 27001, se protege el repositorio mediante acceso mínimo necesario, autenticación multifactor, revisión de cambios, protección de ramas, gestión segura de secretos y auditoría. Los workflows deben usar permisos mínimos y dependencias confiables; los resultados de CI ayudan a verificar que los cambios cumplen los controles definidos.

### 3. ¿Qué herramientas y usos se aplican?

Git y GitHub administran versiones, ramas y colaboración; Issues registra historias de usuario e incidencias; Projects v2 organiza el trabajo en un tablero Kanban; Pull Requests permiten revisar y aprobar cambios; GitHub Actions automatiza el pipeline; Node.js ejecuta la aplicación y Jest valida el comportamiento con pruebas unitarias.

## Esquema de integración continua

- **Fase 1:** Registro de requerimientos en **GitHub Issues** / control de versiones en **Git y GitHub**.
- **Fase 2:** Desencadenamiento de eventos (PR) y ejecución automatizada en **GitHub Actions** (runner: **ubuntu-latest**).
- **Fase 3:** Verificación de pruebas automatizadas (**Jest**) y migración de tarjeta a **Done** en GitHub Projects.

