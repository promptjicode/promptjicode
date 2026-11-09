<div dir="rtl">
<h1 dir="rtl">سؤال مقابلة #02 · <code dir="ltr">z-index: 9999</code>… وطلعت تحت؟ (🔴 Senior)</h1>
<p dir="rtl"><strong>▶ <a href="https://promptjicode.github.io/promptjicode/interview/02-stacking-context/">جرّب بإيدك</a></strong>: شغّل وطفّي الخصائص على الكارد، والمتصفح بيقلّك إذا النافذة فوق أو تحت.</p>
</div>

```css
.header { position: sticky; z-index: 10; }
.card   { transform: translateZ(0); }
.modal  { position: fixed; z-index: 9999; }  /* النافذة جوّا الكارد */
```

<div dir="rtl">
<h2 dir="rtl">الجواب: B · لأنو الأب عليه <code dir="ltr">transform</code></h2>
<p dir="rtl"><code dir="ltr">z-index</code> بيتقارن بس جوّا نفس <strong>العلبة</strong> (stacking context). <code dir="ltr">transform</code> على الكارد عمل علبة جديدة، فالنافذة صارت محبوسة جوّاها. برّا، الصفحة بتقارن الكارد (<code dir="ltr">auto</code>، يعني متل 0) مع الهيدر (10)، فالهيدر بيربح، والعلبة كلها بتنزل تحته. لو حطيت للنافذة مليون، ما رح يفرق.</p>
<h2 dir="rtl">شو بيعمل علبة جديدة؟</h2>
<ul dir="rtl">
<li dir="rtl"><code dir="ltr">transform</code> و<code dir="ltr">filter</code> و<code dir="ltr">opacity</code> أقل من 1</li>
<li dir="rtl"><code dir="ltr">will-change</code> لخاصية من هدول، و<code dir="ltr">isolation: isolate</code></li>
<li dir="rtl"><code dir="ltr">position</code> غير static <strong>مع</strong> <code dir="ltr">z-index</code> غير <code dir="ltr">auto</code>، و<code dir="ltr">fixed</code> و<code dir="ltr">sticky</code> دايماً</li>
<li dir="rtl">عنصر جوّا flex أو grid وعليه <code dir="ltr">z-index</code></li>
</ul>
<h2 dir="rtl">الحل</h2>
<ul dir="rtl">
<li dir="rtl">طلّع النافذة برّا الكارد (آخر الـ <code dir="ltr">body</code>، أو <code dir="ltr">createPortal</code> بـ React).</li>
<li dir="rtl">أو استعمل <code dir="ltr">&lt;dialog&gt;</code> مع <code dir="ltr">showModal()</code>: بيفتح بالـ top layer فوق كل العلب.</li>
<li dir="rtl">أو شيل الخاصية اللي عملت العلبة إذا ما إلها داعي.</li>
</ul>
<h2 dir="rtl">وهلّق إذا…؟</h2>
<p dir="rtl">مين منهم بيعمل علبة جديدة؟ <code dir="ltr">opacity: 0.99</code> · <code dir="ltr">filter: blur(0)</code> · <code dir="ltr">will-change: transform</code> · <code dir="ltr">position: relative</code></p>
<p dir="rtl">الجواب: <strong>الأول والتاني والتالت</strong>. <code dir="ltr">position: relative</code> لحاله لأ، إلا إذا انحطله <code dir="ltr">z-index</code>.</p>
<h2 dir="rtl">القاعدة</h2>
<p dir="rtl"><code dir="ltr">z-index</code> ما بيطلع من علبته. إذا رقم كبير ما اشتغل، لا تكبّر الرقم… دوّر على الأب اللي عامل علبة.</p>
</div>
