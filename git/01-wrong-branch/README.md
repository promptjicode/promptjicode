<div dir="rtl">
<h1 dir="rtl">أنقذتك من كارثة #01 · عملت commit على main بالغلط؟</h1>
<p dir="rtl"><strong>▶ <a href="https://promptjicode.github.io/promptjicode/git/01-wrong-branch/">جرّب بالمحاكي</a></strong>: شغّل الأوامر خطوة خطوة وشوف شو بيصير بالـ branches.</p>
<h2 dir="rtl">الحل بـ 3 أوامر</h2>
</div>

```bash
git switch -c login        # branch جديد من مكانك هلّق، والـ commit صار فيه
git switch main            # ارجع على main
git reset --hard HEAD~1    # رجّع main خطوة لورا
```

<div dir="rtl">
<p dir="rtl">النتيجة: الشغل بأمان على <code dir="ltr">login</code>، والـ <code dir="ltr">main</code> نضيف.</p>
<h2 dir="rtl">⚠️ بشرط</h2>
<ul dir="rtl">
<li dir="rtl"><strong>لسا ما عملت push.</strong> إذا عملت، الحل بالريل الجاي.</li>
<li dir="rtl"><strong>ما عندك تعديلات مش محفوظة</strong> (<code dir="ltr">git status</code> نضيف)، لأنو <code dir="ltr">--hard</code> بيمسح أي تعديل مش محفوظ.</li>
</ul>
<h2 dir="rtl">إذا بدك تسأل الذكاء الاصطناعي</h2>
</div>

```
عملت commit على main بالغلط، ولسا ما عملت push.
بدي انقل الـ commit لـ branch جديد اسمه login، وأرجّع main متل ما كان، بدون ما أخسر شي.
```
