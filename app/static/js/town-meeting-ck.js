/**
 * CSV to Table plugin
 * http://code.google.com/p/jquerycsvtotable/
 *
 * Copyright (c) 2010 Steve Sobel
 * http://honestbleeps.com/
 *
 * v0.9 - 2010-06-22 - First release.
 *
 * Example implementation:
 * $('#divID').CSVToTable('test.csv');
 *
 * The above line would load 'test.csv' via AJAX and render a table.  If 
 * headers are not specified, the plugin assumes the first line of the CSV
 * file contains the header names.
 *
 * Configurable options:
 * separator    - separator to use when parsing CSV/TSV data
 *              - value will almost always be "," or "\t" (comma or tab)
 *              - if not specified, default value is ","
 * headers      - an array of headers for the CSV data
 *              - if not specified, plugin assumes that the first line of the CSV
 *                file contains the header names.
 *              - Example: headers: ['Album Title', 'Artist Name', 'Price ($USD)']
 * tableClass   - class name to apply to the <table> tag rendered by the plugin.
 * theadClass   - class name to apply to the <thead> tag rendered by the plugin.
 * thClass      - class name to apply to the <th> tag rendered by the plugin.
 * tbodyClass   - class name to apply to the <tbody> tag rendered by the plugin.
 * trClass      - class name to apply to the <tr> tag rendered by the plugin.
 * tdClass      - class name to apply to the <td> tag rendered by the plugin.
 * loadingImage - path to an image to display while CSV/TSV data is loading
 * loadingText  - text to display while CSV/TSV is loading
 *              - if not specified, default value is "Loading CSV data..."
 *
 *
 * Upon completion, the plugin triggers a "loadComplete" event so that you
 * may perform other manipulation on the table after it has loaded. A
 * common use of this would be to use the jQuery tablesorter plugin, found
 * at http://tablesorter.com/
 *
 * An example of such a call would be as follows, assuming you have loaded
 * the tablesorter plugin.
 *
 * $('#CSVTable').CSVToTable('test.csv', 
 *     { 
 *        loadingImage: 'images/loading.gif', 
 *        startLine: 1,
 *        headers: ['Album Title', 'Artist Name', 'Price ($USD)']
 *     }
 * ).bind("loadComplete",function() { 
 *     $('#CSVTable').find('TABLE').tablesorter();
 * });;

 *
 */(function(e){String.prototype.splitCSV=function(e){for(var t=this.split(e=e||","),n=t.length-1,r;n>=0;n--)t[n].replace(/"\s+$/,'"').charAt(t[n].length-1)=='"'?(r=t[n].replace(/^\s+"/,'"')).length>1&&r.charAt(0)=='"'?t[n]=t[n].replace(/^\s*"|"\s*$/g,"").replace(/""/g,'"'):n?t.splice(n-1,2,[t[n-1],t[n]].join(e)):t=t.shift().split(e).concat(t):t[n].replace(/""/g,'"');return t};e.fn.CSVToTable=function(t,n){var r={tableClass:"CSVTable",theadClass:"",thClass:"",tbodyClass:"",trClass:"",tdClass:"",loadingImage:"",loadingText:"Loading CSV data...",separator:",",startLine:0},n=e.extend(r,n);return this.each(function(){var r=e(this),i="";n.loadingImage?loading='<div style="text-align: center"><img alt="'+n.loadingText+'" src="'+n.loadingImage+'" /><br>'+n.loadingText+"</div>":loading=n.loadingText;r.html(loading);e.get(t,function(t){var s='<table class="'+n.tableClass+'">',o=t.replace("\r","").split("\n"),u=0,a=0,f=new Array;e.each(o,function(t,r){if(t==0&&typeof n.headers!="undefined"){f=n.headers;a=f.length;s+='<thead class="'+n.theadClass+'"><tr class="'+n.trClass+'">';e.each(f,function(e,t){s+='<th class="'+n.thClass+'">'+t+"</th>"});s+='</tr></thead><tbody class="'+n.tbodyClass+'">'}if(t==n.startLine&&typeof n.headers=="undefined"){f=r.splitCSV(n.separator);a=f.length;s+='<thead class="'+n.theadClass+'"><tr class="'+n.trClass+'">';e.each(f,function(e,t){s+='<th class="'+n.thClass+'">'+t+"</th>"});s+='</tr></thead><tbody class="'+n.tbodyClass+'">'}else if(t>=n.startLine){var o=r.splitCSV(n.separator);if(o.length>1){u++;o.length!=a&&(i+="error on line "+t+": Item count ("+o.length+") does not match header count ("+a+") \n");u%2?oddOrEven="odd":oddOrEven="even";s+='<tr class="'+n.trClass+" "+oddOrEven+'">';e.each(o,function(e,t){s+='<td class="'+n.tdClass+'">'+t+"</td>"});s+="</tr>"}}});s+="</tbody></table>";i?r.html(i):r.fadeOut(500,function(){r.html(s)}).fadeIn(function(){setTimeout(function(){r.trigger("loadComplete")},0)})})})}})(jQuery);$("#town_budget_table").CSVToTable("https://docs.google.com/spreadsheet/pub?key=0Aq_2MzT25yU2dGNmdHhZa0g2NmE2SXhRc3BlemdISlE&output=csv",{tableClass:"table table-bordered table-striped"});$("#public_bank_table").CSVToTable("https://docs.google.com/spreadsheet/pub?key=0Aq_2MzT25yU2dFd2aEpCQmZnRzZteldQYjh0Z2JUcGc&output=csv",{tableClass:"table table-bordered table-striped"});$("#school_budget_table").CSVToTable("https://docs.google.com/spreadsheet/pub?key=0Aq_2MzT25yU2dGFYUExwbTMxM240WHd1aDFfeGFsUmc&output=csv",{tableClass:"table table-bordered table-striped"});$("#tar_sands_table").CSVToTable("https://docs.google.com/spreadsheet/pub?key=0AtWnpcGxoF0xdGJueWdaWDQ5WHdZVTg4TlE1al9GUWc&output=csv",{tableClass:"table table-bordered table-striped"});