const fs = require('fs');
const path = require('path');

const photosDir = path.join(__dirname, 'photos');
const outputJson = path.join(photosDir, 'photos.json');

fs.readdir(photosDir, (err, files) => {
  if (err) {
    console.error('Failed to read photos directory:', err);
    return;
  }

  // Filter media files (images, videos, audio)
  const mediaFiles = files.filter(file =>
    /\.(jpe?g|png|gif|webp|bmp|svg|mp4|webm|ogg|mov|avi|mkv|mp3|wav|flac|aac)$/i.test(file)
  );

  fs.writeFile(outputJson, JSON.stringify(mediaFiles, null, 2), err => {
    if (err) {
      console.error('Failed to write photos.json:', err);
      return;
    }
    console.log('photos.json generated successfully with', mediaFiles.length, 'files');
  });
});
