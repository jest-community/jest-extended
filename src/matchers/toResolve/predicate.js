export default async promise => {
  try {
    await promise;
    return { pass: true };
  } catch (error) {
    return { pass: false, error };
  }
};
