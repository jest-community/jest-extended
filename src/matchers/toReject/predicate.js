export default async promise => {
  return promise.then(
    resolved => {
      return false;
    },
    rejected => {
      return true;
    }
  );
};
