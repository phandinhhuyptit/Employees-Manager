// created constructor
function Employee(lastName,Name,EmployeeCode,Email
				,Birthday,Postion,WorkDay,BasicSalary,Allowance){


	this.Lastname=lastName;
	this.Name=Name;
	this.EmployeeCode=EmployeeCode;
	this.Email=Email;
	this.Birthday=Birthday;
	this.Postion=Postion;
	this.WorkDay=WorkDay;
	this.BasicSalary=BasicSalary;
	this.Allowance=Allowance;
	this.ArrayAttritubes=[this.Lastname,this.Name,this.EmployeeCode,this.Email,this.Birthday
						,this.Postion,this.WorkDay,this.BasicSalary,this.Allowance];
	
}
Employee.prototype.CalculatorSalary = function(){

	return Employee.BasicSalary*Employee.WorkDay+Employee.Allowance;	
};
Employee.prototype.ArrayAttritube = function(){
	this.ArrayAttritubes=[this.Lastname,this.Name,this.EmployeeCode,this.Email,this.Birthday
						,this.Postion,this.WorkDay,this.BasicSalary,this.Allowance];
};
Employee.prototype.NumberAttritubes = function(){
	return this.ArrayAttritubes.length;
};
Employee.prototype.ExportInformation  = function(){
	for (var i = 0; i < this.ArrayAttritubes.length; i++) {
		this.ArrayAttritubes[i];
	}
};










