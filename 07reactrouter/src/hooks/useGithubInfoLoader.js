export const useGithubLoader = async () => {
  const res = await fetch('https://api.github.com/users/hiteshchoudhary');
  return res;
}