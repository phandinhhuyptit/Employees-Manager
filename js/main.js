//Create object List Employee	
var listEmployee=new ListEmployee();
// Get ID Of Elements
function GetID(ele){

	var getid=document.getElementById(ele);
	return getid;
}
// Create Array Notify  
function ArrayNotify(value){


	var arry=["Please Check Again Last Name","Please Check Again Name",
			 "Please Check Again ID ","You haven't selected position ",
			 "Please Check Again Email","Please Check Charater Of Last Name", 
			 "Please Check Charater Of Name","Please Check Charater Of Email",
			 "Please Check Again Salary","Please Check Again WorkDay","Please Check Again AllWance",
			 "Please Check Charater Of Salary","Please Check Charater Of WorkDay","Please Check Charater Of AllWance",
			 "Please Choose Date","ID Identical Please Check"];
	return arry[value];


}
// Check When User Import Information
function CheckImport(idInput,idnotify,value){

	var result= false;
	var notify=GetID(idnotify);
	var ElementID=GetID(idInput);
	var compare=CheckLength(3,26,value,idInput,idnotify);
	if(ElementID.value == "" || !compare )
	{
	 	result=false;
	 	notify.style.display="block";	
		notify.innerHTML=ArrayNotify(value);
	}	
	else{
		result=true;
		notify.style.display="none";
	}
	
	return result;	
		
}

function CheckImportNumber(idInput,idnotify,value){

	var result= false;
	var notify=GetID(idnotify);
	var ElementID=GetID(idInput);
	var compare=CheckLength(1,15,value,idInput,idnotify);
	if(ElementID.value == "" || !compare )
	{
	 	result=false;
	 	notify.style.display="block";	
		notify.innerHTML=ArrayNotify(value);
	}	
	else{
		result=true;
		notify.style.display="none";
	}
	
	return result;	
		
}
function CheckCalendar(idInput,idnotify,value){

	var result= false;
	var notify=GetID(idnotify);
	var ElementID=GetID(idInput);	
	if(ElementID.value == "" )
	{
	 	result=false;
	 	notify.style.display="block";	
		notify.innerHTML=ArrayNotify(value);
	}	
	else{
		result=true;
		notify.style.display="none";
	}
	
	return result;	
		
}
function CheckPosition(){
	var result=false;
	var Position=GetID('selectoption');
	var notify=GetID('notifyposition');
	if(Position.selectedIndex==0)
	{	
		notify.style.display="block";		
		notify.innerHTML=ArrayNotify(3);
		result=false;
	}
	else{
		notify.style.display="none";
		result=true;
	}	
	return result;
}

function CheckPositionOfFormEdit(){
	var result=false;
	var Position=GetID('Editselectoption');
	var notify=GetID('Editnotifyposition');
	if(Position.selectedIndex==0)
	{	
		notify.style.display="block";		
		notify.innerHTML=ArrayNotify(3);
		result=false;
	}
	else{
		notify.style.display="none";
		result=true;
	}	
	return result;
}
function CheckEmail()
{	var result=false;
	var notify=GetID('notifyemail');	
	var email=GetID('email');
	if(email.value == "")
	{
		result=false;
	 	notify.style.display="block";
		notify.innerHTML=ArrayNotify(4);
	}
	else{
		result=true;
		notify.style.display="none";
	}
	return result;	
}
function CheckEmailFormEdit()
{	var result=false;
	var notify=GetID('notifyEditemail');	
	var email=GetID('Editemail');
	if(email.value == "")
	{
		result=false;
	 	notify.style.display="block";
		notify.innerHTML=ArrayNotify(4);
	}
	else{
		result=true;
		notify.style.display="none";
	}
	return result;	
}

