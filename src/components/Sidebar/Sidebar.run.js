function sidebarNav() {
    // Elements
    const sidebarNav = document.querySelector(".sidebar-nav");
    const layoutContainer = document.querySelector(".layout-container");
    const sidebarToggler = document.querySelector("#sidebar-toggler");
    const offcanvasToggler = document.querySelector("#offcanvas-toggler");
    const sidebarLayoutObfuscator = document.querySelector(".sidebar-layout-obfuscator");
    const body = document.body;

    // Helpers
    const makeArray = set => [].slice.call(set);
    // remove desktop offcanvas when app changes to mobile
    // so when it returns, the sidebar is shown again
    const restoreOffcanvas = () => {
        if (window.innerWidth < 768) {
            body.classList.remove("offcanvas-visible");
            offcanvasToggler.parentElement.classList.add("active");
        }
    };
    // find the a element in click context
    // doesn't check deeply, asumens two levels only
    const getItemElement = e => {
        let element = e.target,
            parent = element.parentNode;
        if (element.tagName.toLowerCase() === "a") return element;
        if (parent.tagName.toLowerCase() === "a") return parent;
        if (parent.parentNode.tagName.toLowerCase() === "a") return parent.parentNode;
    };

    // Behavior
    sidebarNav.addEventListener("click", e => {
        const item = getItemElement(e);
        // check click is on a tag
        if (!item) return;

        const liparent = item.parentElement;

        const lis = makeArray(liparent.parentElement.querySelectorAll("li")); // markup: ul > li > a

        // remove .active from childs
        lis.forEach(li => {
            makeArray(li.querySelectorAll("li")).forEach(el => el.classList.remove("active"));
        });

        // remove .active from siblings ()
        lis.forEach(li => {
            if (li !== liparent) li.classList.remove("active");
        });

        if (item.nextElementSibling && item.nextElementSibling.tagName === "UL") {
            liparent.classList.toggle("active");
            e.preventDefault();
        }
    });

    // Handler to toggle sidebar visibility on mobile
    sidebarToggler.addEventListener("click", e => {
        e.preventDefault();
        layoutContainer.classList.toggle("sidebar-visible");
        // toggle icon state
        e.target.parentElement.classList.toggle("active");
    });
    // Close sidebar when click on backdrop
    sidebarLayoutObfuscator.addEventListener("click", e => {
        e.preventDefault();
        layoutContainer.classList.remove("sidebar-visible");
        // restore icon
        sidebarToggler.parentElement.classList.remove("active");
    });

    // Handler to toggle sidebar visibility on desktop
    offcanvasToggler.addEventListener("click", e => {
        e.preventDefault();
        body.classList.toggle("offcanvas-visible");
        // toggle icon state
        e.target.parentElement.classList.toggle("active");
    });

    window.addEventListener("resize", restoreOffcanvas);
}

export default sidebarNav;
