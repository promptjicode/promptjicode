<div dir="rtl">

# سؤال مقابلة #01 · شو بيطبع هالكود؟ (🟡 Mid)

**▶ [امشي معه خطوة خطوة](https://promptjicode.github.io/promptjicode/interview/01-event-loop/)**: وشغّل الكود الحقيقي بمتصفحك.

</div>

```js
console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
console.log(4);
```

<div dir="rtl">

## الجواب: `1 4 3 2`

1. `console.log(1)` كود عادي، بيتنفّذ فوراً.
2. `setTimeout` بيحط الدالة بطابور الـ **Macrotasks**، حتى لو الوقت 0.
3. `then` بيحط الدالة بطابور الـ **Microtasks**.
4. `console.log(4)` كود عادي كمان.
5. فضي الـ Call Stack، فالمتصفح بيفضّي **كل** الـ Microtasks أول، فبيطبع 3.
6. وبعدين بياخد **مهمة وحدة** من الـ Macrotasks، فبيطبع 2.

## وهلّق إذا…؟

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

الجواب: `1 4 6 3 5 2`. الدالة الـ `async` بتبلّش فوراً لحد أول `await`، وباقيها بيروح على الـ Microtasks بعد `queueMicrotask`.

## القاعدة

كود عادي ← كل الـ Microtasks ← مهمة وحدة من الـ Macrotasks ← وهيك.

</div>
