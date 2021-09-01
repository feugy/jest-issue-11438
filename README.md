# jest-issue-11438
Reproduction for https://github.com/facebook/jest/issues/11438

The issue happens when running in band (or with a fixed number of workers).

> npm run test:dev

will start in watch mode, and should work. Restarting tests by hitting enter key should still work.

> npm run test

will start in band, and should fail on the second test.
