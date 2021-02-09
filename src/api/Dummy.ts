export const dummyRequest = async <T>(
  resolvedObject: T,
  timeout = 2000
): Promise<T> => {
  return new Promise<T>((resolve, _reject) => {
    setTimeout(() => {
      resolve(resolvedObject);
    }, timeout);
  });
};
