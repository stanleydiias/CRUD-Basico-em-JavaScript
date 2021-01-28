var selectedRow = null
var cont = 0;

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["empCode"] = document.getElementById("empCode").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    cont++;
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = cont;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.fullName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.empCode;
    cell4 = newRow.insertCell(3);
    if (data.salary >0)
    cell4.innerHTML = data.salary+ " Anos";
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.city;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = ` <a button type="button" class="btn btn-primary" onClick="onEdit(this)" data-bs-toggle="modal" data-bs-target="#modalRegistro" > <i class="fa fa-pencil-square-o" aria-hidden="true"> </i> </a>
    <a button type="button" class="btn btn-danger" onClick="onDelete(this)"> <i class="fa fa-trash-o" aria-hidden="true"> </i> </a> `

}



function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("empCode").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    console
    document.getElementById("fullName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("empCode").value = selectedRow.cells[2].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[3].innerHTML;
    document.getElementById("city").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[1].innerHTML = formData.fullName;
    selectedRow.cells[2].innerHTML = formData.empCode;
    selectedRow.cells[3].innerHTML = formData.salary;
    selectedRow.cells[4].innerHTML = formData.city;
}

function onDelete(td) {
    if (confirm('Tem certeza que deseja deletar este registro ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}