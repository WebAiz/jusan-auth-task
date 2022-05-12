export function notFoundPage() {
    window.location.replace('404.html')
}

export function serverError() {
    window.location.replace('500.html')
}

export function handleRoute() {
    const pathname = window.location.pathname;
    if (pathname !== '/' && pathname !== '/index.html' && pathname !== '/register.html') {
        notFoundPage()
    }
}