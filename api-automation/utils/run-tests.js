const Mocha = require('mocha');
const fs = require('fs');
const path = require('path');
 
const mocha = new Mocha({
 reporter: process.env.MOCHA_REPORTER,
 reporterOption: {
   mochaFile: './mochawesome-report/mochawesome.xml',
   reportDir: './mochawesome-report',
 },
});
const testDir = './test';
 
function getTestPaths(dir, fileList) {
 const files = fs.readdirSync(dir);
 fileList = fileList || [];
 
 files.forEach((file) => {
   if (fs.statSync(path.join(dir, file)).isDirectory()) {
     fileList = getTestPaths(path.join(dir, file), fileList);
   } else {
     fileList.push(path.join(dir, file));
   }
 });
 
 return fileList.filter((file) => path.extname(file) === '.js');
}
getTestPaths(testDir).forEach((file) => {
    console.log(testDir)
 mocha.addFile(path.join(file));
});

mocha.run((failures) => {
 process.on('exit', () => {
   process.exit(failures);
 });
});