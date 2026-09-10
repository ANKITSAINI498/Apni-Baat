export const nowLabel = () => new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: '2-digit' }).format(new Date());
export const todayLabel = () => new Intl.DateTimeFormat('en-IN', { day: '2-digit', month: 'short' }).format(new Date());
