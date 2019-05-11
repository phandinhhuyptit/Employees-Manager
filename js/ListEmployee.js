function ListEmployee ()
{

	this.ListEmployee=[];

}
ListEmployee.prototype.AddEmployee = function(nv){

	this.ListEmployee.push(nv);

};
ListEmployee.prototype.InformationExportEmployee = function(){
	for (var i = 0; i < this.ListEmployee.length; i++) {

			this.ListEmployee[i].ExportInformation;
	}
	};	
ListEmployee.prototype.NumberEmployee = function(){
	
	return this.ListEmployee.length;
	};	

ListEmployee.prototype.PayRoll = function(nv){
	for (var i = 0; i < this.ListEmployee.length; i++) {
	 	this.ListEmployee[i].CalculatorSalary
	 } 
};
ListEmployee.prototype.CheckTheCodeOfEmployee = function(ID){
			var Check=true;
		for (var i = 0; i < this.ListEmployee.length; i++) {
			if(ID==this.ListEmployee[i].EmployeeCode){
				Check =false;
				return Check;
			}
		}	
		return Check;
};
// ListEmployee.prototype.RemoveEmployee = function(argument){
// 		for (var i = 0; i < this.ListEmployee.length; i++) {
						

// 		}
// };