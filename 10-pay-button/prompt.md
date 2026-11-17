<div dir="rtl">
<h1 dir="rtl">10 · زر دفع… ضغطة زيادة، وانسحبت المصاري مرتين</h1>
<p dir="rtl"><strong>▶ <a href="https://promptjicode.github.io/promptjicode/10-pay-button/">جرّب الزرين</a></strong>: اضغط كل زر أكتر من مرة بسرعة وراقب كشف الحساب. السيرفر وهمي وبطيء عن قصد، وما في مصاري حقيقية.</p>
<h2 dir="rtl">البرومبت الضعيف</h2>
</div>

```
اعملي زر "ادفع" لصفحة الطلب
```

<div dir="rtl">
<p dir="rtl">النتيجة: زر حلو وشغّال… بس لما يكون النت بطيء، بتضغط وما بيصير شي، فبتضغط كمان مرة. وكل ضغطة طلب جديد: طلبيتين، وانسحب المبلغ مرتين.</p>
<h2 dir="rtl">البرومبت الصح</h2>
</div>

```
اعملي زر "ادفع" لصفحة الطلب.
أول ما ينضغط: وقّفه لحد ما يرجع الرد، وفرجي "عم يدفع…".
إذا نجح: قلّه "تم الدفع ✓". وإذا فشل: رجّع الزر وقلّه شو صار.
وابعت مع الطلب رقم خاص فيه، حتى لو وصل مرتين يتحسب مرة وحدة.
```

<div dir="rtl">
<h2 dir="rtl">شو بتلاقي بالكود</h2>
</div>

```js
payBtn.addEventListener('click', async () => {
  payBtn.disabled = true;
  payBtn.textContent = 'Paying…';
  try {
    await fetch('/api/pay', {
      method: 'POST',
      headers: { 'Idempotency-Key': orderId },
      body: JSON.stringify(order),
    });
    showSuccess();
  } catch {
    payBtn.disabled = false;
    showError();
  }
});
```

<div dir="rtl">
<ul dir="rtl">
<li dir="rtl"><strong><code dir="ltr">disabled</code></strong>: الزر بيتوقف من أول ضغطة، فما في ضغطة تانية.</li>
<li dir="rtl"><strong>«عم يدفع…»</strong>: المستخدم بيعرف إنو الطلب ماشي، فما بيضغط كمان مرة.</li>
<li dir="rtl"><strong>رسالة نجاح أو فشل</strong>: إذا فشل، الزر بيرجع، والمستخدم بيعرف شو صار.</li>
<li dir="rtl"><strong><code dir="ltr">Idempotency-Key</code></strong>: كل طلب إلو رقم خاص. إذا وصل للسيرفر مرتين (مثلاً النت عاد الطلب)، السيرفر بيعرف إنو نفس الطلب، وما بيسحب مرتين.</li>
</ul>
<h2 dir="rtl">الفكرة</h2>
<p dir="rtl"><strong>الزر مش بس شكل وأكشن… الزر وعد، ومسؤولية تجاه أمان المستخدم.</strong></p>
</div>
