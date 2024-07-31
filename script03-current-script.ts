const getCurrentScript = () => {
    const scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
};