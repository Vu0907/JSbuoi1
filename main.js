/*Bài 1
Đầu vào:
Lương 1 ngày;Số ngày làm

Xử lý:
Bước 1:Tạo 2 biến chứa giá trị Lương 1 ngày, Số ngày làm là: salary1day và workday
Bước 2:Tạo biến Tiền lương :salary
Bước 3 Gán salary=salary1day*workday
Bước 4 In salary

Đầu ra:
Tiền lương
*/
var salary1day = 100000;
var workday = 30;
var salary;
salary = salary1day * workday;
console.log("Tiền lương: " + salary);
/*Bài 2
Đầu vào:
5 số thực

Xử lý:
Bước 1:Tạo 5 biến chứa giá trị 5 số:so1, so2, so3, so4, so5
Bước 2:Tạo biến tổng của 5 số: tong
Bước 3:Tạo biến giá trị trung bình: trungbinh
Bước 4:Gán tong=so1+so2+so3+so4+so5
Bước 5:Gán trungbinh=tong/5
Bước 6:In trungbinh
Đầu ra:
giá trị trung bình
*/
var so1 = 5;
var so2 = 6;
var so3 = 2;
var so4 = 7;
var so5 = 10;
var tong;
var trungbinh;
var tong = so1 + so2 + so3 + so4 + so5;
var trungbinh = tong / 5;
console.log("Giá trị trung bình: " + trungbinh);

/*Bài 3
Đầu vào:
USD

Xử lý:
Bước 1:tạo biến USD; VND
Bước 2:Gán giá trị USD
Bước 3:Gán VND = USD*23500
Bước 4:In VND

Đầu ra:
VND
*/

var USD;
var VND;
USD = 2;
VND = USD * 23500;
console.log("Quy đổi VND: " + VND + " VND");

/*Bài 4
Đầu vào:
chiều dài; chiều rộng

Xử lý:
Bước 1:khai báo 2 biến giá trị chiều dài;chiều rộng là: dai; rong
Bước 2:khai báo diện tích,chu vi là: dientich; chuvi
Bước 3:gán dientich= dai*rong
Bước 4:gán chuvi= (dai+rong)*2
Bước 5:In dientich,chuvi

Đầu ra:
Diện tích; Chu vi
*/

var dai = 8;
var rong = 4;
var dientich;
var chuvi;
dientich = dai * rong;
chuvi = (dai + rong) * 2;
console.log("Diện tích: " + dientich);
console.log("Chu vi: " + chuvi);

/*Bài 5
Đầu vào:
số có 2 chữ số 

Xử lý:
Bước 1:khai báo biến giá trị số 2 chữ số: number
Bước 2:khai báo số hàng đơn vị; số hàng chục; tổng 2 ký số :donvi; chuc;tong2kyso
Bước 3:gán donvi= number%10
Bước 4:gán chuc= Math.floor(number/10)
Bước 5:gán tong2kyso=donvi+chuc
Bước 6:In tong
Đầu ra:
tổng 2 ký số
*/

var number = 84;
var donvi;
var chuc;
var tong2kyso;
donvi = number % 10;
chuc = Math.floor(number / 10);
tong2kyso = donvi + chuc;
console.log("Tổng 2 ký số: " + tong2kyso);
