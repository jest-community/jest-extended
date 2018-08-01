import { equals } from '../../utils/index';

const callsPredicate = recievedCalls => {
  if (recievedCalls.length === 0) return false;
  if (recievedCalls.length > 1) return false;

  return recievedCalls.length === 1;
};

const equalityPredicate = (recievedCalls, expectedCalls) => {
  const filteredRecievedCalls = recievedCalls.filter((item, index) => {
    return equals(item, expectedCalls[index]);
  });

  const checkNoneFiltered = recievedCalls.length === expectedCalls.length;
  const checkFiltered = filteredRecievedCalls.length === expectedCalls.length;

  return checkNoneFiltered && checkFiltered;
};

export default (recieved, expectedCalls) => {
  const recievedCalls = recieved.mock.calls;

  return callsPredicate(recievedCalls) && equalityPredicate(recievedCalls[0], expectedCalls);
};

export { callsPredicate, equalityPredicate };
