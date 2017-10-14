var str="";
var data=0;//保存输入的数据
var num1;//保存第一次输入的数据
var oper;//保存输入的操作符
var nstr;//保存转化成数字的数据
/*获取输入数字*/
function showdata(show){
	var strnum=show.value
	//连续输入数据为string类型
	str=document.getElementById("inp1");
	data=data+strnum;
	str.value=str.value+strnum;
	nstr=parseFloat(data);//转换为num类型
}
/*获取操作符*/
function showoper(show){
	oper=show.value;
	var stroper="";
	str=document.getElementById("inp1");
	stroper=stroper+oper;
	str.value=str.value+stroper;
	num1=nstr;
	data=0;
}
/*计算结果*/
function calculate(n1,n2,oper){
	var ans=0;
	if(oper=="+")
	{
		ans=n1+n2;
	}
	else if(oper=="-")
	{
		ans=n1-n2;
	}
	else if(oper=="*")
	{
		ans=n1*n2;
	}
	else if(oper=="/")
	{
		ans=n1/n2;
	}
	return ans;
}
function inputEquel(e){
	var strans=document.getElementById("inp1");
	if(e.value=="="){
		strans.value=calculate(num1,nstr,oper);
	}
}
function inputClear(e){
	var c=document.getElementById("inp1");
	if(e.value=="c")
	{
		c.value="0";
		data=0;
	}
}
