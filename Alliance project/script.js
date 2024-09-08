// Background image rotation for the hero section
const heroSection = document.querySelector('.hero');
const heroImages = [
    'https://i.ytimg.com/vi/zCZKu8D_260/maxresdefault.jpg',
    'https://www.searchurcollege.com/blog/wp-content/uploads/2022/01/Alliance-University-Cut-Off.png',
    'https://www.besonline.in/college_images/alliance-university-au-bangalore-fees-structure.jpg'
];
let heroImageIndex = 0;

function changeHeroBackground() {
    heroImageIndex = (heroImageIndex + 1) % heroImages.length;
    heroSection.style.backgroundImage = `url(${heroImages[heroImageIndex]})`;
}

// Change background image every 5 seconds
setInterval(changeHeroBackground, 5000);

// Background image rotation for the courses section
const coursesSection = document.querySelector('.courses');
const coursesImages = [
    'https://th.bing.com/th/id/OIP.WvHj5rsDVM8r5blc5Ov2BwHaFy?w=768&h=600&rs=1&pid=ImgDetMain',
    'https://thumbs.dreamstime.com/z/online-course-hand-businessman-blurred-background-92481617.jpg',
    'https://www.westgatech.edu/wp-content/uploads/2018/09/computer-training-1024x973.jpg'
];
let coursesImageIndex = 0;

function changeCoursesBackground() {
    coursesImageIndex = (coursesImageIndex + 1) % coursesImages.length;
    coursesSection.style.backgroundImage = `url(${coursesImages[coursesImageIndex]})`;
}

// Change background image every 5 seconds
setInterval(changeCoursesBackground, 5000);
