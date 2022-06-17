const isUnicodeSupported = (originalUnified = '') => {
  let modifiedUnified = '';
  const unified = originalUnified;
  modifiedUnified = unified
    .split('-')
    .map(hex => parseInt(hex, 16))
    .map(hex => String.fromCodePoint(hex))
    .join('');
  const ctx = document.createElement('canvas').getContext('2d');
  ctx.canvas.width = ctx.canvas.height = 1;
  ctx.fillText(modifiedUnified, -4, 4);
  return ctx.getImageData(0, 0, 1, 1).data[3] > 0;
};

export default isUnicodeSupported;
