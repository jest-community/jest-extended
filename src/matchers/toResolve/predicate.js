export default async promise => {
  return promise.then(
    resolved => {
      return true;
    },
    rejected => {
      return false;
    }
  );
};
