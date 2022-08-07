function dealTime(num){
	return num>9? num+'':'0'+num
}
function getWeek () {
    let showweek=""
    let week = new Date().getDay();
    if(week==0){
        showweek="Sun";}
    else if (week==1){
        showweek="Mon";}
    else if (week==2){
        showweek="Tues";}   
    else if (week==3){
        showweek="Wed";}
    else if (week==4){
        showweek="Thur";} 
    else if (week==5){
        showweek="Fri";}
    else if (week==6){
        showweek="Sat";}
    
    let result1=showweek+"day"
    document.getElementById('getWeek').innerText=result1

    setTimeout(getWeek,1000)
}
function getTime () {
	let now=new Date()
	let h=now.getHours(),m=now.getMinutes(),s=now.getSeconds(),dd= now.getDate(),yy=now.getFullYear(),mm=now.getMonth()
	let text=h>12? 'pm':'am'
	// 替换内容 两位数处理
	h=dealTime(h)
	m=dealTime(m)
	s=dealTime(s)
    dd=dealTime(dd)
    yy=dealTime(yy)
    mm=dealTime(mm)


	let result=h+':'+""+m+':'+s

	document.getElementById('getTime').innerText=result

	// 1s返回
	setTimeout(getTime,1000)

}

window.addEventListener('load',getTime)
window.addEventListener('load',getWeek)
// 监听事件

