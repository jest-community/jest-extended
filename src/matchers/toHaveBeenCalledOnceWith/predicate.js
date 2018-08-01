import { equals } from '../../utils/index';

const callsPredicate = recievedCalls => {
  if (recievedCalls.length === 0) return false;
  if (recievedCalls.length > 1) return false;

  return recievedCalls.length === 1;
};

const equalityPredicate = (recievedCalls, expectedCalls) => {
  const filteredRecieve = recievedCalls.filter((item, index) => {
    return equals(item, expectedCalls[index]);
  });

  return filteredRecieve.length === recievedCalls.length;
};

export default (recieved, expectedCalls) => {
  const recievedCalls = recieved.mock.calls;

  return callsPredicate(recievedCalls) && equalityPredicate(recievedCalls, expectedCalls);
};

export { callsPredicate, equalityPredicate };
