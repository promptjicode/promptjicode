<div dir="rtl">
<h1 dir="rtl">04 · هاد الفورم… بيخسرك نص المسجلين</h1>
<p dir="rtl"><strong>▶ <a href="https://promptjicode.github.io/promptjicode/04-signup-form/">جرّب الفورمين</a></strong>: اكتب إيميل غلط بالاتنين، وجرّب من موبايلك لتشوف الاقتراحات التلقائية.</p>
<h2 dir="rtl">البرومبت الضعيف</h2>
</div>

```
اعملي فورم تسجيل
```

<div dir="rtl">
<p dir="rtl">النتيجة: فورم شكله مرتب، بس لما تغلط بيقلك «يوجد خطأ في البيانات» وما بيقلك وين. وكل شي لازم تكتبه بإيدك.</p>
<h2 dir="rtl">البرومبت الصح</h2>
</div>

```
اعملي فورم تسجيل بالعربي (اسم، إيميل، كلمة سر).
إذا المستخدم غلط: رسالة واضحة بالعربي تحت الحقل نفسه، وما تطلع قبل ما يخلص كتابة.
خلي الموبايل يعبّي الاسم والإيميل لحاله، وفرجيه شروط كلمة السر وهو عم يكتب.
```

<div dir="rtl">
<h2 dir="rtl">شو بتلاقي بالكود</h2>
<ul dir="rtl">
<li dir="rtl"><strong><code dir="ltr">autocomplete</code></strong> (<code dir="ltr">name</code>، <code dir="ltr">email</code>، <code dir="ltr">new-password</code>): الموبايل والمتصفح بيقترحوا البيانات ويعبّوها بضغطة.</li>
<li dir="rtl"><strong>الفحص عند <code dir="ltr">blur</code></strong>: الرسالة بتطلع لما تطلع من الحقل، مو من أول حرف. وبعد ما تطلع، بتختفي أول ما تصلّح.</li>
<li dir="rtl"><strong><code dir="ltr">aria-describedby</code> و<code dir="ltr">role="alert"</code></strong>: قارئ الشاشة بيقرأ رسالة الخطأ مع الحقل نفسه.</li>
<li dir="rtl"><strong>شروط كلمة السر</strong> بتصير ✓ وإنت عم تكتب، بدل ما تكتشف الغلط بعد الضغط.</li>
</ul>
<h2 dir="rtl">الفكرة</h2>
<p dir="rtl"><strong>قلّه شو لازم يصير لما المستخدم يغلط</strong>، مو بس كيف بدو يبين الفورم.</p>
</div>
