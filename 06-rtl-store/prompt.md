<div dir="rtl">
<h1 dir="rtl">06 · حطيتلو RTL… ومع ذلك في شي مقلوب</h1>
<p dir="rtl"><strong>▶ <a href="https://promptjicode.github.io/promptjicode/06-rtl-store/">جرّب الصفحتين</a></strong>: قارن سهم «التالي»، والمسافة جنب أيقونة السلة، ورقم الموبايل.</p>
<h2 dir="rtl">البرومبت الضعيف</h2>
</div>

```
اعملي صفحة متجر بالعربي RTL
```

<div dir="rtl">
<p dir="rtl">النتيجة: الكتابة صارت من اليمين… بس سهم «التالي» عم يأشّر لورا، وأيقونة السلة لازقة بالكلام، ورقم الموبايل طلع مخربط (<code dir="ltr">67 45 123 555 90+</code>).</p>
<h2 dir="rtl">ليش؟</h2>
<p dir="rtl"><code dir="ltr">dir="rtl"</code> بتقلب الكتابة وترتيب العناصر. بس في أشياء <strong>ما بتنقلب لحالها</strong>:</p>
<ul dir="rtl">
<li dir="rtl">الأسهم والأيقونات اللي إلها اتجاه.</li>
<li dir="rtl">الـ CSS اللي فيه جهات ثابتة: <code dir="ltr">margin-left</code>، <code dir="ltr">right: 0</code>، <code dir="ltr">text-align: left</code>.</li>
<li dir="rtl">الأرقام والإيميلات جوّا النص العربي.</li>
</ul>
<h2 dir="rtl">البرومبت الصح</h2>
</div>

```
اعملي صفحة متجر بالعربي RTL.
الأسهم والأيقونات اللي إلها اتجاه لازم تنقلب.
استعمل margin-inline بدل left و right.
وخلي أرقام الموبايل والإيميلات تنقرأ صح جوّا النص العربي.
```

<div dir="rtl">
<h2 dir="rtl">شو بتلاقي بالكود</h2>
<ul dir="rtl">
<li dir="rtl"><strong><code dir="ltr">margin-inline-end</code></strong> بدل <code dir="ltr">margin-right</code>: بتنقلب لحالها مع اتجاه الصفحة. ونفس الشي <code dir="ltr">padding-inline</code>، و<code dir="ltr">inset-inline-start</code> بدل <code dir="ltr">left</code>.</li>
<li dir="rtl"><strong><code dir="ltr">:dir(rtl)</code> مع <code dir="ltr">transform: scaleX(-1)</code></strong> على الأسهم: السهم بيأشّر للجهة الصح.</li>
<li dir="rtl"><strong><code dir="ltr">&lt;bdi dir="ltr"&gt;</code></strong> حوالين الرقم: بينقرأ <code dir="ltr">+90 555 123 45 67</code> متل ما هو.</li>
</ul>
<h2 dir="rtl">الفكرة</h2>
<p dir="rtl"><strong>ما يكفي تقلّه RTL… قلّه شو لازم ينقلب.</strong></p>
</div>
