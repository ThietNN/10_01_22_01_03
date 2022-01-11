let a = 0;
let b = 1;
let n;
let s;
s = a + ", " + b + ", ";
for (n=1;n<=9;n++){
    a += b;
    b += a;
s += a + ", " + b + ", "
}
document.write(s)

