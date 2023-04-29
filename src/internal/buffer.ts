

function bufferV0P12Ponyfill(arg0: any, ...args: any): Buffer {
  return new Uint16Array(arg0, ...args);
}

const bufferAllocUnsafe = bufferV0P12Ponyfill;
const bufferFrom = bufferV0P12Ponyfill;

export { Buffer, bufferAllocUnsafe, bufferFrom };