function CheckCharater(idInput,idnotify,values){
	var notify=GetID(idnotify);	
	var charater=GetID(idInput).value;
	var result=false;
	var ArrayCharater=/^[a-zA-Z\s]+$/;
	// var letters=/^[a-zA-Z\s]+$/;
	if(charater.match(ArrayCharater))
	{
	 	notify.style.display="none";
	 	result=true;
	 	
	}
	else{
		result=false;
		notify.style.display="block";
		notify.innerHTML=ArrayNotify(values);
	}
	return result;
}
function CheckCharaterNumber(idInput,idnotify,values){
	var notify=GetID(idnotify);	
	var charater=GetID(idInput).value;
	var result=false;
	var ArrayCharater=/^([0-9])*$/;
	// var letters=/^[a-zA-Z\s]+$/;
	if(charater.match(ArrayCharater))
	{
	 	notify.style.display="none";
	 	result=true;
	 	
	}
	else{
		result=false;
		notify.style.display="block";
		notify.innerHTML=ArrayNotify(values);
	}
	return result;
}
function CheckCharaterGamilOfFormEdit()
{
	var result=false;
	var limitcharater = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	var notify=GetID('notifyEditemail');	
	var email=GetID('Editemail').value;
	if(email.match(limitcharater))
	{
	 	notify.style.display="none";
	 	result=true;
	 	
	}
	else{
		result=false;
		notify.style.display="block";
		notify.innerHTML=ArrayNotify(7);
		
	}
	return result;
}
function CheckCharaterGmail()
{
	var result=false;
	var limitcharater = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	var notify=GetID('notifyemail');	
	var email=GetID('email').value;
	if(email.match(limitcharater))
	{
	 	notify.style.display="none";
	 	result=true;
	 	
	}
	else{
		result=false;
		notify.style.display="block";
		notify.innerHTML=ArrayNotify(7);
		
	}
	return result;
}
function CheckLength(MinLenght,MaxLenght,Values,idInput,idnotify){
		var result=false;
		var  GetLenghtOfIdInput=GetID(idInput).value;
		var notify=GetID(idnotify);
		if(GetLenghtOfIdInput.length < MinLenght || GetLenghtOfIdInput.length > MaxLenght )
		{		
				result=false;
				// notify.style.display="block";
				// notify.innerHTML=ArrayNotify(values);			
		}
		else{
				result=true;
				notify.style.display="none";
		}	
	return result;	
}
//Check All Funtion to serve for add list employee
function CheckFormEdit()
{
		var result1 =CheckImport('Editlastname','notifyEditlastname',0);
		if(result1){
			CheckCharater('Editlastname','notifyEditlastname',5);
		}
		result2=CheckImport('Editname','notifyEditname',1);
		if(result2){
			result2=CheckCharater('Editname','notifyEditname',6);
		}
		result3=CheckEmailFormEdit();
		if(result3)
		{
			result3=CheckCharaterGamilOfFormEdit();	
		}
		result4= CheckImportNumber('EditSalary','notifyEditSalary',7);
		if(result4){
			result4=CheckCharaterNumber('EditSalary','notifyEditSalary',11);	
		}
		result5= CheckImportNumber('EditWorkDay','notifyEditWorkDay',8);
		if(result5)
		{
			result5=CheckCharaterNumber('EditWorkDay','notifyEditWorkDay',12);	
		}
		result6= CheckImportNumber('EditAllWance','notifyEditAllWance',9);
		if(result6)
		{
			result6=CheckCharaterNumber('EditAllWance','notifyEditAllWance',13);	
		}
		result7=CheckImport('EditID','notifyEditID',2);
		if(result7){
				result7=CheckIdOfFormEditEmployee()
		}	
		result8=CheckPositionOfFormEdit();		
		result9=CheckCalendar('Editcalendar','notifyEditcalendar',14);	
		if(result1==true && result2==true && result3==true && result4 ==true && result5== true 
		&& result6==true && result7 ==true && result8== true && result9== true )
		{
				return true;
		}
		return false;		
}
function Valid_Check()
{
		var result1 =CheckImport('lastname','notifylastname',0);
		if(result1){
			result1=CheckCharater('lastname','notifylastname',5);
		}
		result2=CheckImport('name','notifyname',1);
		if(result2){
			result2=CheckCharater('name','notifyname',6);
		}
		result3=CheckEmail();
		if(result3)
		{
			result3=CheckCharaterGmail();	
		}
		result4= CheckImportNumber('Salary','notifySalary',7);
		if(result4){
			result4=CheckCharaterNumber('Salary','notifySalary',11);	
		}
		result5= CheckImportNumber('WorkDay','notifyWorkDay',8);
		if(result5)
		{
			result5=CheckCharaterNumber('WorkDay','notifyWorkDay',12);	
		}
		result6= CheckImportNumber('AllWance','notifyAllWance',9);
		if(result6)
		{
			result6=CheckCharaterNumber('AllWance','notifyAllWance',13);	
		}
		result7=CheckImport('ID','notifyID',2);
		if(result7){
				result7=CheckIdOfEmployee();;
		}	
		result8=CheckPosition();		
		result9=CheckCalendar('calendar','notifycalendar',14);	
		if(result1==true && result2==true && result3==true && result4 ==true && result5== true 
		&& result6==true && result7 ==true && result8== true && result9== true )
		{
				return true;
		}
		return false;		
}
// Search Charater of ID	
function Search(ele){
	var eleshortened= new Array();
	var eleshortened2="";
	var k=0;
	for (var i = 0; i < ele.length; i++) {
		if(ele[i]== '_')
		{
			for (var j = i+1; j < ele.length; j++) {
					
					eleshortened[k]=ele[j];
					k++;
			}
		}
	}
		for (var i = 0; i < eleshortened.length; i++) {
			eleshortened2=eleshortened2+eleshortened[i];
		}
	return eleshortened2;
}
// Check All ID of Employee
function CheckIdOfFormEditEmployee(){
	var Check=false;
	var EmployeeCode=GetID('ID').value;
	var notifyID=GetID('notifyID');
	Check=listEmployee.CheckTheCodeOfEmployee(EmployeeCode);
	if(!Check){

		notifyID.style.display="block";
		notifyID.innerHTML=ArrayNotify(15);

	}
	else{		
		notifyID.style.display = 'none';
	}
	return Check;

}
function CheckIdOfEmployee(){
	var Check=false;
	var EmployeeCode=GetID('ID').value;
	var notifyID=GetID('notifyID');
	Check=listEmployee.CheckTheCodeOfEmployee(EmployeeCode);
	if(!Check){

		notifyID.style.display="block";
		notifyID.innerHTML=ArrayNotify(15);

	}
	else{		
		notifyID.style.display = 'none';
	}
	return Check;

}


