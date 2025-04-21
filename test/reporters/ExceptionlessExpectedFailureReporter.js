/**
 * Flips the test results for fail.test.js > .fail > <test cases>
 */
class ExceptionlessExpectedFailureReporter {
  constructor(globalConfig, reporterOptions, reporterContext) {
    this._globalConfig = globalConfig;
    this._options = reporterOptions;
    this._context = reporterContext;
  }
  onTestCaseResult(test, testCaseResult) {
    this._processTestCaseResult(testCaseResult);
  }
  onTestFileResult(test, testResult, results) {
    if (testResult.testFilePath.endsWith('fail.test.js')) {
      this._processTestResults(results);
    }
  }
  _processTestResults(results) {
    for (let testSuiteResult of results.testResults) {
      if (testSuiteResult.testFilePath.endsWith('fail.test.js')) {
        let switchedToFailing = 0;
        let switchedToPassing = 0;
        for (let testCaseResult of testSuiteResult.testResults) {
          const processResult = this._processTestCaseResult(testCaseResult);
          if (processResult === 'switch-to-failing') switchedToFailing++;
          if (processResult === 'switch-to-passing') switchedToPassing++;
        }
        const originalFailureCount = testSuiteResult.numFailingTests;
        testSuiteResult.numFailingTests += switchedToFailing - switchedToPassing;
        results.numFailedTests += switchedToFailing - switchedToPassing;
        testSuiteResult.numPassingTests += switchedToPassing - switchedToFailing;
        results.numPassedTests += switchedToPassing - switchedToFailing;
        if (originalFailureCount === switchedToPassing) {
          testSuiteResult.failureMessage = '';
          results.numFailedTestSuites -= 1;
          results.numPassedTestSuites += 1;
          if (results.numFailedTestSuites === 0) results.success = true;
          console.log('marking failing test suite as passing', testSuiteResult.testFilePath);
        }
      }
    }
  }

  _processTestCaseResult(testCaseResult) {
    if (this._hasDotFailAncestor(testCaseResult)) {
      if (testCaseResult.status === 'failed') {
        this._markPassing(testCaseResult);
        return 'switch-to-passing';
      } else if (testCaseResult.status === 'passed') {
        this._markFailing(testCaseResult);
        return 'switch-to-failing';
      }
    }
    return 'unchanged';
  }
  _hasDotFailAncestor(result) {
    return result.ancestorTitles.length > 0 && result.ancestorTitles[0] === '.fail';
  }
  _markPassing(result) {
    result.status = 'passed';
    result.failureDetails = [];
    result.failureMessages = [];
    result.numPassingAsserts = 1;
  }
  _markFailing(result) {
    const message = `${result.fullName} was expected to fail, but did not.`;
    result.status = 'failed';
    result.failureDetails = [
      {
        matcherResult: {
          pass: false,
          message: message,
        },
        message: message,
        stack: `${message}\n\tNo stack trace.\n\tThis is a placeholder message generated inside ExceptionlessExpectedFailureReporter`,
      },
    ];
    result.failureMessages = [message];
    result.numPassingAsserts = 0;
  }
}

module.exports = ExceptionlessExpectedFailureReporter;
