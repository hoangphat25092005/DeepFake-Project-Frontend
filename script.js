document.addEventListener('DOMContentLoaded', () => {
    // Khởi tạo Lucide icons
    lucide.createIcons();

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navItems = document.querySelectorAll('.nav-item');
    const contentSections = document.querySelectorAll('.content-section');
    const brandLogo = document.getElementById('brand-logo');

    // --- Mobile Menu Toggle ---
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const menuIcon = mobileMenuButton.querySelector('i');
            // Chuyển đổi icon
            if (mobileMenu.classList.contains('hidden')) {
                menuIcon.setAttribute('data-lucide', 'menu');
            } else {
                menuIcon.setAttribute('data-lucide', 'x');
            }
            lucide.createIcons(); // Render lại icon sau khi thay đổi
        });
    }

    // --- Single Page Application (SPA) Logic ---
    function showSection(targetId) {
        // Ẩn tất cả các section nội dung
        contentSections.forEach(section => {
            section.classList.remove('active');
            section.classList.add('hidden');
        });

        // Hiển thị section mục tiêu
        const activeSection = document.getElementById(targetId);
        if (activeSection) {
            activeSection.classList.remove('hidden');
            activeSection.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Cuộn lên đầu trang
        }

        // Cập nhật class active cho các mục điều hướng
        navItems.forEach(item => {
            item.classList.remove('active-menu-link');
            const dataPage = item.getAttribute('data-page');

            // Logic: Highlight 'About Us' nếu đang ở bất kỳ trang con nào của About Us
            if (dataPage === 'about' && targetId.startsWith('about-us-')) {
                item.classList.add('active-menu-link');
            } else if (dataPage === targetId) {
                item.classList.add('active-menu-link');
            }
        });
    }

    // Event listeners cho các mục điều hướng
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const page = item.getAttribute('data-page');
            
            // Nếu click vào 'About Us' ở nav chính, hiển thị trang 1
            if (page === 'about') {
                showSection('about-us-page-1');
            } else {
                showSection(page);
            }
            // Đóng menu mobile nếu đang mở
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                const menuIcon = mobileMenuButton.querySelector('i');
                menuIcon.setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            }
        });
    });

    // Event listener cho logo thương hiệu (quay về trang mặc định)
    if (brandLogo) {
        brandLogo.addEventListener('click', (e) => {
            e.preventDefault();
            // Trang mặc định khi click logo
            showSection('about-us-page-1'); 
        });
    }

    // --- About Us Page Navigation (Next/Previous buttons) ---
    // Gắn event listener cho cả nút Next và Previous
    document.querySelectorAll('.next-page-button, .prev-page-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const targetPageId = e.target.getAttribute('data-target');
            if (targetPageId) {
                showSection(targetPageId);
            }
        });
    });

    // Khởi tạo trang: hiển thị trang About Us 1 khi tải lần đầu
    showSection('about-us-page-1');
});