// 連結HTML檔案

function doGet(){
  var html=HtmlService.createTemplateFromFile("form");
  var check=html.evaluate();
  var show=check.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return show;
}



// 新增資料到試算表

function addData(rowData){
    //抓時間
  var currentDate=new Date();
    //取得目前的試算表檔案
  var ss=SpreadsheetApp.getActiveSpreadsheet();
    //抓試算表名稱
    //請輸入您的試算表名稱在這裡
  var ws=ss.getSheetByName("工作表1");
    //插入資料
  ws.appendRow([currentDate,rowData.name,rowData.email,rowData.comments]);
}
