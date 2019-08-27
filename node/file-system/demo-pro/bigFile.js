const fs = require('fs');


let writeStream = fs.createWriteStream(__dirname+'/file.txt', {encoding:'utf8'});


for(let i =0 ; i<= 1e6; i++) {
    writeStream.write('Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam beatae expedita quidem, aspernatur nostrum dignissimos, eaque maxime totam, quod iure reprehenderit ipsam? Accusantium optio ad modi voluptatem, natus libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam beatae expedita quidem, aspernatur nostrum dignissimos, eaque maxime totam, quod iure reprehenderit ipsam?\n');
}

writeStream.end();