document.getElementById('search').addEventListener('keyup',function(){
		// Declare variables
		
		var Input=document.getElementById('search');
		var tBody=document.getElementById('theBody');
		var filter = Input.value.toUpperCase();	
		var length = tBody.rows.length;
		// console.log(tBody.rows.cells[0]);
		// console.log(tBody.rows[0].cells[1]);
		// console.log(tBody.rows[0].cells[0]);
				
		for (var i = 0; i < length; i++) {
			
			var td=tBody.rows[i].cells[2];
			var cc=td.innerHTML.toUpperCase().indexOf(filter);			
			if(td){

				if(td.innerHTML.toUpperCase().indexOf(filter) > -1)
				{
					tBody.rows[i].style.display="";

				}
				else{

					tBody.rows[i].style.display="none";

				}
			}
		}

});

// function KeyDownEsc(ele){
// 	GetID(ele).addEventListener('keydown',function(){
// 		var event;
// 		var KeyCode = event.which || event.keyCode; // event.keyCode
//    		 if (KeyCode == 27) {  // 27 is the ESC key

//    		 		GetID('FormEdit').style.visibility = 'hidden';
// 				GetID('FormEdit').style.opacityvisibility = '0';
// 				var dark=document.querySelector('.darkness');
// 				dark.classList.remove('show');

