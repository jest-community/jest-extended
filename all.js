// override rule to allow running linting before build (dist directory won't exist yet)
/* eslint import/no-unresolved: "warn" */
require('./dist/all');
