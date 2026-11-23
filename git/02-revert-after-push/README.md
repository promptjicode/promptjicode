<div dir="rtl">
<h1 dir="rtl">أنقذتك من كارثة #02 · عملت <code dir="ltr">push</code>… وبعدين انتبهت؟</h1>
<p dir="rtl"><strong>▶ <a href="https://promptjicode.github.io/promptjicode/git/02-revert-after-push/">جرّب بالمحاكي</a></strong>: قارن <code dir="ltr">revert</code> مع <code dir="ltr">reset + push --force</code>، وشوف شو بيصير عند زميلتك سارة.</p>
<h2 dir="rtl">الحل بأمر واحد</h2>
</div>

```bash
git revert HEAD    # commit جديد بيلغي آخر commit
git push           # push عادي، بدون force
```

<div dir="rtl">
<p dir="rtl">النتيجة: الغلط انلغى، والتاريخ ما انمسح منه شي، والفريق بياخد التصحيح بـ <code dir="ltr">git pull</code> متل أي commit.</p>
<h2 dir="rtl">ليش مش <code dir="ltr">reset</code>؟</h2>
<p dir="rtl">الـ commit صار على السيرفر وعند الفريق. <code dir="ltr">reset</code> مع <code dir="ltr">push --force</code> بيغيّر التاريخ على السيرفر، فتاريخ الباقيين ما عاد يطابقه، وأول push منهم ممكن يرجّع الغلط أو يضيّع شغل.</p>
<h2 dir="rtl">إذا الغلط مش بآخر commit</h2>
</div>

```bash
git log --oneline     # find the commit hash
git revert 3f2a1c4    # revert that commit only
git push
```

<div dir="rtl">
<h2 dir="rtl">إذا بدك تسأل الذكاء الاصطناعي</h2>
</div>

```text
I pushed a bad commit to main and my team already pulled it.
Undo it without rewriting history (no reset, no force push).
Give me the exact git commands and explain what each one does.
```