// 	    	}
		
// 	});
// }

document.querySelector('.darkness').addEventListener('click',function(){	
		GetID('FormEdit').style.visibility = 'hidden';
		GetID('FormEdit').style.opacityvisibility = '0';
		var dark=document.querySelector('.darkness');
		dark.classList.remove('show'); 	
	});
// function HandlingClickAndKeyDownEsc ()
// {
// 	// KeyDownEsc("manage-employee");
// 	click("darkness");
// }
function FormEdit(ele,ID,lengthOfRows,lenghtOfCells,FirstLength){				
		
	GetID(ele).addEventListener('click',function(){		
		if(CheckFormEdit()){
		GetID('FormEdit').style.visibility = 'hidden';
		GetID('FormEdit').style.opacityvisibility = '0';
		var dark=document.querySelector('.darkness');
		dark.classList.remove('show');	
		var LastName=GetID('Editlastname').value;
		var Name=GetID('Editname').value;
		var EmployeeCode=GetID('EditID').value;
		var Email=GetID('Editemail').value;
		var Calendar=GetID('Editcalendar').value;
		var Selectoption=GetID('Editselectoption').options[GetID('Editselectoption').selectedIndex].text;
		var Salary=GetID('EditSalary').value;
		var WorkDay=GetID('EditWorkDay').value;
		var AllWance=GetID('EditAllWance').value;			
		var employee = new Employee(LastName,Name,EmployeeCode,Email,Calendar, 
										Selectoption,WorkDay,Salary,AllWance);
		// console.log(FirstLength);
		// console.log(lenghtOfCells);
		// console.log(lengthOfRows);										
		for ( var i = 0; i < lengthOfRows; i++) {
			if(ID==listEmployee.ListEmployee[i].EmployeeCode){

				for (var j = 0; j < lenghtOfCells-1; j++) {
					if(FirstLength==lengthOfRows){
						theBody.rows[i].cells[j].innerHTML=employee.ArrayAttritubes[j];
					}
					else if (lengthOfRows==0)
					{	
						theBody.rows[0].cells[j].innerHTML=employee.ArrayAttritubes[j];	
					}
					else if (FirstLength!=lengthOfRows)
					{
						theBody.rows[i-1].cells[j].innerHTML=employee.ArrayAttritubes[j];

					}					
				}

			}
		}
		 ClearUpEditForm();
		}	
	});	
}			
// Edit Information of Employee 
function EditHandler(ele){
	var FirstLength=document.getElementById('theBody').rows.length;
	GetID(ele).addEventListener('click',function(){
		GetID('FormEdit').style.visibility = 'visible';
		GetID('FormEdit').style.opacity = '1';
		var dark=document.querySelector('.darkness');
		dark.classList.add('show');
		var ID=Search(this.id);
		var theBody=document.getElementById('theBody');
		var lengthOfRows=theBody.rows.length;
		var lenghtOfCells=theBody.rows[0].cells.length;
		FormEdit("Edit",ID,lengthOfRows,lenghtOfCells,FirstLength);	
	});
}
// Remove Employ in List Employee

