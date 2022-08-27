
function makeAppConfig() {
  const date = new Date();
  const year = date.getFullYear();

  const AppConfig = {
    brand: 'Theme Switcher',
    coreBrandName: 'umamaheswarid.com',
    user: 'Uma',
    year,
    layoutBoxed: false,               // true, false
    navCollapsed: false,              // true, false
    navBehind: false,                 // true, false
    fixedHeader: true,                // true, false
    sidebarWidth: 'middle',           // small, middle, large
    theme: 'light',                   // light, gray, dark
    colorOption: '34',                // 11,12,13,14,15,16; 21,22,23,24,25,26; 31,32,33,34,35,36
    AutoCloseMobileNav: true,         // true, false. Automatically close sidenav on route change (Mobile only)
    productLink: 'https://github.com/umamaheswaridharmalingam/angular-ui-theme-switcher',
    websiteLink: 'http://themeswitcher.umamaheswarid.com/',
    mainWebsiteLink: 'http://umamaheswarid.com/'
  };

  return AppConfig;
}

export const APPCONFIG = makeAppConfig();
