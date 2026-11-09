<div dir="rtl">
<h1 dir="rtl">سؤال مقابلة #01 · شو بيطبع هالكود؟ (🟡 Mid)</h1>
<p dir="rtl"><strong>▶ <a href="https://promptjicode.github.io/promptjicode/interview/01-event-loop/">امشي معه خطوة خطوة</a></strong>: وشغّل الكود الحقيقي بمتصفحك.</p>
</div>

```js
console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
console.log(4);
```

<div dir="rtl">
<h2 dir="rtl">الجواب: <code dir="ltr">1 4 3 2</code></h2>
<ol dir="rtl">
<li dir="rtl"><code dir="ltr">console.log(1)</code> كود عادي، بيتنفّذ فوراً.</li>
<li dir="rtl"><code dir="ltr">setTimeout</code> بيحط الدالة بطابور الـ <strong>Macrotasks</strong>، حتى لو الوقت 0.</li>
<li dir="rtl"><code dir="ltr">then</code> بيحط الدالة بطابور الـ <strong>Microtasks</strong>.</li>
<li dir="rtl"><code dir="ltr">console.log(4)</code> كود عادي كمان.</li>
<li dir="rtl">فضي الـ Call Stack، فالمتصفح بيفضّي <strong>كل</strong> الـ Microtasks أول، فبيطبع 3.</li>
<li dir="rtl">وبعدين بياخد <strong>مهمة وحدة</strong> من الـ Macrotasks، فبيطبع 2.</li>
</ol>
<h2 dir="rtl">وهلّق إذا…؟</h2>
</div>

```js
console.log(1);
setTimeout(() => console.log(2), 0);
queueMicrotask(() => console.log(3));
(async () => {
  console.log(4);
  await null;
  console.log(5);
})();
console.log(6);
```

<div dir="rtl">
<p dir="rtl">الجواب: <code dir="ltr">1 4 6 3 5 2</code>. الدالة الـ <code dir="ltr">async</code> بتبلّش فوراً لحد أول <code dir="ltr">await</code>، وباقيها بيروح على الـ Microtasks بعد <code dir="ltr">queueMicrotask</code>.</p>
<h2 dir="rtl">القاعدة</h2>
<p dir="rtl">كود عادي ← كل الـ Microtasks ← مهمة وحدة من الـ Macrotasks ← وهيك.</p>
</div>
