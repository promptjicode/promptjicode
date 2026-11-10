<div dir="rtl">
<h1 dir="rtl">سؤال مقابلة #03 · شو بيطبع هاللوب؟ (🟡 Mid)</h1>
<p dir="rtl"><strong>▶ <a href="https://promptjicode.github.io/promptjicode/interview/03-closure-loop/">امشي معه خطوة خطوة</a></strong>: بدّل بين <code dir="ltr">var</code> و<code dir="ltr">let</code>، وشغّل الكود الحقيقي بمتصفحك.</p>
</div>

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
```

<div dir="rtl">
<h2 dir="rtl">الجواب: B · <code dir="ltr">3 3 3</code></h2>
<ol dir="rtl">
<li dir="rtl"><code dir="ltr">var</code> بيعمل <strong>علبة وحدة</strong> للـ <code dir="ltr">i</code>، لكل اللفّات.</li>
<li dir="rtl">بكل لفّة، <code dir="ltr">setTimeout</code> بيحط دالة بالطابور، وما بيشغّلها هلّق (متل السؤال #01: الـ Macrotasks بتستنى الكود العادي يخلص).</li>
<li dir="rtl">اللوب بيخلص، فبيصير بالعلبة 3، والشرط <code dir="ltr">i &lt; 3</code> بيوقّف.</li>
<li dir="rtl">هلّق بس بتشتغل الدوال التلاتة. كلهن ماسكين <strong>نفس العلبة</strong>، مش نسخة من قيمتها وقت ما انعملوا، فكلهن بيقروا 3.</li>
</ol>
<h2 dir="rtl">وهلّق إذا…؟</h2>
</div>

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
```

<div dir="rtl">
<p dir="rtl">الجواب: <code dir="ltr">0 1 2</code>. <code dir="ltr">let</code> بيعمل علبة جديدة بكل لفّة، فكل دالة بتمسك علبتها.</p>
<h2 dir="rtl">حلول تانية لو مجبور على <code dir="ltr">var</code></h2>
<ul dir="rtl">
<li dir="rtl">لفّ الجسم بدالة بتاخد <code dir="ltr">i</code> كـ parameter (IIFE)، فبتعمل علبة لكل لفّة.</li>
<li dir="rtl">أو مرّر القيمة لـ <code dir="ltr">setTimeout</code> نفسه: <code dir="ltr">setTimeout(console.log, 0, i)</code>.</li>
</ul>
<h2 dir="rtl">القاعدة</h2>
<p dir="rtl">الـ closure بيمسك <strong>المتغير نفسه</strong>… مش قيمته.</p>
</div>
