process.on('exit',function(a){
    console.log('exit 이벤트 발생함.');
})

setTimeout(function(){
    console.log('5초 후에 시스템 종료 시도함.');
    process.exit(1);
},5000);

console.log('5초 뒤에 실행될 것임');