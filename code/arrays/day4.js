// The Challenge:

// "Split the array into smaller arrays of a specific size (e.g., size of 3)."

function chunkArray(data, size) {
  let chunked = [];
  for (let i = 0; i < data.length; i += size) {
    chunked.push(data.slice(i, i + size));
  }
  return chunked;
}