function RemoveHandler(ele){
var FirstLength=document.getElementById('theBody').rows.length;
GetID(ele).addEventListener('click',function(){	
	var ElementShortened=Search(this.id);
	var theBody=document.getElementById('theBody');
	var LenghthListEmployee=listEmployee.ListEmployee.length;			
	for (var i = 0; i < LenghthListEmployee ; i++) {
			if(ElementShortened==listEmployee.ListEmployee[i].EmployeeCode){				
					if(FirstLength==theBody.rows.length ){
						theBody.deleteRow(i);						
								
					}
					else if(theBody.rows.length==1){
							theBody.deleteRow(0);
							

					}
					else if (FirstLength!=theBody.rows.length ){

							theBody.deleteRow(i-1);
					}						
			}	
		
	}
});
}
// Add List Employee
function AddListEmployee(){
	var tbody=document.getElementById('theBody');
	var tr=document.querySelectorAll('#theBody tr')
	var numberEmployee=listEmployee.NumberEmployee();
	tbody.innerHTML="";	
	for (var i = 0; i < numberEmployee; i++) {
		var Employee=listEmployee.ListEmployee[i];
			CreatRow(tbody,Employee);
			EditHandler("Edit_"+Employee.EmployeeCode);
			RemoveHandler("Remove_"+Employee.EmployeeCode);
	}
}
// Created Row And Cell
function CreatRow(tbody,employee){
	var length=employee.ArrayAttritubes.length;
	var tr=document.createElement('tr');
	tbody.appendChild(tr);	
	for (var i = 0; i < length; i++) {
			if(i < length-2 ){
			var td=document.createElement('td');
			td.innerHTML=employee.ArrayAttritubes[i];
			tr.appendChild(td);
			}
			else if ( i >=length-3 && i < length ){
				var td=document.createElement('td');
			td.innerHTML=employee.ArrayAttritubes[i]+"$";
			tr.appendChild(td);
			}
	}
	var buttonEdit="<button type='button' class='btn btn-primary'value='Edit' id='Edit_"+employee.EmployeeCode+"'>Edit</button>";
	var buttonRemove="<button type='button' class='btn btn-primary ' value='Remove' id='Remove_"+employee.EmployeeCode+"'>Remove</button>";
	var buttonUpdate="<button type='button' class='btn btn-primary btnUpdate' value='Update' id='Update_"+employee.EmployeeCode+"'>Update</button>";
	var button =buttonEdit+buttonRemove+buttonUpdate;
	td=document.createElement('td');
	td.innerHTML=button;
	tr.appendChild(td);
}
//
//Reset All Attributes
function ClearUpEditForm()
{				
		var LastName=GetID('Editlastname');
		var Name=GetID('Editname');
		var EmployeeCode=GetID('EditID');
		var Email=GetID('Editemail');
		var Calendar=GetID('Editcalendar');
		var Selectoption=GetID('Editselectoption');
		var Salary=GetID('EditSalary');
		var WorkDay=GetID('EditWorkDay');
		var AllWance=GetID('EditAllWance');
			LastName.value="";
			Name.value="";
			EmployeeCode.value="";
			Email.value="";
			Calendar.value="";
			Selectoption.selectedIndex=0;
			Salary.value="";
			WorkDay.value="";
			AllWance.value="";
}
function ClearUp()
{				
			var LastName=GetID('lastname');
			var Name=GetID('name');
			var EmployeeCode=GetID('ID');
			var Email=GetID('email');
			var Calendar=GetID('calendar');
			var Selectoption=GetID('selectoption');
			var Salary=GetID('Salary');
			var WorkDay=GetID('WorkDay');
			var AllWance=GetID('AllWance');
			LastName.value="";
			Name.value="";
			EmployeeCode.value="";
			Email.value="";
			Calendar.value="";
			Selectoption.selectedIndex=0;
			Salary.value="";
			WorkDay.value="";
			AllWance.value="";
}
	document.getElementById('MoreStaff').addEventListener('click',function(){

		if (Valid_Check()){
			// create attributes 			
			var LastName=GetID('lastname').value;
			var Name=GetID('name').value;
			var EmployeeCode=GetID('ID').value;
			var Email=GetID('email').value;
			var Calendar=GetID('calendar').value;
			var Selectoption=GetID('selectoption').options[GetID('selectoption').selectedIndex].text;
			var Salary=GetID('Salary').value;
			var WorkDay=GetID('WorkDay').value;
			var AllWance=GetID('AllWance').value;			
			var employee = new Employee(LastName,Name,EmployeeCode,Email,Calendar, 
										Selectoption,WorkDay,Salary,AllWance);			
			listEmployee.AddEmployee(employee);				
			AddListEmployee();
			ClearUp();

					}		
});