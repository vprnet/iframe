//@codekit-prepend "csvToTable.js"

$('#town_budget_table').CSVToTable('https://docs.google.com/spreadsheet/pub?key=0Aq_2MzT25yU2dGNmdHhZa0g2NmE2SXhRc3BlemdISlE&output=csv',
    {
        tableClass: 'table table-bordered table-striped'
});

$('#public_bank_table').CSVToTable('https://docs.google.com/spreadsheet/pub?key=0Aq_2MzT25yU2dFd2aEpCQmZnRzZteldQYjh0Z2JUcGc&output=csv',
    {
        tableClass: 'table table-bordered table-striped'
});

$('#school_budget_table').CSVToTable('https://docs.google.com/spreadsheet/pub?key=0Aq_2MzT25yU2dGFYUExwbTMxM240WHd1aDFfeGFsUmc&output=csv',
    {
        tableClass: 'table table-bordered table-striped'
});

$('#tar_sands_table').CSVToTable('https://docs.google.com/spreadsheet/pub?key=0AtWnpcGxoF0xdGJueWdaWDQ5WHdZVTg4TlE1al9GUWc&output=csv',
    {
        tableClass: 'table table-bordered table-striped'
});

$('#school_budget_revote_table').CSVToTable('https://docs.google.com/spreadsheet/pub?key=0Avbz2oU6HFFZdHdKbFoyWkwxcVVQbG1DbEpLTERCNHc&output=csv',
    {
        tableClass: 'table table-bordered table-striped'
});
