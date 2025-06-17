// 微信二维码弹窗
document.addEventListener('DOMContentLoaded', function() {
    const wechatLink = document.getElementById('wechat-link');
    const wechatPopup = document.getElementById('wechat-popup');
    const closePopup = document.querySelector('.close-popup');

    if (wechatLink && wechatPopup) {
        wechatLink.addEventListener('click', function(e) {
            e.preventDefault();
            wechatPopup.style.display = 'flex';
        });

        closePopup.addEventListener('click', function() {
            wechatPopup.style.display = 'none';
        });

        // 点击弹窗外部关闭弹窗
        wechatPopup.addEventListener('click', function(e) {
            if (e.target === wechatPopup) {
                wechatPopup.style.display = 'none';
            }
        });
    }

    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 导航栏滚动效果
    const header = document.querySelector('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 200) {
            // 向下滚动
            header.style.transform = 'translateY(-100%)';
        } else {
            // 向上滚动
            header.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, false);

    // 添加动画效果
    const animateElements = document.querySelectorAll('.feature-card, .post-card, .content-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(element);
    });
});