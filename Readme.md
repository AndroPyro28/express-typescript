# NodeJs Express-Typescript

#
# generate tsconfig
#

#tsc.cmd --init

#
# configurating tsconfig/compiler option
#

#noEmitOnError:true

#allowJs:true

#rootDir:"./src",

#outDir: "./dist",

#target:"es6",

#moduleResolution: "node",

#
# packages
#

#typescript

#express

#ts-node

#nodemon

#@types/node

#@types/express

#
# configuring scripts
#

"scripts": {
    
    "start": "node ./dist/app.js
    
    "dev": "nodemon ./src/app.ts",
    
    "build": "tsc.cmd -p ."
    
  },

