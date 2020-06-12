"use strict";var cluster=require("cluster");function startWorker(){var r=cluster.fork();console.log("CLUSTER: Worker %d start",r.id)}console.log("Env ==> ",process.env.NODE_ENV),cluster.isMaster?(require("os").cpus().forEach(function(){startWorker()}),cluster.on("disconnect",function(r){console.log("CLUSTER: Worker %d disconnected from the cluster.",r.id)}),cluster.on("exit",function(r,e,o){console.log("CLUSTER: Worker %d died with exit code %d (%s)",r.id,e,o),startWorker()})):require("./server.js")();