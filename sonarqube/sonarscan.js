const scanner = require("sonarqube-scanner");

scanner(
  {
    serverUrl: "http://localhost:9003",
    token: "sqp_5991a27d9daf1cc7fdf32fe5af57845bd8e6b861",
    options: {
      "sonar.projectName": "My-Books-Tracker",
      "sonar.projectDescription": "Here I can add a description of my project",
      "sonar.projectKey": "My-Books-Tracker",
      "sonar.projectVersion": "0.0.1",
      "sonar.test.exclusions": "**/src/**.test.tsx",
      "sonar.exclusions": "**/src/**.test.tsx",
      "sonar.sourceEncoding": "UTF-8",
      "sonar.language": "js",
      "sonar.exclusions": "**/node_modules/**,**/*.spec.ts, **/*.stories.tsx",
      "sonar.tests": "src",
      "sonar.test.inclusions": "**/*.test.tsx,**/*.test.ts",
      "sonar.test.exclusions": "**/*.stories.tsx",
      "sonar.login": "sqp_5991a27d9daf1cc7fdf32fe5af57845bd8e6b861",
      "sonar.javascript.lcov.reportPaths": "coverage/lcov.info",
      "sonar.testExecutionReportPaths": "testResults/sonar-report.xml",
    },
  },
  () => process.exit()
);
