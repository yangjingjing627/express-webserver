const fs = require('fs')
const express = require('express')
const app = express()

//文件写入
fs.writeFile('public/11.txt', '失焦时时代进步',{flag:"a"}, function(err) {
    if(err) {
        return console.log('err', err)
    }else {
        console.log('写入成功')
    }
})

//文件读取
fs.readFile('public/11.txt', (err, data)=> {
    if(err) {
        return console.log(err)
    }else {
        console.log(data.toString())
    }
})

//    要修改名字的文件  修改后的名字  回调函数
fs.rename('public/11.txt', 'public/22.txt',(err) => {
    if(err){
        console.log(err);
    }else {
        console.log("修改成功");
    }
})
//删除文件
fs.unlink('public/22.txt', (err) => {
    if(err){
        console.log(err);
    }else {
        console.log("删除成功");
    }
})

// 异步
fs.readFile("public/11.txt",function (err,data) {
    if(err){
        return console.log(err);
    }else{
        var getData = data.toString();
        fs.writeFile("public/33.txt",getData,function (err) {
            if(err){
                return console.log(err);
            }else {
                console.log("复制欧克");
            }
        })
    }
})

// 创建文件夹
fs.mkdir('public/img', 0777, (err)=> {
    if(err){
        console.log(err);
    }else {
        console.log("创建成功");
    }
})

fs.mkdir('public/utils', 0777, (err)=> {
    if(err){
        console.log(err);
    }else {
        console.log("utils创建成功");
    }
})

// 修改文件夹权限
fs.chmod("public/img",0333,function (err) {
    if(err){
        return console.log(err);
    }else {
        console.log("修改ok");
    }
})

//修改文件夹名称
fs.rename("public/img","public/image",function (err) {
    if(err){
        return console.log(err);
    }else {
        console.log("img文件夹重命名成功");
    }
})

// 在img文件夹下写入文件
fs.writeFile('public/img/11.txt', 'img文件写入',{flag:"a"}, function(err) {
    if(err) {
        return console.log('err', err)
    }else {
        console.log('img文件写入成功')
    }
})

// 判断某个文件件是否存在，如果不存在创建，exists函数，是唯一一个回调函数中不带err的回调函数
fs.exists("public/img",function (exists) {
    if(exists){
        console.log("该文件夹已经存在");
    }else {
        fs.mkdir("img",function (err) {
            if(err){
                return console.log(err);
            }else {
                console.log("创建成功");
            }
        })
    }
})

// 删除空文件夹
fs.rmdir("public/utils",function (err) {
    if(err){
        return console.log(err);
    }else {
        console.log("utils文件夹删除成功");
    }
})

// 删除非空文件夹
// function delFile(url) {
//     let data = fs.readFileSync(url)
//     console.log('data=', data)
//     for (const i in data) {
//         if (data.hasOwnProperty(i)) {
//             let path = url + '/' + data[i]
//             console.log('path=', path)
//             let stat = fs.statSync(path)
//             if(stat.isFile()) {
//                 fs.unlinkSync(path)
//             } else {
//                 delFile(path)
//             }
//         }
//     }
//     fs.rmdirSync(url)
// }
// delFile("public/img")
function delFile(url) {
    var data = fs.readdirSync(url);
    for(var i = 0;i < data.length;i++){
        var path = url + "/" +data[i];
        var stat = fs.statSync(path);
        if(stat.isFile()){
            fs.unlinkSync(path);
        }else{
            delFile(path);
        }
    }
    console.log('data===' + fs.readdirSync(url));
    if(data.length == 0) {
        fs.rmdirSync(url);
    }
}
delFile("public/img");

app.listen(8003, ()=>{
    console.log('server start')
})