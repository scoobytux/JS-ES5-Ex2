// Additional step for formatting currency
const currencyFormat = new Intl.NumberFormat("vn-VN");

/**
 * 🎃 Bài 1: Tính tiền lương nhân viên
 */
// -------------- Đề bài --------------
// Lương 1 ngày: 100.000
// Cho người dùng nhập vào số ngày làm
// Công thức tính lương (1): lương 1 ngày * số ngày làm

// -------------- SOLUTION --------------
// Input:   - Lương 1 ngày: 100.000 VND
//          - Số ngày làm do người dùng nhập
// Process: 1. Tạo hằng salaryPerDay gán giá trị 100000
//          2. Tạo biến numberOfWorkingDay gán giá trị do
//             người dùng nhập vào
//          3. Tạo biến workerSalary lưu giữ kết quả được tính từ
//             công thức tính lương (1) như đề bài
//          4. In kết quả được tính từ bước 3 ở trên
//             ra console
// Output: lương công nhân được tính từ công thức (1)
const salaryPerDay = 100000;
var numberOfWorkingDay = 30,
  workerSalary = salaryPerDay * numberOfWorkingDay;

console.log(
  `Answer 1: Salary of a worker with ${numberOfWorkingDay} day(s) of working: ${currencyFormat.format(
    workerSalary
  )} VND`
);

/**
 * 🎃 Bài 2: Tính giá trị trung bình
 */
// -------------- Đề bài --------------
// Nhập vào 5 số thực
// Tính giá trị trung bình của 5 số này và xuất ra màn hình

// -------------- SOLUTION --------------
// Input:   - 5 số thực do người dùng nhập vào
// Process: 1. Tạo ra 5 biến realNumber1, realNumber2, ...
//             realNumber5 được gán giá trị do người dùng
//             nhập vào
//          2. Tạo biến average lưu giữ kết quả được tính từ
//             công thức tính trung bình cộng 5 số
//          3. In kết quả được tính từ bước 2 ở trên
//             ra console
// Output: trung bình cộng của 5 số thực
var realNumber1 = 1.1,
  realNumber2 = 2.1,
  realNumber3 = 3.1,
  realNumber4 = 4.1,
  realNumber5 = 5.1;
var average =
  (realNumber1 + realNumber2 + realNumber3 + realNumber4 + realNumber5) / 5;
console.log(
  `Answer 2: Average of 5 real numbers ${realNumber1}, ${realNumber2}, ${realNumber3}, ${realNumber4}, ${realNumber5}: ${average}`
);

/**
 * 🎃 Bài 3: Quy đổi tiền
 */
// -------------- Đề bài --------------
// Quy đổi USD sang VND. Biết rằng 1 USD = 23.500 VND

// -------------- SOLUTION --------------
// Input:   - Cho 1 USD = 23.500 VND
//          - Nhập số tiền USD cần đổi sang VND
// Process: 1. Tạo ra hằng vnd_per_usd gán giá trị 23500
//          2. Tạo biến usd gán giá trị được nhập vào
//             từ người dùng
//          3. Tạo biến vnd gán giá trị là kết quả của
//             phép tính usd * vnd_per_usd
//          4. In kết quả được tính từ bước 3 ở trên
//             ra console
// Output: tiền vnd sau khi đổi từ usd
const vnd_per_usd = 23500;
var usd = 100,
  vnd = usd * vnd_per_usd;

console.log(`Answer 3: ${usd} USD = ${currencyFormat.format(vnd)} VND`);

/**
 * 🎃 Bài 4: Tính diện tích, chu vi hình chữ nhật
 */
// -------------- Đề bài --------------
// Nhập chiều dài và chiều rộng của hình chữ nhật (HCN)
// Tính và xuất ra diện tích, chu vi của HCN đó

// -------------- SOLUTION --------------
// Input: - Nhập chiều dài và chiều rộng của HCN
// Process: 1. Tạo ra 2 biến rectWidth và rectLength gán lần lượt
//             chiều dài và chiều rộng được nhập vào
//          2. Tạo biến rectPerimeter giữ giá trị chu vi của HCN
//             được tính bằng công thức (rectWidth + rectLength)*2
//          3. Tạo biến rectArea giữ giá trị diện tích của HCN
//             được tính bằng công thức rectWidth * rectLength
//          4. In kết quả được tính từ bước 2 và 3 ở trên
//             ra console
// Output: Chu vi, diện tích của HCN
var rectWidth = 10,
  rectLength = 20;

var rectPerimeter = (rectWidth + rectLength) * 2,
  rectArea = rectWidth * rectLength;

console.log(`Answer 4: - Perimeter of Rectangle: ${rectPerimeter}
          - Area of Rectangle: ${rectArea}`);

/**
 * 🎃 Bài 5: Tính tổng 2 ký số
 */
// -------------- Đề bài --------------
// Nhập vào 1 số có 2 chữ số
// Tính tổng 2 ký số của số vừa nhập

// -------------- SOLUTION --------------
// Input: - Nhập vào 1 số có 2 chữ số
// Process: 1. Tạo ra biến numberWith2Digits gán giá trị được
//             nhập vào
//          2. Tạo biến unitPlace giữ giá trị hàng đơn vị được tính
//             bằng công thức numberWith2Digits % 10
//          3. Tạo biến tenPlace giữ giá trị hàng chục được tính
//             bằng công thức Math.floor(numberWith2Digits / 10)
//          4. Tạo biến total lưu giữ kết quả là tổng của unitPlace + tenPlace
//          5. In kết quả được tính từ bước 4 ở trên ra console
// Output: Tổng 2 ký số của số có 2 chữ số
var numberWith2Digits = 55,
  unitPlace = numberWith2Digits % 10,
  tenPlace = Math.floor(numberWith2Digits / 10),
  total = unitPlace + tenPlace;

console.log(`Answer 5: Total of 2 digits ${numberWith2Digits}: ${total}`);
