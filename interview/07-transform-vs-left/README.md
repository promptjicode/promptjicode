<div dir="rtl">
<h1 dir="rtl">سؤال مقابلة #07 · نفس الحركة… وحدة بتتقطّع ووحدة لأ (🔴 Senior)</h1>
<p dir="rtl"><strong>▶ <a href="https://promptjicode.github.io/promptjicode/interview/07-transform-vs-left/">جرّب بإيدك</a></strong>: مربع بيتحرك بـ <code dir="ltr">left</code> ومربع بـ <code dir="ltr">transform</code>. شغّل JavaScript تقيل ثانيتين، وشوف مين بيوقف.</p>
<p dir="rtl">بدك تحرّك كارد 300px لليمين بدون تقطيع، حتى لو الصفحة تقيلة. أنهي سطر؟</p>
</div>

```css
.card.move {
  /* ??? */
  transition: 0.4s;
}
```

<div dir="rtl">
<ul dir="rtl">
<li dir="rtl">A) <code dir="ltr">left: 300px;</code></li>
<li dir="rtl">B) <code dir="ltr">margin-left: 300px;</code></li>
<li dir="rtl">C) <code dir="ltr">transform: translateX(300px);</code></li>
<li dir="rtl">D) <code dir="ltr">padding-left: 300px;</code></li>
</ul>
<h2 dir="rtl">الجواب: C · <code dir="ltr">transform</code></h2>
<ol dir="rtl">
<li dir="rtl">المتصفح بيرسم كل frame بـ 3 مراحل: <strong>Layout</strong> (وين كل عنصر) ← <strong>Paint</strong> (الألوان والنصوص) ← <strong>Composite</strong> (تركيب الطبقات).</li>
<li dir="rtl"><code dir="ltr">left</code> و<code dir="ltr">margin</code> و<code dir="ltr">padding</code> بيغيّروا مكان العنصر أو حجمه بالصفحة، فبيعيدوا <strong>الـ 3 مراحل</strong> 60 مرة بالثانية، وكلها على الـ main thread.</li>
<li dir="rtl">إذا الـ JavaScript مشغول، الـ main thread ما بيلحق، والحركة <strong>بتتقطّع</strong>.</li>
<li dir="rtl"><code dir="ltr">transform</code> ما بيغيّر الـ layout، فبيروح على الـ <strong>Composite</strong> بس، واللي بيشتغل على الـ GPU بـ thread لحاله، فبيضل ناعم.</li>
</ol>
<h2 dir="rtl">وهلّق إذا…؟</h2>
</div>

```css
.card:hover {
  box-shadow: 0 20px 40px #0008;
}
```

<div dir="rtl">
<p dir="rtl">أنهي مراحل بيعيد المتصفح؟ الجواب: <strong>Paint وComposite</strong>. الظل ما بيغيّر مكان شي (ما في Layout)، بس لازم ينرسم من جديد. لهيك الأخف إنك تحط الظل بعنصر تاني وتحرّك <code dir="ltr">opacity</code> تبعه.</p>
<h2 dir="rtl">القاعدة</h2>
<p dir="rtl">حرّك بـ <code dir="ltr">transform</code> و<code dir="ltr">opacity</code>… مش بـ <code dir="ltr">left</code> و<code dir="ltr">top</code>.</p>
</div>
