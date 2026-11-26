<div dir="rtl">
<h1 dir="rtl">أنقذتك من كارثة #03 · عملت <code dir="ltr">reset --hard</code>… وراح شغلك؟</h1>
<p dir="rtl"><strong>▶ <a href="https://promptjicode.github.io/promptjicode/git/03-reflog/">جرّب بالمحاكي</a></strong>: اعمل الكارثة بإيدك، وبعدين رجّع الشغل من <code dir="ltr">git reflog</code>.</p>
<h2 dir="rtl">الحل</h2>
</div>

```bash
git reflog                    # every place HEAD has been, even "deleted" commits
git reset --hard HEAD@{1}     # go back to where you were before the mistake
```

<div dir="rtl">
<p dir="rtl">لا تخاف، Git ما بينسى شي. الـ commits اللي «راحت» بـ <code dir="ltr">reset --hard</code> لسا موجودة، بس ما في branch بيأشّر عليها. <code dir="ltr">reflog</code> بيوريك وين كنت، و<code dir="ltr">reset --hard</code> بيرجّعك لهونيك.</p>
<h2 dir="rtl">انتبه</h2>
<ul dir="rtl">
<li dir="rtl">بيرجّع بس الشغل اللي كان معمولو <strong>commit</strong>. التعديلات اللي ما انحفظت وراحت بـ <code dir="ltr">--hard</code> ما بترجع.</li>
<li dir="rtl">إذا عملت كذا أمر بعد الغلط، مش دايماً <code dir="ltr">{1}</code>. دوّر باللستة على آخر commit بتعرفه واستعمل رقمه أو الـ hash تبعه.</li>
<li dir="rtl">الـ reflog محلي على جهازك، وبيضل حوالي 90 يوم.</li>
</ul>
<h2 dir="rtl">إذا بدك تسأل الذكاء الاصطناعي</h2>
</div>

```text
I ran git reset --hard by mistake and lost my last commits.
Show me how to find them with git reflog and restore my branch safely.
Explain what each command does before I run it.
```
