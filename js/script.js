document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');
    const socialIcons = document.querySelector('.social-icons'); // جلب عنصر الأيقونات الاجتماعية
    const body = document.body;

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active'); // يغير شكل الهمبرغر لـ X
        nav.classList.toggle('show');       // يظهر/يخفي قائمة التنقل
        socialIcons.classList.toggle('mobile-show'); // يظهر/يخفي أيقونات السوشيال ميديا في القائمة
        body.classList.toggle('no-scroll'); // يمنع السكرول عند فتح القائمة
    });

    // اختياري: إغلاق القائمة عند الضغط على أي رابط بداخلها
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            nav.classList.remove('show');
            socialIcons.classList.remove('mobile-show');
            body.classList.remove('no-scroll');
        });
    });

    // اختياري: إغلاق القائمة لو ضغط المستخدم خارجها (مع مراعاة الهيدر)
    document.addEventListener('click', (event) => {
        const isClickInsideHeader = menuToggle.contains(event.target) || nav.contains(event.target) || socialIcons.contains(event.target) || (event.target.closest('header') && window.innerWidth <= 768);
        
        if (!isClickInsideHeader && nav.classList.contains('show')) {
            menuToggle.classList.remove('active');
            nav.classList.remove('show');
            socialIcons.classList.remove('mobile-show');
            body.classList.remove('no-scroll');
        }
    });
});

// --------------------------------------------------
