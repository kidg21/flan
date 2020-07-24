let _guidCount = 1;
function getGuid() {
  const tday = new Date();
  const rand = Math.floor(Math.random() * 2000000000);
  return `${tday.getTime()}${rand}${_guidCount++}`;
} // getGuid

export default getGuid;
