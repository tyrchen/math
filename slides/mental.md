---
marp: true
title: 心算
theme: uncover
paginate: true
---

<!-- backgroundColor: white -->

<script src="assets/mental_math.js"></script>
<script>
document.getElementsByClassName("bespoke-marp-osc")[0].remove();
const mm = new MentalMath();
</script>

- [两位数加法](#2)
- [三位数加法](#3)
- [和为一百的补数](#4)
- [和为一千的补数](#5)
- [乘十一](#6)
- [结尾是五的平方](#7)
- [十位数相同末尾互补的两数乘积](#8)
- [二十以内的乘法](#9)
- [两位数乘一位数](#10)
- [三位数乘两位数](#11)
- [两位数乘两位数](#12)

---

### 两位数加法 <a href="#" onclick="mm.showAnswer('2');return false;">显示答案</a>
<div></div>

<script>
mm.render('2', mm.addTens());
</script>
<p>
<a href="#1">返回</a> | <a href="#" onclick="mm.render('2', mm.addTens());return false;">再来一个</a>
</p>

---

### 三位数加法 <a href="#" onclick="mm.showAnswer('3');return false;">显示答案</a>

<div></div>
<script>
mm.render('3', mm.addHundreds());
</script>
<p>
<a href="#1">返回</a> | <a href="#" onclick="mm.render('3', mm.addHundreds()); return false;">再来一个</a>
</p>

---
### 和为一百的补数 <a href="#" onclick="mm.showAnswer('4');return false;">显示答案</a>

<div></div>
<script>
mm.render('4', mm.complementNumberBy100());
</script>
<p>
<a href="#1">返回</a> | <a href="#" onclick="mm.render('4', mm.complementNumberBy100()); return false;">再来一个</a>
</p>

---
### 和为一千的补数 <a href="#" onclick="mm.showAnswer('5');return false;">显示答案</a>

<div></div>
<script>
mm.render('5', mm.complementNumberBy1000());
</script>
<p>
<a href="#1">返回</a> | <a href="#" onclick="mm.render('5', mm.complementNumberBy1000()); return false;">再来一个</a>
</p>

---

### 乘十一 <a href="#" onclick="mm.showAnswer('6');return false;">显示答案</a>

<div></div>
<script>
mm.render('6', mm.multiplyBy11());
</script>
<p>
<a href="#1">返回</a> | <a href="#" onclick="mm.render('6', mm.multiplyBy11()); return false;">再来一个</a>
</p>

---

### 结尾是五的平方 <a href="#" onclick="mm.showAnswer('7');return false;">显示答案</a>

<div></div>
<script>
mm.render('7', mm.squareEndsWith5());
</script>
<p>
<a href="#1">返回</a> | <a href="#" onclick="mm.render('7', mm.squareEndsWith5()); return false;">再来一个</a>
</p>

---

### 十位数相同末尾互补的两数乘积 <a href="#" onclick="mm.showAnswer('8');return false;">显示答案</a>

<div></div>
<script>
mm.render('8', mm.specialMultiply());
</script>
<p>
<a href="#1">返回</a> | <a href="#" onclick="mm.render('8', mm.specialMultiply()); return false;">再来一个</a>
</p>

---

### 二十以内的乘法 <a href="#" onclick="mm.showAnswer('9');return false;">显示答案</a>

<div></div>
<script>
mm.render('9', mm.multiply20());
</script>
<p>
<a href="#1">返回</a> | <a href="#" onclick="mm.render('9', mm.multiply20()); return false;">再来一个</a>
</p>

---

### 两位数乘一位数 <a href="#" onclick="mm.showAnswer('10');return false;">显示答案</a>

<div></div>
<script>
mm.render('10', mm.multiply2and1());
</script>
<p>
<a href="#1">返回</a> | <a href="#" onclick="mm.render('10', mm.multiply2and1()); return false;">再来一个</a>
</p>

---

### 三位数乘一位数 <a href="#" onclick="mm.showAnswer('11');return false;">显示答案</a>

<div></div>
<script>
mm.render('11', mm.multiply3and1());
</script>
<p>
<a href="#1">返回</a> | <a href="#" onclick="mm.render('11', mm.multiply3and1()); return false;">再来一个</a>
</p>

---

### 两位数乘两位数 <a href="#" onclick="mm.showAnswer('12');return false;">显示答案</a>

<div></div>
<script>
mm.render('12', mm.multiply2and2());
</script>
<p>
<a href="#1">返回</a> | <a href="#" onclick="mm.render('12', mm.multiply2and2()); return false;">再来一个</a>
</p>
