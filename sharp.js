const sharp = require('sharp');

console.log('args: ', process.argv);

if (process.argv[2] === '--help') {
    console.log("Example: node sharp.js <input file name> <output file name")
    return
}

if (!process.argv[2]) {
    console.log('No input file! Please write input file. Example: node sharp.js <input file name> <output file name>')
    return
}

if (!process.argv[3]) {
    console.log('No output file! Please write output file. Example: node sharp.js <input file name> <output file name>')
    return
}

sharp(process.argv[2])
  .rotate(90)
  .toFile(process.argv[3], (err, info) => {
    if (err) {
      console.error('Error saving image:', err);
      return;
    }
    console.log('Image saved:', info);
  })
//   .rotate(180)
//   .toFile(outputImagePath1, (err, info) => {
//     if (err) {
//       console.error('Error saving image:', err);
//       return;
//     }
//     console.log('Image saved:', info);
//   })
//   .rotate(270)
//   .toFile(outputImagePath2, (err, info) => {
//     if (err) {
//       console.error('Error saving image:', err);
//       return;
//     }
//     console.log('Image saved:', info);
//   });
  
