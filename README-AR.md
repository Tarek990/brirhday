# مشروع مفاجأة عيد ميلاد إسراء 🎂💗

## المتطلبات
- Node.js إصدار 20.9 أو أحدث.
- npm.

## التشغيل
افتح Terminal داخل فولدر المشروع ثم نفّذ:

```bash
npm install
npm run dev
```

افتح `http://localhost:3000` في المتصفح.

## محتويات المشروع
- `/` صفحة السؤال Love / Not Love.
- `/birthday` صفحة عيد الميلاد والرسالة والصور والموسيقى والهدية.
- Motion للحركات والانتقالات.
- Canvas Confetti للاحتفال عند الدخول وفتح الهدية.
- Lucide React للأيقونات.

## إضافة صور إسراء
1. ضع الصور داخل `public/images/`.
2. افتح `src/components/PhotoGallery.tsx`.
3. غيّر `src: null` إلى مسار الصورة، مثال: `src: "/images/esraa-1.jpg"`.

## إضافة الأغنية
1. ضع ملف MP3 داخل `public/audio/`.
2. سمّيه `esraa-song.mp3`.
3. شغّل الموقع واضغط زر Play في مشغل الموسيقى.

## تخصيص الرسائل
عدّل نص الترحيب والرسالة والهدية في:
`src/components/BirthdayPage.tsx` و `src/components/SurpriseGift.tsx`.

## ملاحظة
زر Not Love يتحرك عند اقتراب الماوس أو عند لمسه. على الشاشات اللمسية لا يوجد حدث hover، لذلك يتغير مكانه عند اللمس.
