const sp= require('sharp')

sp('original.png')
    .resize(80)
    .grayscale()
    .toFile('resized.png')